import React from 'react'
import { getCategories } from '../actions/categories.action'
import CategoryGridSystem from '@/components/category-comps/CategoryGridSystem';

export default async function Categoriespage() {
  const {data : categories} = await getCategories();
  return (
    <>
    <CategoryGridSystem categories={categories} />

  </>
  )
}
