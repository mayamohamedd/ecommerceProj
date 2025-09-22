"use client"
import { ProductDetails } from '@/app/types/productDetails.model'
import React from 'react'
import { StarRating } from 'react-flexible-star-rating'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {  Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { toast } from 'react-hot-toast/headless';
import { addProductCart } from '@/app/actions/cart.action';
import { useCart } from '@/app/context/CartContext';

export default function ProductDetailsComp({ productDetails }: { productDetails: ProductDetails}) {
  const {getCartDetails} = useCart();
  async function handleAddToCart(productId : string){
    const response = await addProductCart(productId);
    toast.success(response?.message);
    await getCartDetails?.();
  }

    // console.log(productDetails , "details")
  return (
    <div className='flex justify-between gap-5 items-center '>
      <div className="w-full md:w-1/2">
        <Swiper
                slidesPerView={1}
                spaceBetween={3}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[ Navigation, Pagination]}
                className="mySwiper"
              >
                {productDetails.images.map((src , index)=> <>
                <SwiperSlide key={index}>
                    <div className='relative h-[600px] w-full'>
                <Image 
                alt="slider-1" 
                src={src}
                className='object-contain'
                priority
                loading="eager" 
                fill 
                sizes="(max-width:768px) 100vw (max-width:1200px) 50vw , 25vw" />
                    </div>
                </SwiperSlide>
                </>)}
                
                
                
              </Swiper>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className='text-3xl font-bold tracking-tighter'>{productDetails.title}</h2>
        <p className='text-slate-700 text-2xl tracking-tighter my-7'>{productDetails.description}</p>
        <div className="flex justify-between items-center">
            <div className="catprice">
                <p className='text-lg my-4'>{productDetails.category.name}</p>
                <p className='text-lg my-4'>{productDetails.price} EGP</p>
            </div>
            <div className='flex gap-2'>
               <StarRating initialRating={Math.floor(productDetails.ratingsAverage)} dimension={5} />
               <span>{productDetails.ratingsAverage}</span>
            </div>
        </div>
        <button onClick={() => handleAddToCart(productDetails.id)} className='bg-black text-white w-full py-4 rounded-lg cursor-pointer'>+ Add to Cart</button>
      </div>
    </div>
  )
}
