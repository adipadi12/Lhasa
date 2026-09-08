import type { Dish } from "../types/menu";

export const menu: Dish[] = [];

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: ("spicy" | "veg" | "popular")[];
}

export interface MenuCategory {
  name: string;
  subtitle: string;
  items: MenuItem[];
}

export const fullMenu: MenuCategory[] = [
  {
    name: "Momos",
    subtitle: "Hand-folded dumplings, served with sesame achar",
    items: [
      {
        name: "Steamed Chicken Momo",
        description: "Free-range chicken, ginger, cilantro, and Sichuan pepper",
        price: "₹320",
        tags: ["popular"],
      },
      {
        name: "Jhol Momo",
        description: "Steamed momos bathed in a tangy sesame-tomato soup",
        price: "₹350",
        tags: ["popular", "spicy"],
      },
      {
        name: "Chilli Cheese Momo",
        description: "Crispy-fried, stuffed with molten cheese and green chillies",
        price: "₹340",
        tags: ["spicy"],
      },
      {
        name: "Vegetable Momo",
        description: "Cabbage, carrot, tofu, and fresh herbs",
        price: "₹280",
        tags: ["veg"],
      },
      {
        name: "Kothey Momo",
        description: "Pan-fried on one side, steamed on the other — best of both worlds",
        price: "₹340",
      },
      {
        name: "Tandoori Momo",
        description: "Chargrilled in the tandoor with spiced yoghurt marinade",
        price: "₹360",
        tags: ["popular", "spicy"],
      },
    ],
  },
  {
    name: "Thukpa & Soups",
    subtitle: "Slow-cooked broths from the high plateau",
    items: [
      {
        name: "Beef Thenthuk",
        description: "Hand-pulled noodle soup with slow-braised beef, daikon, and bok choy",
        price: "₹380",
        tags: ["popular"],
      },
      {
        name: "Thukpa Gyathuk",
        description: "Classic Tibetan noodle soup with chicken and mountain herbs",
        price: "₹340",
      },
      {
        name: "Vegetable Thukpa",
        description: "Seasonal greens, mushroom, and handmade wheat noodles",
        price: "₹300",
        tags: ["veg"],
      },
      {
        name: "Bone Broth Bowl",
        description: "12-hour yak-style bone broth, spring onion, chilli oil",
        price: "₹260",
      },
    ],
  },
  {
    name: "Small Plates",
    subtitle: "To share, to start, or to keep ordering",
    items: [
      {
        name: "Crisp Tingmo & Curry",
        description: "Cloud-soft Tibetan bread with black cardamom potato curry",
        price: "₹280",
        tags: ["veg", "popular"],
      },
      {
        name: "Sichuan Chilli Tofu",
        description: "Silken tofu, mountain pepper, scallion oil, smoked chilli crisp",
        price: "₹300",
        tags: ["veg", "spicy"],
      },
      {
        name: "Shabalay",
        description: "Tibetan meat pie, pan-fried until golden, with tomato relish",
        price: "₹320",
      },
      {
        name: "Lamb Seekh Kebab",
        description: "Charcoal-grilled lamb with cumin, coriander, and mint chutney",
        price: "₹380",
        tags: ["popular"],
      },
      {
        name: "Crunchy Chilli Chicken",
        description: "Wok-tossed with dried red chillies, garlic, and Himalayan honey",
        price: "₹340",
        tags: ["spicy"],
      },
      {
        name: "Paneer Tikka",
        description: "Tandoor-charred cottage cheese with bell pepper and onion",
        price: "₹300",
        tags: ["veg"],
      },
    ],
  },
  {
    name: "Rice & Noodles",
    subtitle: "The soul of every Himalayan meal",
    items: [
      {
        name: "Dresi",
        description: "Tibetan celebration rice with butter, raisins, and brown sugar",
        price: "₹260",
        tags: ["veg"],
      },
      {
        name: "Chow Mein Lhasa Style",
        description: "Stir-fried egg noodles with seasonal vegetables and soy glaze",
        price: "₹280",
      },
      {
        name: "Spicy Lamb Fried Rice",
        description: "Wok-fired basmati with tender lamb, egg, and green chillies",
        price: "₹360",
        tags: ["spicy"],
      },
      {
        name: "Butter Garlic Noodles",
        description: "Thick wheat noodles tossed in browned butter and crispy garlic",
        price: "₹260",
        tags: ["veg"],
      },
    ],
  },
  {
    name: "Desserts",
    subtitle: "Something sweet from the mountains",
    items: [
      {
        name: "Khapse",
        description: "Traditional Tibetan fried cookies dusted with powdered sugar",
        price: "₹180",
        tags: ["veg"],
      },
      {
        name: "Gulab Jamun",
        description: "Golden milk dumplings in cardamom-rose syrup",
        price: "₹200",
        tags: ["veg", "popular"],
      },
      {
        name: "Saffron Phirni",
        description: "Chilled rice pudding with saffron, pistachio, and almond",
        price: "₹220",
        tags: ["veg"],
      },
    ],
  },
  {
    name: "Drinks",
    subtitle: "From the mountains to the glass",
    items: [
      {
        name: "Po Cha (Butter Tea)",
        description: "Traditional Tibetan salted butter tea — earthy and warming",
        price: "₹140",
        tags: ["veg"],
      },
      {
        name: "Masala Chai",
        description: "Strong Assam tea steeped with cardamom, ginger, and clove",
        price: "₹120",
        tags: ["veg", "popular"],
      },
      {
        name: "Himalayan Mule",
        description: "Vodka, ginger beer, lime, and Timur pepper",
        price: "₹420",
      },
      {
        name: "Saffron Lassi",
        description: "Thick yoghurt drink with saffron, cardamom, and rosewater",
        price: "₹180",
        tags: ["veg"],
      },
      {
        name: "Chang",
        description: "Tibetan millet beer — mildly sweet, naturally fermented",
        price: "₹260",
      },
    ],
  },
];
