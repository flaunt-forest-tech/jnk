export interface CabinetStyleType {
  name: string;
  code: string;
  fileName: string;
  bestSelling?: boolean;
  order: number;
}

export const CABINET_STYLES: CabinetStyleType[] = [
  {
    name: 'White Shaker',
    code: 'S8',
    fileName: 'WHITE SHAKER - S8.webp',
    bestSelling: true,
    order: 1,
  },
  { name: 'Dove', code: 'E1', fileName: 'DOVE - E1.webp', bestSelling: true, order: 2 },
  { name: 'Charcoal', code: 'E2', fileName: 'CHARCOAL - E2.webp', bestSelling: true, order: 3 },
  { name: 'Sage', code: 'E3', fileName: 'SAGE - E3.webp', bestSelling: true, order: 4 },
  { name: 'Pebble', code: 'B6', fileName: 'PEBBLE - B6.webp', bestSelling: true, order: 5 },
  { name: 'Pure', code: 'B5', fileName: 'PURE - B5.webp', bestSelling: true, order: 6 },

  { name: 'Naval', code: 'B7', fileName: 'NAVAL - B7.webp', order: 7 },
  { name: 'Butterscotch', code: 'B8', fileName: 'BUTTERSCOTCH - B8.webp', order: 8 },
  { name: 'Java Coffee', code: 'S1', fileName: 'JAVA COFFEE - S1.webp', order: 9 },
  { name: 'Castle Grey', code: 'S5', fileName: 'CASTLE GREY - S5.webp', order: 10 },
  { name: 'Greige', code: 'K3', fileName: 'GREIGE - K3.webp', order: 11 },
  { name: 'Espresso', code: 'K8', fileName: 'ESPRESSO - K8.webp', order: 12 },

  { name: 'Mocha Glazed', code: 'K10', fileName: 'MOCHA GLAZED - K10.webp', order: 13 },
  { name: 'Hazel', code: 'H8', fileName: 'HAZEL - H8.webp', order: 14 },
  { name: 'Pearl Glazed', code: 'H9', fileName: 'PEARL GLAZED - H9.webp', order: 15 },
  { name: 'Creme Glazed', code: 'A7', fileName: 'CREME GLAZE - A7.webp', order: 16 },
  { name: 'Mahogany', code: 'J5', fileName: 'MAHOGANY - J5.webp', order: 17 },
];
