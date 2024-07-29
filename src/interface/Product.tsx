export interface IProduct {
  id: string | number;
  name: string;
  image: string;
  image2: string;
  image3: string;
  price: number;
  salePrice: number;
  order: number;
  categoryId: string;
  sales: number;
  discription: string;
  about: string;
  reviews: {
    rating: number;
    comment: string;
    user: string;
  }[];
  sale: boolean | string;
  quantity: number;
}

export type formType = Pick<IProduct,'name'|'price'|'image'|'image2'|'image3'|'categoryId'|'salePrice'|'discription'|'about'|'sale'>
export type cartType = Pick<IProduct,'name'|'price'|'image'|'sale'|'categoryId'|'salePrice'>