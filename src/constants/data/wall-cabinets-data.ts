import { ProductType } from './products-data';

export const wallCabinets: ProductType[] = [
  {
    name: 'Wall Cabinets',
    description: 'Wall-mounted cabinets that provide additional storage above countertops',
    products: [
      {
        name: 'Wall Cabinet',
        description: '12"H & 15"H',
        features: ['2 Doors', 'No Shelf'],
        image: 'WallCabinets/2-5.jpg',
        variants: [
          {
            code: 'W2412',
            dimensions: '24W x 12H x 12D',
            weight: 18,
          },
          {
            code: 'W3012',
            dimensions: '30W x 12H x 12D',
            weight: 20,
          },
          {
            code: 'W3612',
            dimensions: '36W x 12H x 12D',
            weight: 23,
          },
        ],
        availableStyles: ['WhiteShaker', 'Dove', 'Charcoal', 'Sage', 'Pebble', 'Pure'],
      },
    ],
  },
];

// TODO: Add more variants and styles in the future
// Removed for future implementation:
// - Additional variants: W2712, W3312, W3912
// - Additional styles: Naval, ButterScotch, JavaCoffee, CastleGrey, Greige,
//   Espresso, MochaGlazed, Hazel, PearlGlazed, CremeGlazed, Mahogany
