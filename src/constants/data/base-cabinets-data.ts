import { ProductType } from './products-data';

export const baseCabinets: ProductType[] = [
  {
    name: 'Base Cabinets',
    description: 'Floor-standing cabinets that provide the foundation for your kitchen',
    products: [
      {
        name: 'Base Cabinet',
        description: '1 drawer and 1 door',
        features: ['1 Drawer', '1 Door', '1 Adjustable Shelf'],
        image: 'BaseCabinets/1-1.jpg',
        variants: [
          {
            code: 'B12',
            dimensions: '12W x 34-1/2H x 24D',
            weight: 45,
          },
          {
            code: 'B18',
            dimensions: '18W x 34-1/2H x 24D',
            weight: 53,
          },
          {
            code: 'B24',
            dimensions: '24W x 34-1/2H x 24D',
            weight: 63,
          },
        ],
        availableStyles: ['WhiteShaker', 'Dove', 'Charcoal', 'Sage', 'Pebble', 'Pure'],
      },
      {
        name: 'Base Cabinet',
        description: '2 drawers and 2 doors',
        features: ['2 Drawer', '2 Door', '1 Adjustable Shelf'],
        image: 'BaseCabinets/1-3.jpg',
        variants: [
          {
            code: 'B30',
            dimensions: '30W x 34-1/2H x 24D',
            weight: 81,
          },
          {
            code: 'B36',
            dimensions: '36W x 34-1/2H x 24D',
            weight: 89,
          },
        ],
        availableStyles: ['WhiteShaker', 'Dove', 'Charcoal', 'Sage', 'Pebble', 'Pure'],
      },
      {
        name: 'Base Cabinet',
        description: '3 drawers',
        features: ['1 Small Drawer', '2 Large Drawers'],
        image: 'BaseCabinets/1-4.jpg',
        variants: [
          {
            code: 'DB18-3',
            dimensions: '18W x 34-1/2H x 24D',
            weight: 81,
          },
          {
            code: 'DB24-3',
            dimensions: '24W x 34-1/2H x 24D',
            weight: 93,
          },
          {
            code: 'DB30-3',
            dimensions: '30W x 34-1/2H x 24D',
            weight: 103,
          },
        ],
        availableStyles: ['WhiteShaker', 'Dove', 'Charcoal', 'Sage', 'Pebble', 'Pure'],
      },
    ],
  },
];

// TODO: Add more variants and styles in the future
// Removed for future implementation:
// - 1 drawer 2 doors variant (B27, B30)
// - 3 drawers variants (DB12-3, DB15-3, DB21-3, DB33-3, DB36-3, DB42-3)
// - Additional styles: Naval, ButterScotch, JavaCoffee, CastleGrey, Greige,
//   Espresso, MochaGlazed, Hazel, PearlGlazed, CremeGlazed, Mahogany
