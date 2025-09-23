"use server"
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
export async function getUserToken(){
    const cookieStore = await cookies();
    const encodedToken = 
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;
    if(!encodedToken){
        return undefined;
    }
    const decodeToken = await decode({token: encodedToken , secret: process.env.NEXTAUTH_SECRET!});
    const token = decodeToken?.token;
    return token ;
}