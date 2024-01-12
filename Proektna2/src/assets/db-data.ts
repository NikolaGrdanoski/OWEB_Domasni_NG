import { Item } from 'C:/Users/Nikola/Desktop/FEIT/V_Semestar/OWEB/OWEB_Domasni_NG/Proektna2/src/assets/item';

export const ITEMS: any = [
  {
    id: 1,
    name: 'Samsung Galaxy S23',
    description: 'The Samsung Galaxy S23 is a flaghsip phone from Samsung',
    iconUrl: 'https://images.samsung.com/uk/smartphones/galaxy-s23/buy/02_Image_Carousel/02-1_Group_KV_Basic_Color/S23Plus-group_kv_MO.jpg',
    category: 'electronics',
    availability: true,
    price: 800,
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
    availability: true,
    price: 299.95,
  },
];

export function findItemById(itemId: number) {
  return ITEMS.find((item: Item) => item.id === itemId);
}