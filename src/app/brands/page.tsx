
import React from 'react'
import { getBrands } from '../actions/brands.action';
import BrandsGridSystem from '@/components/brands-comps/BrandsGridSystem';

export default async function Brandspage() {
  const result = await getBrands();
  const brands = result?.data || []
  return (
    <BrandsGridSystem brands={brands} />
  )
}
