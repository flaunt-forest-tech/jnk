export interface CabinetStyleType {
  name: string;
  displayName: string;
  code: string;
  fileName: string;
  bestSelling?: boolean;
  order: number;
}

export const CABINET_STYLES: CabinetStyleType[] = [
  {
    name: 'WhiteShaker',
    displayName: 'White Shaker',
    code: 'S8',
    fileName: 'WHITE SHAKER - S8.webp',
    order: 1,
  },
  {
    name: 'Dove',
    displayName: 'Dove',
    code: 'E1',
    fileName: 'DOVE - E1.webp',
    order: 2,
  },
  {
    name: 'Charcoal',
    displayName: 'Charcoal',
    code: 'E2',
    fileName: 'CHARCOAL - E2.webp',
    order: 3,
  },
  {
    name: 'Sage',
    displayName: 'Sage',
    code: 'E3',
    fileName: 'SAGE - E3.webp',
    order: 4,
  },
  {
    name: 'Pebble',
    displayName: 'Pebble',
    code: 'B6',
    fileName: 'PEBBLE - B6.webp',
    order: 5,
  },
  {
    name: 'Pure',
    displayName: 'Pure',
    code: 'B5',
    fileName: 'PURE - B5.webp',
    order: 6,
  },
];

// TODO: Add more styles in the future
// Removed styles for future implementation:
// - Naval, ButterScotch, JavaCoffee, CastleGrey, Greige, Espresso,
// - MochaGlazed, Hazel, PearlGlazed, CremeGlazed, Mahogany
