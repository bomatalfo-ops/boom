import { useEffect, useState } from 'react';

interface StopMouseProps {
  enabled?: boolean;
  containerId?: string;
  toggleKey?: string;           // e.g. "m" or "Escape"
  onMouseRestored?: () => void;
}

export default function StopMouse({
  enabled = true,
  containerId,
  toggleKey = 'mp',              // Default key to restore mouse
  onMouseRestored,
}: StopMouseProps) {
  const [isMouseBlocked, setIsMouseBlocked] = useState(enabled);

  useEffect(() => {
    if (!enabled) return;

    const container = containerId
      ? (document.getElementById(containerId) as HTMLElement) || document.body
      : document.body;

    const prevCursor = container.style.cursor;

    // Hide cursor
    const hideCursor = () => {
      container.style.cursor = 'none';
    };

    hideCursor();

    const blockMouse = (e: Event) => {
      if (!isMouseBlocked) return;

      e.preventDefault();
      (e as any).stopImmediatePropagation?.();
      return false;
    };

    const events = [
      'click',
      'mousedown',
      'mouseup',
      'contextmenu',
      'dblclick',
      'mousemove',
      'pointermove',
      'mouseenter',
      'mouseleave',
    ];

    // Add mouse blockers
    events.forEach((event) => {
      container.addEventListener(event, blockMouse, { capture: true, passive: false });
    });

    // Keyboard listener to toggle mouse
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === toggleKey.toLowerCase()) {
        setIsMouseBlocked((prev) => !prev);

        if (!isMouseBlocked) {
          // Mouse is now enabled
          container.style.cursor = prevCursor || 'default';
          onMouseRestored?.();
        } else {
          // Mouse blocked again
          hideCursor();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      // Cleanup
      container.style.cursor = prevCursor || '';
      events.forEach((event) => {
        container.removeEventListener(event, blockMouse, true);
      });
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, containerId, toggleKey, onMouseRestored, isMouseBlocked]);

  return null;
}