import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./serviceStyle.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const ServiceCarouselCard = () => {
  const services = useLoaderData();
  // console.log(service);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,

          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper cardSwiper "
        data-aos="zoom-in" data-aos-duration="1000"
      >
        {services.map((service) => (
          <div key={service.id} className="relative">
            <SwiperSlide className="cardSwiper-slide">
              <img src={service.image} />

              <div className="absolute bottom-0  transform w-full  text-white bg-black bg-opacity-10 hover:bg-opacity-30 pt-56">
                <Service service={service} />
              </div>
            </SwiperSlide>
          </div>
        ))}

      
      </Swiper>
    </>
  );
};

export default ServiceCarouselCard;
