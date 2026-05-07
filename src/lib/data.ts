import coffee from "@/assets/menu-coffee.jpg";
import pastry from "@/assets/menu-pastry.jpg";
import meal from "@/assets/menu-meal.jpg";
import snack from "@/assets/menu-snack.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "coffee" | "snacks" | "meals" | "pastry";
  image: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  { id: "c1", name: "Signature Latte", description: "Single-origin Ethiopian beans, velvet steamed milk, hand-poured rosetta.", price: 5.5, category: "coffee", image: coffee, badge: "House Favorite" },
  { id: "c2", name: "Black Gold Espresso", description: "Bold double shot pulled from our slow-roasted reserve blend.", price: 4.0, category: "coffee" },
  { id: "c3", name: "Vanilla Cold Brew", description: "24-hour steeped, Madagascar vanilla, served over crystal ice.", price: 5.0, category: "coffee" },
  { id: "c4", name: "Saffron Cardamom Mocha", description: "House cocoa, Persian saffron, cardamom, foam swirl.", price: 6.5, category: "coffee", badge: "New" },

  { id: "p1", name: "Almond Croissant", description: "Laminated 72 hours, French butter, toasted almond cream.", price: 4.5, category: "pastry", image: pastry, badge: "Best Seller" },
  { id: "p2", name: "Pistachio Tart", description: "Dark chocolate ganache, candied pistachio, gold leaf.", price: 6.0, category: "pastry" },
  { id: "p3", name: "Cinnamon Brioche", description: "Warm spiced swirl, brown butter glaze.", price: 4.0, category: "pastry" },

  { id: "s1", name: "Avocado Toast", description: "Sourdough, smashed avocado, poached egg, microgreens, sea salt.", price: 11.0, category: "snacks", image: snack },
  { id: "s2", name: "Smoked Salmon Bagel", description: "Wood-smoked salmon, dill cream cheese, capers, red onion.", price: 13.5, category: "snacks" },
  { id: "s3", name: "Burrata Crostini", description: "Heirloom tomato, basil oil, balsamic pearls, toasted ciabatta.", price: 12.0, category: "snacks" },

  { id: "m1", name: "Truffle Pappardelle", description: "Hand-cut pasta, black truffle, parmigiano, brown butter.", price: 22.0, category: "meals", image: meal, badge: "Chef's Pick" },
  { id: "m2", name: "Saffron Risotto", description: "Carnaroli rice, saffron, mascarpone, crispy leeks.", price: 19.0, category: "meals" },
  { id: "m3", name: "Wagyu Sliders", description: "Trio of A5 wagyu, brioche, caramelized onion, truffle aioli.", price: 24.0, category: "meals" },
];

export const testimonials = [
  { name: "Amelia Chen", role: "Food Critic, The Daily", quote: "Lumière is a quiet revolution — every cup feels like a love letter to coffee culture.", rating: 5 },
  { name: "Marcus Bellini", role: "Regular since 2021", quote: "The atmosphere, the people, the espresso. There's nowhere else I'd rather start my mornings.", rating: 5 },
  { name: "Sofia Reyes", role: "Designer", quote: "Walking in feels like stepping into a film. Beautiful, warm, intentional. The truffle pasta? Unreal.", rating: 5 },
  { name: "James O'Connor", role: "Travel Writer", quote: "I've sipped coffee in 40 cities. Lumière sits comfortably in the global top five.", rating: 5 },
];
