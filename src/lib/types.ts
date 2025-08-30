export interface CabinetStyleType {
  name: string;
  displayName: string;
  code: string;
  fileName: string;
  bestSelling?: boolean;
  order: number;
}

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
