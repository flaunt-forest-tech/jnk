import { loadCabinetStyles } from './styles.server';
import { CabinetStyleWithProducts, StyleProduct, StyleProductOption } from './types';

function dollars(amountCents: number): number {
  return Math.max(0, Math.round(amountCents));
}

function optionsBaseCabinet(): StyleProductOption[] {
  return [
    {
      code: 'B09',
      size: '9"W | 34-1/2"H | 24"D',
      price: dollars(18999),
      discountedPrice: dollars(16999),
    },
    {
      code: 'B12',
      size: '12"W | 34-1/2"H | 24"D',
      price: dollars(19999),
      discountedPrice: dollars(17999),
    },
    {
      code: 'B15',
      size: '15"W | 34-1/2"H | 24"D',
      price: dollars(21999),
      discountedPrice: dollars(19999),
    },
    {
      code: 'B18',
      size: '18"W | 34-1/2"H | 24"D',
      price: dollars(23999),
      discountedPrice: dollars(21999),
    },
    {
      code: 'B21',
      size: '21"W | 34-1/2"H | 24"D',
      price: dollars(25999),
      discountedPrice: dollars(22999),
    },
  ];
}

function optionsBaseTwoDrawer(): StyleProductOption[] {
  return [
    {
      code: 'B30',
      size: '30"W | 34-1/2"H | 24"D',
      price: dollars(32999),
      discountedPrice: dollars(29999),
    },
    {
      code: 'B36',
      size: '36"W | 34-1/2"H | 24"D',
      price: dollars(35999),
      discountedPrice: dollars(32999),
    },
  ];
}

function optionsWallCabinet(): StyleProductOption[] {
  return [
    {
      code: 'W2412',
      size: '24"W | 12"H | 12"D',
      price: dollars(14999),
      discountedPrice: dollars(12999),
    },
    {
      code: 'W3012',
      size: '30"W | 12"H | 12"D',
      price: dollars(16999),
      discountedPrice: dollars(14999),
    },
    {
      code: 'W3612',
      size: '36"W | 12"H | 12"D',
      price: dollars(18999),
      discountedPrice: dollars(16999),
    },
  ];
}

function generateSampleProductsForStyle(styleDisplayName: string): StyleProduct[] {
  return [
    {
      id: 'base-single-drawer',
      category: 'Base Cabinet',
      title: `${styleDisplayName} Single Drawer Base`,
      bullets: [
        '1 Drawer',
        '1 Door: 20-1/2" W x 22-1/2" H x 3/4" Th',
        '1 Adjustable shelf',
        'Hinge left or right (selected at assembly)',
      ],
      options: optionsBaseCabinet(),
    },
    {
      id: 'base-2-drawer',
      category: 'Base Cabinet',
      title: `${styleDisplayName} 2 Drawer Base`,
      bullets: ['2 Drawers', 'Solid hardwood dovetail drawers', 'Full extension soft-close slides'],
      options: optionsBaseTwoDrawer(),
    },
    {
      id: 'wall-12h-15h',
      category: 'Wall Cabinet',
      title: `${styleDisplayName} Wall Cabinet 12"H & 15"H`,
      bullets: ['2 Doors', 'No Shelf', 'CARB II Compliant'],
      options: optionsWallCabinet(),
    },
  ];
}

export async function loadMockCabinetStylesWithProducts(): Promise<CabinetStyleWithProducts[]> {
  const baseStyles = await loadCabinetStyles();
  return baseStyles.map((style) => ({
    ...style,
    products: generateSampleProductsForStyle(style.displayName),
  }));
}
