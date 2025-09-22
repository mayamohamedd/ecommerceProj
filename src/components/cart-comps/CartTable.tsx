"use client"
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { useCart } from '@/app/context/CartContext';
import { deleteProductCart, updateProductCart } from '@/app/actions/cart.action'
import toast from 'react-hot-toast'
import Link from 'next/link'

export default function CartTable() {
  const {cartDetails , getCartDetails} = useCart();
  async function handleDeleteProduct(productId : string){
    const response = await deleteProductCart(productId);
    // console.log(response , 'deleted');
    toast.success("Product Successfully Deleted From Cart");
    await getCartDetails?.();
  }
  async function handleUpdateProduct(productId : string , count : number){
    const response = await updateProductCart(productId , count);
    // console.log(response , 'updated');
    toast.success("Product Updated Successfully");
    await getCartDetails?.();
  }

  return (
    <>
    {cartDetails ? <div className='w-3/4 mx-auto'>
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="p-6 text-center text-blue-800 text-lg">Products</TableHead>
      <TableHead className="p-6 text-center text-gray-800 text-lg">Price</TableHead>
      <TableHead className="p-6 text-center text-blue-800 text-lg">Quantity</TableHead>
      <TableHead className="p-6 text-center text-gray-800 text-lg">SubTotal</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {cartDetails?.data?.products.map((product)=> <TableRow key={product._id}>
      <TableCell className="font-medium p-3">
        <div className="flex items-center gap-4 text-center justify-center">
            <div className="relative">
                <Badge onClick={() => handleDeleteProduct(product.product._id)} className='absolute top-[-10px] left-[-10px] cursor-pointer'>X</Badge>
             <Image src={product.product.imageCover} width="60" height='60' alt='image' />
            </div>
            
            <p>{product.product.title.split(" ").splice(0,2).join(" ")}</p>
        </div>
      </TableCell>
      <TableCell className='p-3 text-center text-blue-500'>{product.price} egp</TableCell>
      <TableCell>
        <div className=" text-center flex items-center justify-center p-3 gap-2 ">
            <button onClick={() => handleUpdateProduct(product.product._id , product.count + 1)} className='border-1 border-slate-500 rounded-md px-2 py-1 cursor-pointer'>+</button>
          <p>{product.count}</p>
          <button onClick={() => handleUpdateProduct(product.product._id , product.count - 1)} className='border-1 border-slate-500 rounded-md px-2 py-1 cursor-pointer'>-</button>
        </div>
      </TableCell>
      <TableCell className=" p-3 text-center text-lg text-gray-800">{product.price * product.count} egp</TableCell>
    </TableRow> )}
    
    <TableRow className='bg-slate-200'>
        <TableCell className='text-center p-6'>Total Price</TableCell>
        <TableCell className='text-center p-6 text-pink-600 text-lg' colSpan={2}>{cartDetails?.data?.totalCartPrice} egp</TableCell>
        <TableCell className='text-center p-6'>
            <button className='px-10 py-5 bg-black text-white rounded-md'>
              <Link href="/checkout">
               CheckOut</Link>
             
              </button>
        </TableCell>
    </TableRow>

  </TableBody>
</Table>
    </div> : <h2 className='text-center text-red-500 text-lg'>Your cart is empty</h2> }
    </>
  )
}
