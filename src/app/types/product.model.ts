export interface Products{
    sold: number;
    images: string[];
    subcategory:Cat[];
    ratingsQuantity:number;
    title: string;
    slug: string;
    description: string;
    quantity:number;
    price: number;
    imageCover:string;
    category:Category;
    brand: Category;
    ratingsAverage:number;
    createdAt:string;
    updatedAt: string;
    id: string;
}
interface Cat {
    _id: string;
    name: string;
    slug: string;
    category: string;
}
interface Category {
    _id: string;
    name: string;
    slug: string;
    image:string;
}