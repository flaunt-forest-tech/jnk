export interface CabinetStyleType {
  name: string;
  displayName: string;
  code: string;
  fileName: string;
  bestSelling?: boolean;
  order: number;
}

export type ProductCategory =
  | 'Base Cabinet'
  | 'Wall Cabinet'
  | 'Corner Cabinet'
  | 'Pantry Cabinet'
  | 'Vanity'
  | 'Accessories'
  | 'Other';

export interface ProductVariant {
  code: string;
  dimensions: string;
  weight: number;
}

export interface Product {
  name: string;
  description: string;
  features: string[];
  image: string;
  variants: ProductVariant[];
  availableStyles: string[];
}

export interface ProductType {
  name: string;
  description: string;
  products: Product[];
}

export interface StyleProductOption {
  code: string; // e.g., B09, B12
  size: string; // e.g., 9"W | 34-1/2"H | 24"D
  price: number; // cents
  discountedPrice?: number; // cents
}

export interface StyleProduct {
  id: string; // stable id
  category: ProductCategory;
  title: string; // short description e.g., Bayview white shaker B21
  bullets: string[]; // features list
  options: StyleProductOption[];
}

export interface CabinetStyleWithProducts extends CabinetStyleType {
  products: StyleProduct[];
}
