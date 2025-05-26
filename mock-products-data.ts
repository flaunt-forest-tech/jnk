interface ProductVariant {
  code: string;
  dimensions: string; // e.g., "9W x 34-1/2H x 24D"
  weight: number;   // in pounds
  features?: string[]; // Features of the variant
}

interface Product {
  name: string;
  description: string;
  variants: ProductVariant[];
  availableStyles: string[];
}

interface ProductType {
  name: string;
  description: string;
  products: Product[];
}

export const productTypes: ProductType[] = [
  {
    name: "Base Cabinets",
    description: "Floor-standing cabinets that provide the foundation for your kitchen",
    products: [
      {
        name: "Standard Base",
        description: "Traditional base cabinet with single door",
        variants: [
          {
            code: "B09",
            dimensions: "9W x 34-1/2H x 24D",
            weight: 42,
            features: ["1 Small Drawer", "2 Large Drawers"]
          },
          {
            code: "B12",
            dimensions: "12W x 34-1/2H x 24D",
            weight: 45,
            features: ["1 Small Drawer", "2 Large Drawers"]
          },
          {
            code: "B15",
            dimensions: "15W x 34-1/2H x 24D",
            weight: 50,
            features: ["1 Small Drawer", "2 Large Drawers"]
          },
          {
            code: "B18",
            dimensions: "18W x 34-1/2H x 24D",
            weight: 53,
            features: ["1 Bi-folding Door: 7-1/2'W, 10-1/2'W x 29-1/4'H", "2 Wooden Kidney-Shaped Susans"]
          },
          {
            code: "B21",
            dimensions: "21W x 34-1/2H x 24D",
            weight: 57,
          },
          {
            code: "B24",
            dimensions: "24W x 34-1/2H x 24D",
            weight: 63,
          },
          {
            code: "B27",
            dimensions: "27W x 34-1/2H x 24D",
            weight: 68,
          },
          {
            code: "B30",
            dimensions: "30W x 34-1/2H x 24D",
            weight: 81,
          },
          {
            code: "B33",
            dimensions: "33W x 34-1/2H x 24D",
            weight: 85,
          },
          {
            code: "B36",
            dimensions: "36W x 34-1/2H x 24D",
            weight: 89,
          },
          {
            code: "B42",
            dimensions: "42W x 34-1/2H x 24D",
            weight: 94,
          }
        ],
        availableStyles: ["Pebble", "Navel", "ButterScotch", "Charcoal"]
      },
      {
        name: "Drawer Base",
        description: "Base cabinet with multiple drawers for better organization",
        variants: [
          {
            code: "DB12",
            dimensions: "12W x 34-1/2H x 24D",
            weight: 55
          },
          {
            code: "DB15",
            dimensions: "15W x 34-1/2H x 24D",
            weight: 62
          }
        ],
        availableStyles: ["Pebble", "Navel", "ButterScotch"]
      }
    ]
  },
  {
    name: "Wall Cabinets",
    description: "Upper cabinets mounted on walls",
    products: [
      {
        name: "Standard Wall",
        description: "Traditional wall cabinet with single door",
        variants: [
          {
            code: "W12",
            dimensions: "12W x 30H x 12D",
            weight: 35
          },
          {
            code: "W15",
            dimensions: "15W x 30H x 12D",
            weight: 42
          }
        ],
        availableStyles: ["Pebble", "Navel", "ButterScotch", "Charcoal"]
      }
    ]
  },
  {
    name: "Tall Cabinets",
    description: "Full-height cabinets for pantry and storage",
    products: [
      {
        name: "Pantry Cabinet",
        description: "Tall cabinet with adjustable shelves",
        variants: [
          {
            code: "T18",
            dimensions: "18W x 84H x 24D",
            weight: 120
          },
          {
            code: "T24",
            dimensions: "24W x 84H x 24D",
            weight: 145
          }
        ],
        availableStyles: ["Pebble", "Navel", "ButterScotch"]
      }
    ]
  },
  {
    name: "Vanity Cabinets",
    description: "Bathroom vanity cabinets",
    products: [
      {
        name: "Single Sink Vanity",
        description: "Vanity cabinet with single sink cutout",
        variants: [
          {
            code: "V24",
            dimensions: "24W x 32H x 21D",
            weight: 85
          },
          {
            code: "V30",
            dimensions: "30W x 32H x 21D",
            weight: 95
          }
        ],
        availableStyles: ["Pebble", "Navel", "ButterScotch"]
      }
    ]
  },
  {
    name: "Panels, Fillers, Trims",
    description: "Decorative and functional cabinet accessories",
    products: [
      {
        name: "End Panel",
        description: "Decorative panel for cabinet ends",
        variants: [
          {
            code: "EP34",
            dimensions: "3W x 34-1/2H x 24D",
            weight: 15
          }
        ],
        availableStyles: ["Pebble", "Navel", "ButterScotch", "Charcoal"]
      }
    ]
  },
  {
    name: "Decorative Doors",
    description: "Replacement and decorative cabinet doors",
    products: [
      {
        name: "Shaker Door",
        description: "Classic shaker style cabinet door",
        variants: [
          {
            code: "SD12",
            dimensions: "12W x 30H x 0.75D",
            weight: 8
          },
          {
            code: "SD15",
            dimensions: "15W x 30H x 0.75D",
            weight: 10
          }
        ],
        availableStyles: ["Pebble", "Navel", "ButterScotch", "Charcoal"]
      }
    ]
  },
  {
    name: "Accessories",
    description: "Cabinet hardware and accessories",
    products: [
      {
        name: "Soft Close Hinge",
        description: "Soft closing cabinet hinge",
        variants: [
          {
            code: "SCH",
            dimensions: "0W x 0H x 0D",
            weight: 0.2
          }
        ],
        availableStyles: ["Chrome", "Brushed Nickel", "Oil Rubbed Bronze"]
      }
    ]
  }
]; 