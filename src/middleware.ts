import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export async function middleware(request: NextRequest) {
// const token = request.cookies.get('next-auth.session-token');
const token = await getToken({req: request , secret: process.env.NEXTAUTH_SECRET})
console.log(token , "token")
if(!token){
    return NextResponse.redirect(new URL('/login', request.url))
}
  return NextResponse.next();
}
 

export const config = {
  matcher:["/products" , "/", "/categories" , "/brands", "/cart" , "wishlist" ],
}