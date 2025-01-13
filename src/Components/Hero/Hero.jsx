import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Slide } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import bannerImage from "../../../public/images/banerImage.png";
import anotherImage from "../../../public/images/anotherImage.png"; 

const Hero = () => {
  return (
    <div className="relative w-full h-[300px] lg:h-[500px]">
   
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
      
        <SwiperSlide>
          <div className="relative flex w-full h-full">
            <img src={bannerImage} alt="Banner 1" className="w-fit  h-fit object-cover" />
            <div className="absolute inset-0 flex justify-end items-center px-6 sm:px-12 lg:px-20">
              <div className="text-black  text-right space-y-4">
                <Slide direction="down" triggerOnce>
                  <h2 className="backdrop-blur-lg lg:text-green-400 text-sm md:text-xl uppercase tracking-wide">
                    Welcome to Shopery
                  </h2>
                </Slide>
                <Slide direction="left" triggerOnce>
                  <h1 className="text-sm md:text-3xl backdrop-blur-lg font-extrabold leading-tight">
                    Fresh and Healthy Organic Food
                  </h1>
                </Slide>
                <Fade delay={300} triggerOnce>
                <p className="text-xs md:text-lg max-w-lg bg-black/60 backdrop-blur-sm  rounded-md sm:bg-transparent text-white sm:backdrop-blur-none">
  Free Shipping on all your orders. We deliver, you enjoy.
</p>
                </Fade>
                <Fade delay={500} triggerOnce>
                  <button className="px-2 lg:px-6 py-1 lg:py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex w-full h-full">
            <img src={anotherImage} alt="Banner 1" className="w-fit  h-fit object-cover" />
            <div className="absolute inset-0 flex justify-end items-center px-6 sm:px-12 lg:px-20">
              <div className="text-black  text-right space-y-4">
                <Slide direction="down" triggerOnce>
                  <h2 className="backdrop-blur-lg lg:text-green-400 text-sm md:text-xl uppercase tracking-wide">
                  Discover Fresh Deals
                  </h2>
                </Slide>
                <Slide direction="left" triggerOnce>
                  <h1 className="text-sm md:text-3xl backdrop-blur-lg font-extrabold leading-tight">
                  Organic Food for Your Family
                  </h1>
                </Slide>
                <Fade delay={300} triggerOnce>
                <p className="text-xs md:text-lg max-w-lg bg-black/60 backdrop-blur-sm  rounded-md sm:bg-transparent text-white sm:backdrop-blur-none">
                Get the best discounts on fresh, organic groceries today.
</p>
                </Fade>
                <Fade delay={500} triggerOnce>
                  <button className="px-2 lg:px-6 py-1 lg:py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                  Explore More
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
       

    
     
      </Swiper>
    </div>
  );
};

export default Hero;