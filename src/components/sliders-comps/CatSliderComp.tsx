"use client"
import { Categories } from '@/app/types/category.model'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {  Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function CatSliderComp({category} :{category : Categories[]}) {
  
  return (
    <div className='container mx-auto mt-5'>
        <h2 className='text-start text-3xl my-5 font-bold text-blue-600'>Categories:</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={3}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation, Pagination]}
        className="mySwiper"
      >
        {category.map((cat)=> <>
        <SwiperSlide key={cat._id}>
            <div className='relative h-[250px] w-full'>
        <Image 
        alt="slider-1" 
        src={cat.image}
        className=''
        priority
        loading="eager" 
        fill 
        sizes="(max-width:768px) 100vw (max-width:1200px) 50vw , 25vw" />
            </div>
            <p className='text-center text-2xl text-blue-800 font-semibold'>{cat.name}</p>
        </SwiperSlide>
        </>)}
        
        
        
      </Swiper>
    </div>
  )
}
