import { Brands } from '@/app/types/brands.model'
import React from 'react'
import BrandsCard from './BrandsCard'

export default function BrandsGridSystem({brands} : {brands : Brands[]}) {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl text-center my-5 text-green-700 '>All Brands</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
        {brands.map((brand)=> <BrandsCard key={brand._id} brand={brand} /> )}
      </div>
    </div>
  )
}
