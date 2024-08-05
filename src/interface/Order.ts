export interface IOrder {
    id?: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    items: {
      id: number;
      name: string;
      price: number;
      quantity: number;
    }[];
    totalPrice: number;
    status: string;
  }