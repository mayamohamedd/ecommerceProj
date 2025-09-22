"use client"
import React from 'react'
import  { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { getForgetPass } from '../actions/forgetPass.action'

export default function ForgetPasswordpage() {
    const router = useRouter();
    interface Inputs{
    email:string;
 
}
    const {register , handleSubmit , formState: { errors }} = useForm<Inputs>();
     async function onSubmit(values:Inputs){
       try {
            const response = await getForgetPass(values)
            console.log(response , "forget response");
            if(response?.status === 200){
               router.push("/verifyCode")
            }
        } catch (error) {
            console.log(error , "forget pass error");
        }
      console.log(values , "forget");
     
    }
    return(
 <div className='w-1/2 mx-auto my-10'>
      <h2 className='text-3xl tracking-tighter font-bold my-5'>Enter Your Email to verify</h2>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <Input 
        type='email' 
        placeholder='Your email' 
        className='p-5 my-5' 
        {...register("email" , {required:'Email is required'})} 
        />
        {errors.email && <p className='text-red-800'>{errors.email.message}</p>}
        <Button 
        className='px-7 py-5 my-5'
        type="submit">
          Verify
        </Button>
        <div>
        </div>
       
      </form>
    </div>
  )
}
