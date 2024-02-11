import { Item } from 'C:/Users/Nikola/Desktop/FEIT/V_Semestar/OWEB/OWEB_Domasni_NG/Proektna2/src/assets/item';

export const ITEMS: any = [
  {
    id: 1,
    name: 'Samsung Galaxy S24',
    description: 'The Samsung Galaxy S24 is a flaghsip phone from Samsung',
    iconUrl: 'https://m.media-amazon.com/images/I/71Ua9NgQgWL._AC_SX679_.jpg',
    category: 'electronics',
    availability: true,
    price: 860,
  },
  {
    id: 2,
    name: 'Vizio TV',
    description: 'The Vizio TV is a TV with a 40-inch size and great quality',
    iconUrl: 'https://m.media-amazon.com/images/I/81pL+uVYD3L._AC._SR360,460.jpg',
    category: 'electronics',
    availability: true,
    price: 168,
  },

  {
    id: 3,
    name: 'Dell Latitude',
    description: 'The Dell Latitude is a great laptop from Dell',
    iconUrl: 'https://m.media-amazon.com/images/I/71zkzCckCYL._AC_UL320_.jpg',
    category: 'electronics',
    availability: false,
    price: 299.95,
  },
];

export function findItemById(itemId: number) {
  return ITEMS.find((item: Item) => item.id === itemId);
}