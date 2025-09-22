import axios from "axios";



async function getForgetPass({email} : {email : string}){
    try {
  const response =   await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords` , {email});
  return {
   
    status: response.status,
    message: response?.data.message
  }
  console.log(response);
    } catch (error : unknown) {
        if(axios.isAxiosError(error)){
            return {
    
    status: error.response?.status,
    message: error?.response?.data.message || 'An Error Ocuured'
  }
        }
        
    }
}
async function getVerifyCode({resetCode} : {resetCode: number}){
    try {
  const response =   await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode` , {resetCode});
  console.log(response.data , "api response data")
  return {
    data: response.data,
    status: response.status,
    message: response?.data?.message
  }
  
    } catch (error : unknown) {
        if(axios.isAxiosError(error)){
            return {
    
    status: error.response?.status,
    message: error?.response?.data.message || 'An Error Ocuured'
  }
        }
        
    }
}


async function resetPassword({ email, password }: { email: string; password: string }) {
  try {
    const response = await axios.put(
      `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
      { email, newPassword: password }
    );
    return {
      status: response.status,
      message: response?.data?.message,
      data: response.data,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status,
        message: error?.response?.data?.message || "An Error Occurred",
      };
    }
  }
} 


export {
    getForgetPass,
    getVerifyCode,
    resetPassword,
}