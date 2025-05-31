export interface DoorStyle {
  name: string;
  code: string;
  fileName: string;
  bestSelling?: boolean;
  order: number;
}

export const DOOR_STYLES: DoorStyle[] = [
  { name: 'White Shaker', code: 'S8', fileName: 'S8-WhiteShaker.png', bestSelling: true, order: 1 },
  { name: 'Dove', code: 'E1', fileName: 'E1-Dove.png', bestSelling: true, order: 2 },
  { name: 'Charcoal', code: 'E2', fileName: 'E2-Charcoal.png', bestSelling: true, order: 3 },
  { name: 'Sage', code: 'E3', fileName: 'E3-Sage.png', bestSelling: true, order: 4 },
  { name: 'Pebble', code: 'B6', fileName: 'B6-Pebble.png', bestSelling: true, order: 5 },
  { name: 'Pure', code: 'B5', fileName: 'B5-Pure.png', bestSelling: true, order: 6 },

  // { name: 'Naval', code: "S7", fileName: 'S7-Naval.png', order: 7 },
  // { name: 'Butterscotch', code: "B8", fileName: 'B8-Butterscotch.png', order: 8 },
  // { name: 'Java Coffee', code: "S1", fileName: 'S1-JavaCoffee.png', order: 9 },
  // { name: 'Castle Grey', code: "S5", fileName: 'S5-CastleGrey.png', order: 10 },
  // { name: 'Greige', code: "K3", fileName: 'K3-Greige.png', order: 11 },
  // { name: 'Espresso', code: "K8", fileName: 'K8-Espresso.png', order: 12 },
  // { name: 'Mocha Glazed', code: "K10", fileName: 'K10-MochaGlazed.png', order: 13 },
  // { name: 'Hazel', code: "H8", fileName: 'H8-Hazel.png', order: 14 },
  // { name: 'Pearl Glazed', code: "H9", fileName: 'H9-PearlGlazed.png', order: 15 },
  // { name: 'Creme Glazed', code: "A7", fileName: 'A7-CremeGlazed.png', order: 16 },
  // { name: 'Mahogany', code: "J5", fileName: 'J5-Mahogany.png', order: 17 }
];
