export type DishCategory = // think enum in C#
  | "Momos"
  | "Soup"
  | "Rice"
  | "Noodles"
  | "Dessert"
  | "Drink";

export interface Dish { 
  id: string;
  name: string;
  description: string;
  category: DishCategory;
  image: string;
  featured: boolean;
}