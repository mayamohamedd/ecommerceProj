
import React from 'react'
import { getBrands } from '../actions/brands.action';
import BrandsGridSystem from '@/components/brands-comps/BrandsGridSystem';

export default async function Brandspage() {
  const {data : brands} = await getBrands();
  return (
    <BrandsGridSystem brands={brands} />
  )
}
