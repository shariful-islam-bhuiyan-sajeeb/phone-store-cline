import React from "react";
import { HiPlay } from "react-icons/hi2";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css";

// npm i swiper

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Testimonials() {
  return (
    <div className="relative hidden lg:block">
      <div>
        <h2 className="xl:text-2xl lg:text-xl font-semibold font-serif xl:mt-4 lg:mt-2 mt-0 ">
          Testimonials
        </h2>
      </div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2000,
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
          <div className=" relative bg-black xl:py-6 lg:py-4 py-2 px-2 rounded-lg  w-full">
            <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-2 gap-x-1">
              <img
                className="xl:w-20 lg:w-16 w-10 xl:h-20 lg:h-16 h-10 rounded-full"
                src="https://i.ibb.co/grm6Wkw/young-bearded-man-with-striped-shirt-273609-5677.jpg"
                alt=""
              />
              <div className="flex flex-col items-start font-serif  text-white">
                <h2 className="lg:text-lg text-md font-semibold">
                  Jessica Brown
                </h2>
                <p className="lg:text-md text-sm">Customer</p>
              </div>
            </div>
            <p className="xl:mt-6 lg:mt-4 mt-2 xl:pb-4 pb-2 text-white text-xs text-justify font-serif">
              This is due to their excellent service, competitive pricing and
              customer support. Its throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className=" relative bg-black xl:py-6 lg:py-4 py-2 px-2 rounded-lg  w-full">
            <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-2 gap-x-1">
              <img
                className="xl:w-20 lg:w-16 w-10 xl:h-20 lg:h-16 h-10 rounded-full"
                src="https://i.ibb.co/tpDXcbN/man-mid-s-poses-studio-portrait-his-semi-white-background-67858855.jpg"
                alt=""
              />
              <div className="flex flex-col items-start font-serif  text-white">
                <h2 className="lg:text-lg text-md font-semibold">
                  Caleb Hoffman
                </h2>
                <p className="lg:text-md text-sm">Customer</p>
              </div>
            </div>
            <p className="xl:mt-6 lg:mt-4 mt-2 xl:pb-4 pb-2 text-white text-xs text-justify font-serif">
              This is due to their excellent service, competitive pricing and
              customer support. Its throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" ">
          <div className=" relative bg-black xl:py-6 lg:py-4 py-2 px-2 rounded-lg  w-full">
            <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-2 gap-x-1">
              <img
                className="xl:w-20 lg:w-16 w-10 xl:h-20 lg:h-16 h-10 rounded-full"
                src="https://i.ibb.co/grm6Wkw/young-bearded-man-with-striped-shirt-273609-5677.jpg"
                alt=""
              />
              <div className="flex flex-col items-start font-serif  text-white">
                <h2 className="lg:text-lg text-md font-semibold">alex lila</h2>
                <p className="lg:text-md text-sm">Customer</p>
              </div>
            </div>
            <p className="xl:mt-6 lg:mt-4 mt-2 xl:pb-4 pb-2 text-white text-xs text-justify font-serif">
              This is due to their excellent service, competitive pricing and
              customer support. Its throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div>
        <div className=" flex justify-center  w-full xl:py-5 py-4 mt-6  rounded-lg border-dotted border-2 border-[#fac213] bg-[#FAC2131C] ">
          <div className=" text-center  space-y-2  xl:py-4 lg:py-2 ">
            <h2 className="font-medium font-serif lg:text-md sm:text-md text-md text-black">
              2nd shopping surprise campaign!
            </h2>
            <button className="flex items-center justify-center w-full gap-x-1 bg-[#fac213] text-black  xl:px-4 md:px-3 px-2 lg:py-1 rounded-2xl xl:text-md  text-sm font-medium font-mono">
              Check Products
              <HiPlay />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
