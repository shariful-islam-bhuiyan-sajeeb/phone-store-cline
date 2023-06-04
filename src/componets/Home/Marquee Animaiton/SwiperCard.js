import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperCard.css";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SwiperCard() {
  return (
    <>
      <div>
        <div className="text-center lg:w-3/5 w-full mx-auto lg:space-y-2 space-y-1">
          <h1 className="xl:text-4xl lg:text-2xl text-xl font-semibold font-serif ">
            P S Music
          </h1>
          <p className="lg:text-lg sm:text-md text-sm px-4">
            Over 100 million songs. Start listening for free today.
          </p>
          <div className="flex sm:flex-row flex-col items-center justify-center xl:gap-x-8 lg:gap-x-6 md:gap-x-4 sm:gap-x-2 gap-x-1 sm:space-y-0 space-y-1">
            <div className=" lg:text-lg md:text-md text-sm font-semibold font-serif flex items-center md:gap-x-2 gap-x-1 ">
              <h2>Try it free</h2>
              <BsArrowUpRight className="font-bold" />
            </div>
            <div className="lg:text-lg md:text-md text-sm font-semibold font-serif flex items-center md:gap-x-2 gap-x-1 ">
              <h2>Learn More</h2>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="xl:mt-10 lg:mt-8 md:mt-6 mt-4">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 500,
              modifier: 3,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="lg:w-2/5 w-4/5 2xl:h-[280px] xl:h-[300px] lg:h-[270px] md:h-[400px] sm:h-[350px] h-full rounded-lg  mx-auto"
                src="https://i.ibb.co/VMdSxjD/oneplus-nord-ce-2-design.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-2/5 w-4/5 2xl:h-[280px] xl:h-[300px] lg:h-[270px] md:h-[400px] sm:h-[350px] h-full rounded-lg mx-auto"
                src="https://i.ibb.co/NnKBVSD/One-Plus-logo.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-2/5 w-4/5 2xl:h-[280px] xl:h-[300px] lg:h-[270px] md:h-[400px] sm:h-[350px] h-full rounded-lg mx-auto"
                src="https://i.ibb.co/WtPWS8x/images.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-2/5 w-4/5 2xl:h-[280px] xl:h-[300px] lg:h-[270px] md:h-[400px] sm:h-[350px] h-full rounded-lg mx-auto"
                src="https://i.ibb.co/Snx5zVx/images.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-2/5 w-4/5 2xl:h-[280px] xl:h-[300px] lg:h-[270px] md:h-[400px] sm:h-[350px] h-full rounded-lg mx-auto"
                src="https://i.ibb.co/VMdSxjD/oneplus-nord-ce-2-design.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-2/5 w-4/5 2xl:h-[280px] xl:h-[300px] lg:h-[270px] md:h-[400px] sm:h-[350px] h-full rounded-lg mx-auto"
                src="https://i.ibb.co/vcYyrM6/images.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-2/5 w-4/5 2xl:h-[280px] xl:h-[300px] lg:h-[270px] md:h-[400px] sm:h-[350px] h-full rounded-lg mx-auto"
                src="https://i.ibb.co/7bm04xy/images.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-2/5 w-4/5 2xl:h-[280px] xl:h-[300px] lg:h-[270px] md:h-[400px] sm:h-[350px] h-full rounded-lg mx-auto"
                src="https://i.ibb.co/hmxtXV7/download.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-2/5 w-4/5 2xl:h-[280px] xl:h-[300px] lg:h-[270px] md:h-[400px] sm:h-[350px] h-full rounded-lg mx-auto"
                src="https://i.ibb.co/Snx5zVx/images.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
