// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { TypeAnimation } from "react-type-animation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Header from "../../Shared/Header/Header";


const Carousel = () => {
 
  return (
    <>
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1780,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper bannerSwiper-slide -z-10 "
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/VD3vxH7/aditya-chinchure-Zh-QCZjr9f-Ho-unsplash.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
            src="https://i.ibb.co/LdPJLV7/Untitled-design.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/w7S20kN/festive-friends-home-party.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/cNGPLS9/meeting-782050.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/WsCCVtY/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/DM29T1v/excited-young-women-jumping-air-celebrating-holi-festival.jpg"
              alt=""
            />
          </SwiperSlide>

          <div className="absolute inset-0 overflow-hidden z-10">
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          <div className="text-center md:text-6xl text-xl text-nowrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 font-bold text-white">
          <Header></Header>

          </div>

          
        </Swiper>
      </div>
    </>
  );
};
export default Carousel;
