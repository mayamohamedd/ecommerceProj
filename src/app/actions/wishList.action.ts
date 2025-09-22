"use server"
import { getUserToken } from "@/lib/token.utils";
import axios from "axios";

   


   async function addProductWishList(productId : string){
    try {
    const token = await getUserToken() ;
  const response =   await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist" , {productId} , {
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
async function getUserWishList(){
    try {
    const token = await getUserToken() ;
  const response =   await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist" , {
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
async function deleteProductWishList(productId : string){
    try {
    const token = await getUserToken() ;
  const response =   await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`  , {
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
export {
    addProductWishList ,
    getUserWishList,
    deleteProductWishList
}