"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
export default function Registerpage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
interface Inputs{
  name :string;
  email:string;
  password:string;
  rePassword:string;
  phone:string;
}
const {register , handleSubmit , formState: { errors , isSubmitting }} = useForm<Inputs>();
 async function onSubmit(values :Inputs){
  try {
    const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
    console.log(response);
    if(response?.data.message === 'success'){
      router.push('/login');
    }
    setErrorMessage(null);
  } catch (error : unknown) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data.message);
      setErrorMessage(error.response?.data.message);
    } 
  }
  console.log(values);
}
  
  return (
    <div className='w-1/2 mx-auto my-10'>
      <h2 className='text-3xl tracking-tighter font-bold my-5 text-pink-600'>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <Input 
        type='text'
        placeholder='Your name' 
        className='p-5 my-5' 
        {...register("name" , {required:'Name is required'})} 
        />
        {errors.name && <p className='text-red-800'>{errors.name.message}</p>}
        <Input 
        type='email' 
        placeholder='Your email' 
        className='p-5 my-5' 
        {...register("email" , {required:'Email is required'})} 
        />
        {errors.email && <p className='text-red-800'>{errors.email.message}</p>}
        <Input 
        type='password' 
        placeholder='Your password' 
        className='p-5 my-5' 
        {...register("password" , {required:'Password is required'})} 
        />
        {errors.password && <p className='text-red-800'>{errors.password.message}</p>}
        <Input 
        type='password' 
        placeholder='Re password' 
        className='p-5 my-5' 
        {...register("rePassword" , {required:'Re Password is required'})} 
        />
        {errors.rePassword && <p className='text-red-800'>{errors.rePassword.message}</p>}
        <Input 
        type='tel' 
        placeholder='Your phone' 
        className='p-5 my-5' 
        {...register("phone" , {required:'Phone is required'})} 
        />
        {errors.phone && <p className='text-red-800'>{errors.phone.message}</p>}
       
        <Button 
        className='px-7 py-5 bg-pink-900 '
        type="submit"
        disabled={isSubmitting}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </Button>
        {errorMessage && <p className='text-red-800 text-xl '>{errorMessage}</p>}
      </form>
    </div>
  )
}
