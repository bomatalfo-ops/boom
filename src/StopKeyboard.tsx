import { useEffect, useRef, useCallback, useState } from 'react';

interface StopKeyboardProps {
  enabled?: boolean;
  allowedKeys?: string[];
  onBlocked?: (e: KeyboardEvent) => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
  onGameStart?: () => void;
}

const UNBLOCKABLE_KEYS = new Set(['Escape', 'Meta']);

export default function StopKeyboard({
  enabled = true,
  allowedKeys = [],
  onBlocked,
  onFullscreenChange,
  onGameStart,
}: StopKeyboardProps) {
  const hasStarted = useRef(false);
  const [phase, setPhase] = useState<'prompt' | 'waiting' | 'started'>('prompt');

  // ── Click anywhere → fullscreen ─────────────────────────────────
  const enterFullscreen = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen({ navigationUI: 'hide' });
    } catch (err) {
      console.warn('Fullscreen failed:', err);
    } finally {
      // Always proceed even if fullscreen is denied
      setPhase('waiting');
    }
  }, []);

  // ── Keyboard blocking ────────────────────────────────────────────
  useEffect(() => {
    if (!enabled || phase === 'prompt') return;

    const handler = (e: KeyboardEvent) => {
      if (UNBLOCKABLE_KEYS.has(e.key)) return;
      const isAllowed = allowedKeys.some(
        (k) => k.toLowerCase() === e.key.toLowerCase()
      );
      if (!isAllowed) {
        e.preventDefault();
        e.stopImmediatePropagation();
        onBlocked?.(e);
      }
    };

    const opts: AddEventListenerOptions = { capture: true, passive: false };
    window.addEventListener('keydown', handler, opts);
    window.addEventListener('keyup', handler, opts);
    window.addEventListener('keypress', handler, opts);

    return () => {
      window.removeEventListener('keydown', handler, true);
      window.removeEventListener('keyup', handler, true);
      window.removeEventListener('keypress', handler, true);
    };
  }, [enabled, allowedKeys, onBlocked, phase]);

  // ── Scroll → start game ──────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'waiting') return;

    const handleScroll = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;
      setPhase('started');
      onGameStart?.();
    };

    window.addEventListener('scroll', handleScroll, { once: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [phase, onGameStart]);

  // ── Fullscreen change listener ───────────────────────────────────
  useEffect(() => {
    const handleFullscreenChange = () => {
      onFullscreenChange?.(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, [onFullscreenChange]);

  // ── Invisible full-screen click trap ────────────────────────────
  if (phase !== 'prompt') return null;

  return (
    <div
      onClick={enterFullscreen}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        cursor: 'default',
      }}
    />
  );
}