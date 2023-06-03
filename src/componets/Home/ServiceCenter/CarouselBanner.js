import React from "react";
import Typewriter from "typewriter-effect";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./CarouselBanner.css";

// npm i swiper

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function CarouselBanner() {
  return (
    <div className=" px-4 mt-10">
      <h2 className="lg:text-4xl sm:text-2xl text-xl text-center font-bold text-black sm:mb-10 mb-6">
        <Typewriter
          options={{
            strings: ["Discover Samsung Event Offers"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className=" ">
          <div className="">
            <img
              className=" w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/zJ2m8BJ/tipdilz7wysq-7d-Xt-M9-IVl-Et-L5-Dh-Zpam-Dv9.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className="">
            <img
              className=" w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/5rc9K28/eabdaadef69a169117a2900e77bfde9f.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className="">
            <img
              className=" w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/Rbv5Qm1/s23-reserve-img2.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className="">
            <img
              className=" w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/qMZmskc/65d97454319437-59714e95873e4.gif"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className="">
            <img
              className=" w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/cT6qMXF/maxresdefault.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className="">
            <img
              className=" w-full sm:h-96 rounded-lg h-64"
              src="https://i.ibb.co/RybBqf5/201705080655326507.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
