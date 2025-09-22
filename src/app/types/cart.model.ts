import { ProductDetails } from './productDetails.model';

export interface CartProduct {
  _id: string;
  product: ProductDetails;
  count: number;
  price: number;
}

export interface CartData {
  status : string;
  cartId: string;
  data:{
    _id: string;
    cartOwner: string;
  products: CartProduct[];
  totalCartPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  };
  numOfCartItems: number;
}