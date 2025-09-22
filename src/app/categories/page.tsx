import React from 'react'
import { getCategories } from '../actions/categories.action'
import CategoryGridSystem from '@/components/category-comps/CategoryGridSystem';

export default async function Categoriespage() {
  const result = await getCategories();
  const categories = result?.data ||  []
  return (
    <>
    <CategoryGridSystem categories={categories} />

  </>
  )
}
