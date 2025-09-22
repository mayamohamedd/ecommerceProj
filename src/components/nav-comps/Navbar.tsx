"use client"
import React from 'react'
import {
  NavigationMenu,
  
  NavigationMenuItem,
 
  NavigationMenuList,
  
} from "@/components/ui/navigation-menu"
import NavLink from 'next/link'
import Link from 'next/link'
import { ShoppingCart , Heart } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { Badge } from '../ui/badge';
import { useCart } from '@/app/context/CartContext';

import { useWishList } from '@/app/context/WishListContext';

export default function Navbar() {
  const session = useSession();
  const { cartDetails } = useCart();
  const{ wishListDetails } = useWishList();
 
  const { formState:{ isSubmitting }} = useForm();
  return (
    <div className='bg-gray-300'>
      <NavigationMenu className='text-md p-5 max-w-7xl flex justify-between items-center mx-auto my-5 bg-amber- '>
        
  <NavigationMenuList className='text-3xl font-semibold tracking-tighter'>
    <NavigationMenuItem className='text-pink-800 font-bold text-4xl'>
      <NavLink href="/">Wearly</NavLink>
      </NavigationMenuItem>
  </NavigationMenuList>

  <NavigationMenuList className='font-bold gap-5 text-pink-300 '>
    <NavigationMenuItem className='hover:text-pink-700 hover:text-lg'>
      <Link href="/">Home</Link>
    </NavigationMenuItem>
<NavigationMenuItem className='hover:text-pink-700 hover:text-lg'>
      <Link href="/products">Products</Link>
    </NavigationMenuItem>
<NavigationMenuItem className='hover:text-pink-700 hover:text-lg'>
      <Link href="/cart">Cart</Link>
    </NavigationMenuItem>
    <NavigationMenuItem className='hover:text-pink-700 hover:text-lg'>
      <Link href="/categories">Categories</Link>
    </NavigationMenuItem>
    <NavigationMenuItem className='hover:text-pink-700 hover:text-lg'>
      <Link href="/brands">Brands</Link>
    </NavigationMenuItem>
    <NavigationMenuItem className='hover:text-pink-700 hover:text-lg'>
      <Link href="/wishlist">WishList</Link>
    </NavigationMenuItem>
  </NavigationMenuList>

<NavigationMenuList className='font-bold gap-2'>
  <NavigationMenuItem className='text-pink-500 '>
    <Link className='relative' href="/cart">
      {cartDetails ?.numOfCartItems && (
<Badge variant='default' className='absolute top-[-20px] right-[-25px]  bg-pink-400'>{cartDetails?.numOfCartItems}</Badge>
      ) }
      <ShoppingCart />
    </Link>
  </NavigationMenuItem>
  <NavigationMenuItem className='text-pink-500 '>
    <Link className='relative' href="/wishlist" >
    {wishListDetails?.count && (
     <Badge variant='default' className='absolute top-[-20px] right-[-25px] bg-pink-400'>{wishListDetails?.count}</Badge>
    )}
      
      <Heart />
    </Link>
  </NavigationMenuItem>
  {session.data ? <NavigationMenuItem className='text-pink-800'>
      <Link href="/" onClick={() => signOut({ callbackUrl: "/login" })}>Logout</Link>
    </NavigationMenuItem> : <>
     <NavigationMenuItem className='text-pink-800'>
      <Link href="/login">{isSubmitting ? 'Logging in...' : 'Login'}</Link>
    </NavigationMenuItem>
    <NavigationMenuItem className='text-pink-800'>
      <Link href="/register">Register</Link>
    </NavigationMenuItem>
    </> }
 
     
</NavigationMenuList>

</NavigationMenu>
    </div>
  )
}
