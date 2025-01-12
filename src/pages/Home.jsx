
import Advantages from '../Components/Utils/Advantages'
import AdvanImg1 from "../../public/images/Icon.png"
import AdvanImg2 from "../../public/images/Icon (1).png"
import AdvanImg3 from "../../public/images/Icon (2).png"
import AdvanImg4 from "../../public/images/Icon (3).png"
import FeaturedProduct from '../Components/FeaturedProducts/FeaturedProduct'
import Hero from '../Components/Hero/Hero'
import { useLoaderData } from 'react-router-dom'
import TopCategory from '../Components/TopCategory'
import Newsletter from '../Components/Newsletter'
import ClientTestimonial from '../Components/ClientTestimonial/ClientTestimonial'
import Ads from '../Components/Ads/Ads'
import Highlight from '../Components/Highlight/Highlight'

function Home() {
  const data=useLoaderData()


  return (
    <>
    <Hero></Hero>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 px-4 md:px-16 lg:mx-24">
  <Advantages image={AdvanImg1} title="Free Shipping" des="Free Shipping With Discount" />
  <Advantages image={AdvanImg2} title="Great Support 24/7" des="Free Shipping With Discount" />
  <Advantages image={AdvanImg3} title="100% Secure Payment" des="Free Shipping With Discount" />
  <Advantages image={AdvanImg4} title="Money-Back Guarantee" des="Free Shipping With Discount" />
</div>

   <FeaturedProduct data={data}></FeaturedProduct>

   <TopCategory></TopCategory>
    <Highlight></Highlight>
   <ClientTestimonial></ClientTestimonial>
    <Ads></Ads>
   <Newsletter></Newsletter>
    
    </>
  )
}

export default Home
