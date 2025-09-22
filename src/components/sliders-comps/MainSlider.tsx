"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { MoveRight } from 'lucide-react';

export default function MainSlider() {
  return (
    <div className='container mx-auto '>
      <Swiper 
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
            <div className='relative h-[550px] w-full bg-cyan-500'>
        <Image 
        alt="clothes-2" 
        src="/sliders/clothes-5.jpg" 
        className='object-contain'
        priority
        loading="eager" 
        fill 
        sizes="(max-width:768px) 100vw (max-width:1200px) 50vw , 25vw" />
        <div className="text-lg absolute top-[200px] left-[40px] ms-3">
        <h2 className=' font-bold my-7'>Summer Collection</h2>
        <p className=' font-bold my-7 w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint tenetur quis!</p>
        <Button className='px-10 my-3 text-cyan-600 bg-white'>Shop Now <MoveRight /></Button>
        </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative h-[550px] w-full bg-red-500'>
        <Image
         alt="slider-1" 
         src="/sliders/clothes-6.webp" 
         className='object-contain' 
         priority
         loading="eager"
         fill 
         sizes="(max-width:768px) 100vw (max-width:1200px) 50vw , 25vw" />
        <div className="text-lg absolute top-[200px] left-[40px] text-white">
        <h2 className=' font-bold my-7'>Modest Chic</h2>
        <p className=' font-bold my-7 w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint tenetur quis!</p>
        <Button className='px-10 my-3'>Shop Now <MoveRight /></Button>
        </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative h-[550px] w-full bg-gray-400'>
        <Image
         alt="slider-3"
         src="/sliders/phone-new.webp" 
         className='object-contain' 
         priority
         loading="eager"
         fill 
         sizes="(max-width:768px) 100vw (max-width:1200px) 50vw , 25vw" />
        <div className="text-lg absolute top-[200px] left-[40px] ">
        <h2 className=' font-bold my-7'>Electronics</h2>
        <p className=' font-bold my-7 w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint tenetur quis!</p>
        <Button className='px-10 my-3'>Shop Now <MoveRight /></Button>
        </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
