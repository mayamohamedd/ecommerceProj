"use client"
import React from 'react'

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'

import { useRouter } from 'next/navigation'
import {  getVerifyCode } from '../actions/forgetPass.action'

export default function VerifyCode() {
  
     const router = useRouter();
    interface Inputs{
     resetCode : number
 
}
    const {register , handleSubmit , formState: { errors }} = useForm<Inputs>();
     async function onSubmit(values :Inputs){
       try {
            const response = await getVerifyCode( {resetCode : values.resetCode})
            console.log(response , "verify response");
            if(response?.data.status=== "Success"){
               console.log("success")
               router.push("/resetPass")
            }
        } catch (error) {
            console.log(error , "verify pass error");
        }
    //   console.log(values , "verify");
     
    }
    return(
 <div className='w-1/2 mx-auto my-10'>
      <h2 className='text-3xl tracking-tighter font-bold my-5'>Enter The Code to verify</h2>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <Input 
        type='number' 
        placeholder='code' 
        className='p-5 my-5'  
        {...register("resetCode" , {
            required:"Code is required"
        })}
        />
        {errors.resetCode && <p className='text-red-800'>{errors.resetCode.message}</p>}
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
