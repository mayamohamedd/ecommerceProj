"use client"
import React from 'react'
import  { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
export default function Loginpage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  interface Inputs{
  name :string;
  email:string;
  password:string;
  rePassword:string;
  phone:string;
}
const {register , handleSubmit , formState: { errors }} = useForm<Inputs>();
 async function onSubmit(values :Inputs){
  console.log(values , "login");
  try {
    const response = await signIn('credentials' , {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl:"/"
    });
    console.log(response);
    if(response?.ok){
      router.push('/');
    }
  } catch (error) {
    console.error(error);
  }
}
  return (
    <div className='w-1/2 mx-auto my-10'>
      <h2 className='text-3xl tracking-tighter font-bold my-5 text-pink-600'>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}> 
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
        <Button 
        className='px-7 py-5 my-5 bg-pink-900'
        type="submit">
          Login
        </Button>
        {errorMessage && <p className='text-red-800 text-xl '>{errorMessage}</p>}
        <div>
        <Link href="/forgetPass" className='text-purple-600'>Forget Password?</Link>
        </div>
       
      </form>
    </div>
  )
}
