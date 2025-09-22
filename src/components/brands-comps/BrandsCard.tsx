import { Brands } from '@/app/types/brands.model'
import React from 'react'

import {
  Card,

  CardContent,
 
  CardFooter,
  CardHeader,
  
} from "@/components/ui/card"
import Image from 'next/image'

export default function BrandsCard({brand} : {brand : Brands}) {
  return (
    <div>
      <Card >
        
  <CardHeader>
  </CardHeader>
  <CardContent>
    <div className="relative w-full h-[150px] rounded-0">
<Image
src={brand.image}
alt={brand.name}
fill
sizes="(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw"
/>
    </div>
  </CardContent>
  <CardFooter className='text-center '>
    <h2 className='text-lg  mx-auto'>{brand.name}</h2>
  </CardFooter>
</Card>
    </div>
  )
}
