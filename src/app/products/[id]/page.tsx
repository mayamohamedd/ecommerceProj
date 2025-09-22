import { getProductDetails } from '@/app/actions/products.action';
import ProductDetailsComp from '@/components/products-comps/ProductDetailsComp';
import React from 'react'

export default async function ProductDetails({params} : {params: {id:string}}) {
    const {id} = await params ;
    const { data: productDetails} = await getProductDetails(id);
        
  return (
    <div className='container mx-auto'>
      <ProductDetailsComp productDetails={productDetails} />
    </div>
  )
}
