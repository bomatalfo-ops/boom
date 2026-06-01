import { useState } from "react";
import chimichurri from "@/assets/chimichurri-sauce.jpg";
import { Link } from "react-router-dom";
import {
  ChefHat, Clock, Users, Star, Heart, Share2, Printer, Bookmark,
  ChevronRight, CheckCircle2, Circle, Flame, TrendingUp, Instagram,
  Youtube, Facebook, Mail, Search, TriangleAlert, ThumbsUp,
  MessageCircle, Play, ArrowUp, Utensils, Leaf, Award, Zap,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────── */
const recipe = {
  title: "Chimichurri Steak",
  subtitle: "The Argentine classic — grilled to perfection, doused in the world's greatest herb sauce.",
  category: "Grilling",
  date: "April 18, 2026",
  readTime: "8 min read",
  prepTime: "15 min",
  cookTime: "12 min",
  restTime: "10 min",
  servings: 4,
  difficulty: "Medium",
  calories: 520,
  rating: 4.9,
  reviews: 318,
  saves: 2141,
  author: { name: "Elena Marquez", role: "Executive Chef & Food Editor", avatar: "EM" },
  heroImage: chimichurri,
  tags: ["Beef", "Grilling", "Argentine", "Gluten-Free", "High-Protein", "Weeknight"],
  description: `Chimichurri is Argentina's gift to the grilling world — a punchy, herby, garlicky oil sauce that transforms any cut of beef into something extraordinary. This recipe pairs a beautifully seared skirt steak with a vibrant, homemade chimichurri packed with flat-leaf parsley, fresh oregano, garlic, red wine vinegar, and a kiss of heat from crushed red pepper. The result is bold, bright, and completely addictive.

Whether you're cooking on a backyard grill or a cast-iron skillet, this method delivers a perfectly caramelized crust and a juicy interior every single time.`,
  tips: [
    "Bring steak to room temp 30 min before cooking for even doneness.",
    "Pat the steak bone-dry before seasoning — moisture is the enemy of a good sear.",
    "Make chimichurri 24h ahead; flavors deepen beautifully overnight.",
    "Rest the steak on a wire rack so steam doesn't soften that crust.",
    "Always cut skirt steak against the grain — the fibers run visibly across.",
  ],
  ingredients: {
    steak: [
      { qty: "700", unit: "g", name: "skirt steak (or flank steak)", note: "about 1½ lbs" },
      { qty: "1½", unit: "tsp", name: "coarse kosher salt" },
      { qty: "1", unit: "tsp", name: "freshly cracked black pepper" },
      { qty: "½", unit: "tsp", name: "smoked paprika" },
      { qty: "2", unit: "tbsp", name: "neutral oil", note: "avocado or canola" },
    ],
    chimichurri: [
      { qty: "1", unit: "cup", name: "flat-leaf parsley leaves, tightly packed" },
      { qty: "¼", unit: "cup", name: "fresh oregano leaves" },
      { qty: "5", unit: "", name: "garlic cloves, roughly chopped" },
      { qty: "½", unit: "tsp", name: "crushed red pepper flakes" },
      { qty: "3", unit: "tbsp", name: "red wine vinegar" },
      { qty: "½", unit: "cup", name: "extra-virgin olive oil" },
      { qty: "¾", unit: "tsp", name: "fine sea salt" },
      { qty: "¼", unit: "tsp", name: "black pepper" },
    ],
    toServe: [
      { qty: "", unit: "", name: "Flaky sea salt (like Maldon)" },
      { qty: "", unit: "", name: "Grilled crusty bread or chimichurri rice" },
      { qty: "", unit: "", name: "Sliced avocado or chimichurri potatoes" },
    ],
  },
  steps: [
    {
      number: "01",
      title: "Make the Chimichurri",
      time: "5 min",
      body: "Finely chop the parsley and oregano by hand (or pulse 4–5 times in a food processor — don't over-blend). Combine with garlic, red pepper flakes, red wine vinegar, olive oil, salt, and black pepper in a bowl. Stir well. Taste and adjust acidity or salt. Set aside; let it mellow for at least 10 minutes. Best made a day ahead.",
      tip: "For a smoother sauce, blend half and keep half chunky.",
    },
    {
      number: "02",
      title: "Season the Steak",
      time: "2 min + 30 min rest",
      body: "Pat the steak completely dry with paper towels on both sides. Season generously with kosher salt, cracked pepper, and smoked paprika. Press the seasoning in with your hands. Let the steak sit at room temperature for 30 minutes — this ensures even cooking from edge to center.",
      tip: "For deeper flavor, season overnight and refrigerate uncovered.",
    },
    {
      number: "03",
      title: "Get the Grill Ripping Hot",
      time: "10 min",
      body: "Heat a cast-iron grill pan or outdoor grill to screaming high heat. You want it to smoke slightly — this is what gives the steak that incredible caramelized crust. Brush the grill grates or pan with oil just before the steak goes on.",
      tip: "Test heat by holding your palm 1 inch above — you should only manage 1 second.",
    },
    {
      number: "04",
      title: "Sear to Perfection",
      time: "8–12 min",
      body: "Place steak on the hot grill. For medium-rare: sear 3–4 minutes per side without moving. For medium: add 1 minute per side. Use tongs — never pierce the meat with a fork. Look for dark, mahogany grill marks and a golden-brown crust on the edges. Internal temp: 130°F (54°C) for medium-rare.",
      tip: "Skirt steak is thin — it cooks fast. Don't walk away!",
    },
    {
      number: "05",
      title: "Rest, Then Slice",
      time: "10 min",
      body: "Transfer steak to a wire rack set over a plate. Tent loosely with foil and rest for 10 minutes — non-negotiable. The juices redistribute, giving you maximum juiciness. After resting, identify the grain direction (the lines of muscle fibers running across the meat) and slice perpendicular to them at a 45° angle into ½-inch strips.",
      tip: "Cutting against the grain shortens the fibers, making every bite tender.",
    },
    {
      number: "06",
      title: "Sauce and Serve",
      time: "2 min",
      body: "Arrange the sliced steak on a warm platter or wooden board. Spoon a generous amount of chimichurri directly over the meat. Finish with a pinch of flaky sea salt. Pass extra chimichurri at the table — people will want more. Serve immediately with grilled bread, chimichurri rice, or roasted potatoes.",
      tip: "Leftovers? Chimichurri steak makes the best next-day tacos.",
    },
  ],
  nutrition: [
    { label: "Calories", value: "520", unit: "kcal" },
    { label: "Protein", value: "41", unit: "g" },
    { label: "Fat", value: "38", unit: "g" },
    { label: "Saturated Fat", value: "9", unit: "g" },
    { label: "Carbs", value: "3", unit: "g" },
    { label: "Fiber", value: "0.5", unit: "g" },
    { label: "Sodium", value: "640", unit: "mg" },
    { label: "Iron", value: "4.2", unit: "mg" },
  ],
  faqs: [
    { q: "Can I use a different cut?", a: "Absolutely. Flank steak, hanger steak, or ribeye all work wonderfully. Adjust cook time for thicker cuts — ribeye will need 4–5 minutes per side." },
    { q: "How long does chimichurri keep?", a: "Refrigerated in an airtight jar, chimichurri stays fresh for up to 1 week. The oil will solidify — just let it come to room temp before serving." },
    { q: "Can I make this without a grill?", a: "Yes! A cast-iron skillet over high heat on the stovetop gives an incredible sear. Add a knob of butter and garlic to baste the steak during the last minute." },
    { q: "Is chimichurri spicy?", a: "It has gentle heat from red pepper flakes — very approachable. Reduce the flakes to ¼ tsp for mild, or increase to 1 tsp for a proper kick." },
  ],
  related: [
    { title: "Marry Me Chicken", category: "Chicken", time: "10 min", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80" },
    { title: "Sweet Potato Beef Bowls", category: "Bowls", time: "9 min", img: "https://images.unsplash.com/photo-1512058556646-c4da40fba323?w=400&q=80" },
    { title: "Lasagna Soup", category: "Soups", time: "12 min", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
  ],
};

/* ─── Sub-components ────────────────────────────────── */
const IngredientRow = ({ qty, unit, name, note, checked, onToggle }) => (
  <li
    onClick={onToggle}
    className={`flex items-start gap-3 py-2.5 border-b border-border/50 cursor-pointer group transition-all duration-200 select-none ${checked ? "opacity-50" : ""}`}
  >
    <span className="mt-0.5 flex-shrink-0 text-primary">
      {checked ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5 text-border group-hover:text-primary transition-colors" />}
    </span>
    <span className={`text-sm ${checked ? "line-through text-muted-foreground" : "text-foreground"}`}>
      {qty && <strong className="font-semibold">{qty} {unit} </strong>}{name}
      {note && <em className="text-muted-foreground text-xs ml-1">({note})</em>}
    </span>
  </li>
);

const StatBadge = ({ icon: Icon, label, value, color = "text-primary" }) => (
  <div className="flex flex-col items-center gap-1 p-4 rounded-xl bg-card border border-border">
    <Icon className={`w-5 h-5 ${color}`} />
    <span className="text-lg font-bold text-foreground">{value}</span>
    <span className="text-xs text-muted-foreground text-center">{label}</span>
  </div>
);

/* ─── Main Component ─────────────────────────────────── */
export default function About() {
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [servings, setServings] = useState(recipe.servings);
  const [activeStep, setActiveStep] = useState(null);
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const scale = servings / recipe.servings;

  const toggleIngredient = (key) =>
    setCheckedIngredients((p) => ({ ...p, [key]: !p[key] }));

  const scaleQty = (qty) => {
    if (!qty || isNaN(parseFloat(qty))) return qty;
    const num = parseFloat(qty);
    const scaled = num * scale;
    return scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(1).replace(/\.0$/, "");
  };

  const allChecked = Object.keys(checkedIngredients).filter(k => checkedIngredients[k]);
  const totalIngredients = [
    ...recipe.ingredients.steak,
    ...recipe.ingredients.chimichurri,
    ...recipe.ingredients.toServe,
  ].length;

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ── Sticky Nav ── */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <Link to="/" className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
              <ChefHat className="w-6 h-6 text-primary" /> RecipeSearch
            </Link>
            <div className="hidden md:flex items-center gap-1 text-sm">
              {["Home", "Categories", "Popular", "About"].map(l => (
                <Link key={l} to={`/${l.toLowerCase()}`} className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">{l}</Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"><Search className="w-5 h-5" /></button>
              <button className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">Subscribe</button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Breadcrumb ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/categories" className="hover:text-primary transition-colors">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">Chimichurri Steak</span>
        </nav>
      </div>

      {/* ── Hero Header ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-0">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Text */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <span className="bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">{recipe.category}</span>
              <span className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-500" />{recipe.rating}
                <span className="text-muted-foreground font-normal">({recipe.reviews} reviews)</span>
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-[1.1]">
              {recipe.title}
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">{recipe.subtitle}</p>

            {/* Author row */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-10 h-10 rounded-full bg-primary/15 text-primary font-bold text-sm flex items-center justify-center">
                {recipe.author.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{recipe.author.name}</p>
                <p className="text-xs text-muted-foreground">{recipe.author.role}</p>
              </div>
              <span className="ml-2 text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{recipe.date}</span>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              <StatBadge icon={Clock} label="Prep" value={recipe.prepTime} />
              <StatBadge icon={Flame} label="Cook" value={recipe.cookTime} color="text-orange-500" />
              <StatBadge icon={Users} label="Serves" value={recipe.servings} />
              <StatBadge icon={Zap} label="Calories" value={recipe.calories} color="text-yellow-500" />
            </div>

            {/* Action row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => setSaved(s => !s)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${saved ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:bg-muted"}`}
              >
                <Bookmark className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
                {saved ? "Saved" : "Save Recipe"}
              </button>
              <button
                onClick={() => setLiked(l => !l)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${liked ? "bg-rose-50 text-rose-600 border-rose-200" : "border-border text-foreground hover:bg-muted"}`}
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-rose-500 stroke-rose-500" : ""}`} />
                {recipe.saves + (liked ? 1 : 0)}
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-border text-foreground hover:bg-muted transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-border text-foreground hover:bg-muted transition-colors">
                <Printer className="w-4 h-4" /> Print
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map(tag => (
                <span key={tag} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={recipe.heroImage}
                alt="Chimichurri Steak"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Video play overlay */}
              <button className="absolute inset-0 flex items-end justify-start p-6 group">
                <span className="flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white text-sm font-medium px-4 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <Play className="w-4 h-4 fill-white" /> Watch Video
                </span>
              </button>
            </div>
            {/* Difficulty badge */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-yellow-400" /> {recipe.difficulty}
            </div>
          </div>
        </div>
      </section>

      {/* ── Progress Bar for Ingredients ── */}
      {allChecked.length > 0 && (
        <div className="sticky top-16 z-40 bg-primary/5 border-b border-primary/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-4">
            <span className="text-xs font-medium text-primary">Cooking mode:</span>
            <div className="flex-1 bg-primary/20 rounded-full h-1.5">
              <div
                className="bg-primary h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${(allChecked.length / totalIngredients) * 100}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{allChecked.length}/{totalIngredients} ingredients</span>
          </div>
        </div>
      )}

      {/* ── Description ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="max-w-3xl">
          {recipe.description.split("\n\n").map((para, i) => (
            <p key={i} className="text-foreground leading-relaxed text-base mb-4">{para}</p>
          ))}
        </div>
      </section>

      {/* ── Pro Tips Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5 text-amber-600" />
            <h3 className="font-heading text-base font-bold text-amber-800">Chef's Pro Tips</h3>
          </div>
          <ul className="space-y-2">
            {recipe.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-amber-900">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Main Content: Ingredients + Steps ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* ─ Ingredients Sidebar ─ */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-heading text-xl font-bold text-foreground">Ingredients</h2>
                  {/* Servings adjuster */}
                  <div className="flex items-center gap-2 bg-muted rounded-full px-1 py-1">
                    <button
                      onClick={() => setServings(s => Math.max(1, s - 1))}
                      className="w-7 h-7 rounded-full bg-background border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-lg leading-none"
                    >−</button>
                    <span className="text-sm font-semibold text-foreground w-8 text-center">{servings}</span>
                    <button
                      onClick={() => setServings(s => s + 1)}
                      className="w-7 h-7 rounded-full bg-background border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-lg leading-none"
                    >+</button>
                  </div>
                </div>

                {/* Steak */}
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">For the Steak</p>
                <ul className="mb-5">
                  {recipe.ingredients.steak.map((ing, i) => {
                    const key = `steak-${i}`;
                    return <IngredientRow key={key} {...ing} qty={scaleQty(ing.qty)} checked={!!checkedIngredients[key]} onToggle={() => toggleIngredient(key)} />;
                  })}
                </ul>

                {/* Chimichurri */}
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">For the Chimichurri</p>
                <ul className="mb-5">
                  {recipe.ingredients.chimichurri.map((ing, i) => {
                    const key = `chimi-${i}`;
                    return <IngredientRow key={key} {...ing} qty={scaleQty(ing.qty)} checked={!!checkedIngredients[key]} onToggle={() => toggleIngredient(key)} />;
                  })}
                </ul>

                {/* To Serve */}
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">To Serve</p>
                <ul>
                  {recipe.ingredients.toServe.map((ing, i) => {
                    const key = `serve-${i}`;
                    return <IngredientRow key={key} {...ing} checked={!!checkedIngredients[key]} onToggle={() => toggleIngredient(key)} />;
                  })}
                </ul>
              </div>

              {/* Nutrition Card */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading text-base font-bold text-foreground mb-4">Nutrition per serving</h3>
                <div className="grid grid-cols-2 gap-2">
                  {recipe.nutrition.map(n => (
                    <div key={n.label} className="flex justify-between items-center py-1.5 border-b border-border/40">
                      <span className="text-xs text-muted-foreground">{n.label}</span>
                      <span className="text-xs font-semibold text-foreground">{n.value}<span className="text-muted-foreground font-normal"> {n.unit}</span></span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">* Based on {servings} {servings === 1 ? "serving" : "servings"}. Values are estimates.</p>
              </div>
            </div>
          </aside>

          {/* ─ Steps ─ */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-heading text-2xl font-bold text-foreground">Instructions</h2>

            {recipe.steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                className={`group relative rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${activeStep === i ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card hover:border-primary/40 hover:shadow-sm"}`}
              >
                <div className="flex items-start gap-5 p-6">
                  {/* Step number */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-heading text-lg font-bold transition-colors ${activeStep === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"}`}>
                    {step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                      <span className="flex-shrink-0 flex items-center gap-1 text-xs text-muted-foreground bg-muted rounded-full px-2.5 py-1">
                        <Clock className="w-3 h-3" /> {step.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{step.body}</p>

                    {activeStep === i && (
                      <div className="mt-4 space-y-3">
                        <p className="text-sm text-foreground leading-relaxed">{step.body}</p>
                        <div className="flex items-start gap-2 bg-primary/10 rounded-xl p-3">
                          <TriangleAlert className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-primary font-medium">{step.tip}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl space-y-3">
            {recipe.faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left bg-background hover:bg-muted transition-colors"
                >
                  <span className="font-semibold text-sm text-foreground">{faq.q}</span>
                  <span className={`ml-4 flex-shrink-0 text-primary font-bold text-lg transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 bg-background">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rating ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <h2 className="font-heading text-2xl font-bold text-foreground">Did you make this recipe?</h2>
          <p className="text-muted-foreground text-sm">Rate it and let us know how it turned out!</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map(star => (
              <button key={star} className="group p-1 transition-transform hover:scale-125">
                <Star className="w-9 h-9 fill-amber-100 stroke-amber-300 group-hover:fill-amber-400 group-hover:stroke-amber-400 transition-colors" />
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              <ThumbsUp className="w-4 h-4" /> Rate This Recipe
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-full text-sm font-medium hover:bg-muted transition-colors">
              <MessageCircle className="w-4 h-4" /> Leave a Comment
            </button>
          </div>
          <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-amber-400 stroke-amber-400" /><strong className="text-foreground">{recipe.rating}</strong> out of 5</span>
            <span>·</span>
            <span>{recipe.reviews} ratings</span>
            <span>·</span>
            <span>{recipe.saves.toLocaleString()} saves</span>
          </div>
        </div>
      </section>

      {/* ── Related Recipes ── */}
      <section className="bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">You'll Also Love</h2>
            <a href="#" className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recipe.related.map((r) => (
              <div key={r.title} className="group bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{r.category}</span>
                  <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">{r.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" /> {r.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center space-y-6">
          <Mail className="w-10 h-10 mx-auto opacity-80" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">Get Recipes Delivered Weekly</h2>
          <p className="text-primary-foreground/80 max-w-md mx-auto">Join 50,000+ food lovers. New recipes, tips, and kitchen inspiration every Friday.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:border-primary-foreground/50"
            />
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-foreground text-primary-foreground/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <span className="font-heading text-xl font-bold text-primary-foreground flex items-center gap-2 mb-4"><ChefHat className="w-5 h-5" /> RecipeSearch</span>
              <p className="text-sm leading-relaxed">Your daily source for the most searched recipes on the internet.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Explore</h4>
              <div className="flex flex-col gap-2 text-sm">
                {["Home", "Categories", "Popular"].map(l => (
                  <Link key={l} to={`/${l.toLowerCase()}`} className="hover:text-primary-foreground transition-colors">{l}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Company</h4>
              <div className="flex flex-col gap-2 text-sm">
                {["About", "Contact", "Privacy"].map(l => (
                  <a key={l} href="#" className="hover:text-primary-foreground transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Follow Us</h4>
              <div className="flex gap-3">
                {[Instagram, Youtube, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"><Icon className="w-5 h-5" /></a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
            <p>© 2026 RecipeSearch. Made with ♥ for food lovers.</p>
          </div>
        </div>
      </footer>

      {/* ── Scroll to Top ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity z-50"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}