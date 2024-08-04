import { TCategory } from "./category.type";

export type TProductCard = {
  id: number;
  title: string;
  price: number;
  category: TCategory;
  image: string;
  offer?: boolean;
};
