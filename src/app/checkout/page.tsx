"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useCart } from '../context/CartContext'
import { getCashPayment, getOnlinePayment } from '../actions/payment.action'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
export default function CheckOutpage() {
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const {cartDetails , setCartDetails} = useCart();
  const [ paymentMethod , setPaymentMethod] = useState<"cash" | "online" | null>(null);
  const cartId = cartDetails?.cartId;
interface Inputs{
  details:string;
  phone:number;
  city:string;
}
const {register , handleSubmit , formState: { errors , isSubmitting }} = useForm<Inputs>();
    async function onSubmit(values :Inputs){
      if(paymentMethod =="cash"){
        try {
          const shippingAddress={
            details : values.details,
            phone: values.phone,
            city: values.city,
          }
            const response = await getCashPayment(cartId as string , values)
            console.log(response , "payment response");
            if(response?.data?.status === "success"){
                setCartDetails(null);
                router.push("/");
            }
        } catch (error) {
            console.log(error , "payment error");
        }
      }else if  (paymentMethod == "online"){
        //action call online payment
         try {
            const response = await getOnlinePayment(cartId as string , values)
            console.log(response?.data , "pay online");
            if(response?.data?.status === "success"){
                window.location.href = response.data.session.url
            }
        } catch (error) {
            console.log(error , "payment error");
        }
        
      }
        console.log(paymentMethod , "payment method");
       
    }
  
  return (
    <div className='w-1/2 mx-auto my-10'>
      <h2 className='text-3xl tracking-tighter font-bold my-5'>Payment</h2>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <Input 
        type='text'
        placeholder='Enter Details' 
        className='p-5 my-5' 
        {...register("details" , {required:'Details is required'})} 
        />
        {errors.details && <p className='text-red-800'>{errors.details.message}</p>}
        <Input 
        type='tel' 
        placeholder='Your phone' 
        className='p-5 my-5' 
        {...register("phone" , {required:'Phone is required'})} 
        />
        {errors.phone && <p className='text-red-800'>{errors.phone.message}</p>}
        <Input 
        type='text'
        placeholder='Enter Your city' 
        className='p-5 my-5' 
        {...register("city" , {required:'City is required'})} 
        />
        {errors.city && <p className='text-red-800'>{errors.city.message}</p>}

        <RadioGroup onValueChange={(val)=> setPaymentMethod(val as "online" |"cash")} className='my-5'>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="cash" id="cash" />
    <Label htmlFor="cash">CashPayment</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="online" id="online" />
    <Label htmlFor="online">Online Payment</Label>
  </div>
</RadioGroup>

        <Button 
        className='px-7 py-5'
        type="submit"
        disabled={isSubmitting}>
          {isSubmitting ? 'Checking Out...' : 'CheckOut'}
        </Button>
        {errorMessage && <p className='text-red-800 text-xl '>{errorMessage}</p>}
      </form>
    </div>
  )
}
