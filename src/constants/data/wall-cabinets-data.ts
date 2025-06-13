import { ProductType } from './products-data';

export const wallCabinets: ProductType[] = [
  {
    name: 'Wall Cabinets',
    description: 'Floor-standing cabinets that provide the foundation for your kitchen',
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
            code: 'W2712',
            dimensions: '27W x 12H x 12D',
            weight: 19,
          },
          {
            code: 'W3012',
            dimensions: '30W x 12H x 12D',
            weight: 20,
          },
          {
            code: 'W3312',
            dimensions: '33W x 12H x 12D',
            weight: 22,
          },
          {
            code: 'W3612',
            dimensions: '36W x 12H x 12D',
            weight: 23,
          },
          {
            code: 'W3912',
            dimensions: '36W x 12H x 12D',
            weight: 24,
          },
        ],
        availableStyles: [
          'WhiteShaker',
          'Dove',
          'Charcoal',
          'Sage',
          'Pebble',
          'Pure',
          'Naval',
          'ButterScotch',
          'JavaCoffee',
          'CastleGrey',
          'Greige',
          'Espresso',
          'MochaGlazed',
          'Hazel',
          'CremeGlazed',
          'Mahogany',
        ],
      },
    ],
  },
];
