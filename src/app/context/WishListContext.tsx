import { get } from "http";
import { createContext, useContext, useEffect, useState } from "react";
import { getUserWishList } from "../actions/wishList.action";
import { WishListData } from "../types/wishList.model";

interface WishListContextType {
    wishListDetails : WishListData | null ;
    getWishListDetails?: () => Promise<void>;
}


const WishListContext = createContext<WishListContextType>({wishListDetails: null , getWishListDetails: async () => {}});

export default function WishListContextProvider({children}: {children: React.ReactNode}) {
   const [wishListDetails, setWishListDetails] = useState(null);
   async function getWishListDetails(){
    const response = await getUserWishList();
    console.log(response?.data, 'wishlist');
    setWishListDetails(response?.data);
   }
   useEffect(()=>{
getWishListDetails();
   },[])

    return <WishListContext.Provider value={{wishListDetails , getWishListDetails}}> 
        {children}
    </WishListContext.Provider>
}

export function useWishList(){
    const myContext = useContext(WishListContext);
    return myContext;
}