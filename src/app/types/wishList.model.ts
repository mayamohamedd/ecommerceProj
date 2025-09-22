export interface WishListBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface WishListCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface WishListSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface WishListProduct {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  sold: number;
  imageCover: string;
  images: string[];
  category: WishListCategory;
  subcategory: WishListSubcategory[];
  brand: WishListBrand;
  ratingsAverage: number;
  ratingsQuantity: number;
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface WishListData {
  status: string;
  count: number;
  data: WishListProduct[];
}