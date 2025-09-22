import React from 'react'
import { getProducts } from '../actions/products.action';
import ProductsGridSystem from '@/components/products-comps/ProductsGridSystem';




export default async function Productspage() {
  const {data : products} = await getProducts();
   
  return (
    <div>
      <ProductsGridSystem products={products} />
    </div>
  )
}
