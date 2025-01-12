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
    <div className="relative w-full h-[400px] sm:h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImage}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-end items-center px-4 sm:px-8 lg:px-20">
              <div className="text-black text-right space-y-3 sm:space-y-4">
                <Slide direction="down" triggerOnce>
                  <h2 className="text-green-400 text-sm sm:text-lg md:text-xl uppercase tracking-wide">
                    Welcome to Shopery
                  </h2>
                </Slide>
                <Slide direction="left" triggerOnce>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
                    Fresh and Healthy Organic Food
                  </h1>
                </Slide>
                <Fade delay={300} triggerOnce>
                  <p className="text-xs sm:text-base md:text-lg max-w-lg">
                    Free Shipping on all your orders. We deliver, you enjoy.
                  </p>
                </Fade>
                <Fade delay={500} triggerOnce>
                  <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={anotherImage}
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-start items-center px-4 sm:px-8 lg:px-20">
              <div className="text-white text-left space-y-3 sm:space-y-4">
                <Slide direction="down" triggerOnce>
                  <h2 className="text-green-400 text-sm sm:text-lg md:text-xl uppercase tracking-wide">
                    Discover Fresh Deals
                  </h2>
                </Slide>
                <Slide direction="right" triggerOnce>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
                    Organic Food for Your Family
                  </h1>
                </Slide>
                <Fade delay={300} triggerOnce>
                  <p className="text-xs sm:text-base md:text-lg max-w-lg">
                    Get the best discounts on fresh, organic groceries today.
                  </p>
                </Fade>
                <Fade delay={500} triggerOnce>
                  <button className="px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
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
