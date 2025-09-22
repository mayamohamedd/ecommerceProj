import React from 'react'
import { LoaderCircle } from 'lucide-react';
export default function LoadingPage() {
  return (
    <div className=' flex justify-center h-screen items-center'>
      <LoaderCircle className='animate-spin' size={70} />
     <p className='text-3xl'>Loading......</p>
    </div>
  )
}
