import { Categories } from '@/app/types/category.model'
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

export default function CategroyCard({category} : {category : Categories}) {
  return (
    <div>
      <Card>
        <CardContent>
          <div className="relative w-full h-[250px] rounded-0">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width:768px) 100vw , (max-width:1200px) 50vw , 25vw"
            />
          </div>
        </CardContent>
        <CardFooter className='text-center '>
          <h2 className='text-2xl  mx-auto text-green-700'>{category.name}</h2>
        </CardFooter>
      </Card>
    </div>
  )
}


