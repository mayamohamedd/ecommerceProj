import { Categories } from '@/app/types/category.model'
import React from 'react'
import CategroyCard from './CategroyCard'

export default function CategoryGridSystem({categories} : {categories : Categories[]}) {
  return (
    <div className='container mx-auto my-10'>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
       {categories.map((category) => <CategroyCard key={category._id} category={category} />)}
      </div>
    </div>
  )
}
