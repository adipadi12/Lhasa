export interface GalleryItem {
  title: string;
  caption: string;
  height: number;
  gradient: string;
}

export const gallery: GalleryItem[] = [
  {
    title: "The Copper Dining Room",
    caption: "Brass lanterns and hand-carved wooden panels",
    height: 320,
    gradient: "linear-gradient(150deg, rgba(182, 56, 44, 0.5), rgba(16, 24, 17, 0.4)), #1c1712",
  },
  {
    title: "Hand-folded Momos",
    caption: "Each piece crafted with 12 pleats",
    height: 240,
    gradient: "linear-gradient(135deg, rgba(224, 161, 47, 0.45), rgba(16, 24, 17, 0.38)), #261d0f",
  },
  {
    title: "Butter Tea Ceremony",
    caption: "Po cha served in traditional bowls",
    height: 280,
    gradient: "linear-gradient(145deg, rgba(30, 109, 90, 0.5), rgba(16, 24, 17, 0.35)), #111f1b",
  },
  {
    title: "The Spice Wall",
    caption: "Curated blends from across the Himalayas",
    height: 200,
    gradient: "linear-gradient(130deg, rgba(224, 161, 47, 0.4), rgba(182, 56, 44, 0.35)), #1a1208",
  },
  {
    title: "Prayer Flag Courtyard",
    caption: "Open-air seating under the stars",
    height: 340,
    gradient: "linear-gradient(155deg, rgba(45, 95, 141, 0.45), rgba(30, 109, 90, 0.3)), #121820",
  },
  {
    title: "Late Night Noodle Bowls",
    caption: "Thenthuk pulled fresh to order",
    height: 260,
    gradient: "linear-gradient(140deg, rgba(108, 29, 36, 0.4), rgba(224, 161, 47, 0.3)), #1c1210",
  },
  {
    title: "The Bar",
    caption: "Himalayan-inspired cocktails and local brews",
    height: 220,
    gradient: "linear-gradient(135deg, rgba(45, 95, 141, 0.5), rgba(16, 24, 17, 0.4)), #0f1520",
  },
  {
    title: "Family Style Spreads",
    caption: "Celebratory platters for the table",
    height: 300,
    gradient: "linear-gradient(150deg, rgba(182, 56, 44, 0.45), rgba(224, 161, 47, 0.3)), #1a1208",
  },
  {
    title: "Kitchen Fire",
    caption: "Open flame wok station",
    height: 240,
    gradient: "linear-gradient(145deg, rgba(182, 56, 44, 0.55), rgba(16, 24, 17, 0.3)), #1c0e0e",
  },
];
