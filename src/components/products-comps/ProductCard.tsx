"use client"
import { Products } from '@/app/types/product.model'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { StarRating } from 'react-flexible-star-rating';
import { Heart, ShoppingCart, ZoomIn } from 'lucide-react'
import Link from 'next/link'
import { addProductCart } from '@/app/actions/cart.action'
import { useCart } from '@/app/context/CartContext'
import toast from 'react-hot-toast'
import { addProductWishList } from '@/app/actions/wishList.action'
import { useWishList } from '@/app/context/WishListContext'


export default function ProductCard({product}:{product:Products}) {
  const [isWishListed , setIsWishListed] = useState(false);
  const {getCartDetails} = useCart();
  const {getWishListDetails} = useWishList();
  async function handleAddToCart(productId : string){
    const response = await addProductCart(productId);
    console.log(response , 'added');
    toast.success(response?.message);
    await getCartDetails?.();
    
  }
  async function handleAddToWishList(productId : string){
    const response = await addProductWishList(productId);
    console.log(response , 'added to wishlist');
    toast.success(response?.message);
    setIsWishListed(true);
   let data=  await getWishListDetails();
  }
  return (
    <div>
      <Card className='relative group overflow-hidden bg-pink-100'>
        <div className="absolute z-1 flex flex-col gap-3 top-[150px] right-[-100px] group-hover:right-0 transition-all duration-500">
          <button onClick={() => handleAddToCart(product.id)} className='px-2 py-2 bg-slate-200 text-black hover:text-pink-600 cursor-pointer'> <  ShoppingCart/> </button>
          {isWishListed ? <button onClick={() => handleAddToWishList(product.id)}
           className='px-2 py-2  text-black bg-slate-200   cursor-pointer '> <Heart fill='red'/> </button> : <button onClick={() => handleAddToWishList(product.id)} 
             className='px-2 py-2  text-black bg-slate-200 hover:text-pink-600 cursor-pointer'> <Heart/> </button>}
        
          <button className='px-2 py-2 bg-slate-200 text-black hover:text-pink-600 cursor-pointer'> 
           <Link href={`/products/${product.id}`}>
           <ZoomIn/>
           </Link>
           </button>
        </div>
  <CardHeader>
    <CardTitle className='text-lg text-pink-500'>{product.title.split(" ").slice(0,2).join(" ")}</CardTitle>
    <CardDescription className='text-black'>{product.description.split(" ").slice(0,4).join(" ")}</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="relative w-full h-[300px]">
<Image 
src={product.imageCover}
alt={product.title}
fill
sizes="(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw"
/>
    </div>
  </CardContent>
  <CardFooter className='flex-col items-start'>
    <h2 className='text-lg font-bold'>Price: <span className='text-red-500'>{product.price} EGP</span> </h2>
  <StarRating initialRating={Math.floor(product.ratingsAverage)} dimension={5}/>
  </CardFooter>
</Card>
    </div>
  )
}
