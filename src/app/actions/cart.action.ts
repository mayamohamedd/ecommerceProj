"use server"

import { getUserToken } from "@/lib/token.utils";
import axios from "axios"
import ProductDetails from "../products/[id]/page";



async function addProductCart(productId : string){
    try {
    const token = await getUserToken() ;
  const response =   await axios.post("https://ecommerce.routemisr.com/api/v1/cart" , {productId} , {
    headers :{
        token : token as string
    },
   
  });
  return {
    data : response?.data,
    status: response.status,
    message: response?.data.message
  }
    } catch (error : unknown) {
        if(axios.isAxiosError(error)){
            return {
    data : [],
    status: error.response?.status,
    message: error?.response?.data.message || 'An Error Ocuured'
  }
        }
        
    }
}

async function getUserCart(){
    try {
    const token = await getUserToken() ;
  const response =   await axios.get("https://ecommerce.routemisr.com/api/v1/cart" , {
    headers :{
        token : token as string
    },
   
  });

  console.log(response?.data , 'cart')
  return {
    data : response?.data,
    status: response.status,
    message: response?.data.message
  }
    } catch (error : unknown) {
        if(axios.isAxiosError(error)){
            return {
    data : [],
    status: error.response?.status,
    message: error?.response?.data.message || 'An Error Ocuured'
  }
        }
        
    }
}
async function deleteProductCart(productId : string){
    try {
    const token = await getUserToken() ;
  const response =   await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`  , {
    headers :{
        token : token as string
    },
   
  });
  console.log(response?.data , 'delete')
  return {
    data : response?.data,
    status: response.status,
    message: response?.data.message
  }
    } catch (error : unknown) {
        if(axios.isAxiosError(error)){
            return {
    data : [],
    status: error.response?.status,
    message: error?.response?.data.message || 'An Error Ocuured'
  }
        }
        
    }
}
async function updateProductCart(productId : string , count : number){
    try {
    const token = await getUserToken() ;
  const response =   await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`  , {count}, {
    headers :{
        token : token as string
    },
   
  });
  console.log(response?.data , 'update')
  return {
    data : response?.data,
    status: response.status,
    message: response?.data.message
  }
    } catch (error : unknown) {
        if(axios.isAxiosError(error)){
            return {
    data : [],
    status: error.response?.status,
    message: error?.response?.data.message || 'An Error Ocuured'
  }
        }
        
    }
}
export {
    addProductCart , getUserCart , deleteProductCart , updateProductCart
}