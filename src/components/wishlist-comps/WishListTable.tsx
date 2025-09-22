"use client"
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { useWishList } from '@/app/context/WishListContext';
import { toast } from 'react-hot-toast/headless'
import { addProductCart } from '@/app/actions/cart.action'
import { useCart } from '@/app/context/CartContext'
import { deleteProductWishList } from '@/app/actions/wishList.action'
import { set } from 'react-hook-form'

export default function WishListTable() {
 
    const {wishListDetails , getWishListDetails} = useWishList();
    const {getCartDetails} = useCart();
  async function handleAddToCart(productId : string){
    const response = await addProductCart(productId);
    console.log(response , 'added');
    toast.success(response?.message);
    await getCartDetails?.();
  }
  async function handleDeleteproductWishList(productId : string){
    const response = await deleteProductWishList(productId);
    toast.success("Product Successfully Deleted From WishList");
    await getWishListDetails?.();
  }
  return (
     <div className='w-3/4 mx-auto '>
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="p-6 text-3xl">My WishList</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
    {wishListDetails?.data.map((product) =>  <TableRow key={product._id}>
      <TableCell className="font-medium p-3">
        <div className="flex gap-4 ">
            <div className="relative">
                <Badge onClick={() => handleDeleteproductWishList(product._id)} className=' absolute top-[-10px] left-[-10px] cursor-pointer'>X</Badge>
             <Image src={product.imageCover} width="90" height='90' alt={product.title} />
            </div>
            <div>
             <p className='text-lg my-3'> {product.title}</p>
            <p className='text-green-600'>{product.price}egp</p>
            </div>
        </div>
      </TableCell>
      <TableCell className=" p-3 text-center"> <button onClick={() => handleAddToCart(product._id)} className= 'cursor-pointer px-10 py-5 bg-black text-white rounded-md'>
         Add to Cart
        </button></TableCell>
    </TableRow> ) }
  

  </TableBody>
</Table>
    </div>
  )
}
