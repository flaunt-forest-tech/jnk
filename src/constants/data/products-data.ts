import { baseCabinets } from './base-cabinets-data';
import { wallCabinets } from './wall-cabinets-data';

interface ProductVariant {
  code: string;
  dimensions: string; // e.g., "9W x 34-1/2H x 24D"
  weight: number; // in pounds
}

interface Product {
  name: string;
  description: string;
  features: string[]; // Optional features for the product
  image: string; // Optional image URL for the product
  variants: ProductVariant[];
  availableStyles: string[];
}

export interface ProductType {
  name: string;
  description: string;
  products: Product[];
}

export const productTypes: ProductType[] = [...baseCabinets, ...wallCabinets];
