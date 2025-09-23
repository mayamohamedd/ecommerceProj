import { getProductDetails } from '@/app/actions/products.action';
import ProductDetailsComp from '@/components/products-comps/ProductDetailsComp';
import React from 'react'

export default async function ProductDetails({params} : {params: {id:string}}) {
    const {id} =  params ;
    const result = await getProductDetails(id);
    const productDetails = result?.data;
        
  return (
    <div className='container mx-auto'>
      <ProductDetailsComp productDetails={productDetails} />
    </div>
  )
}
