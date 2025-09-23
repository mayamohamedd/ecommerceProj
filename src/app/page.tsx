
import MainSlider from "@/components/sliders-comps/MainSlider";
import { getCategories } from "./actions/categories.action";
import CatSliderComp from "@/components/sliders-comps/CatSliderComp";
import { getProducts } from "./actions/products.action";
import ProductsGridSystem from "@/components/products-comps/ProductsGridSystem";
import { get } from "http";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/route";


export default async function Home() {
  const session = await getServerSession(options);
  console.log(session , "session data") ;
  if(!session){
    return <p>You need to login</p>
  }

  const response = await getCategories();
  const data = response?.data;
  const productsResult = await getProducts();
  const products = productsResult?.data || [];
  return (
    <>
    <MainSlider/>
    <div className='my-5'>
          <CatSliderComp category={data}/>
        </div>
    
    <ProductsGridSystem products={products} />
    </>
  );
}
