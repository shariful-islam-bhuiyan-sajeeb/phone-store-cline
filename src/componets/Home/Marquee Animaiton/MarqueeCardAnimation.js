import React from "react";
import Marquee from "react-fast-marquee";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import SwiperCard from "./SwiperCard";

const MarqueeCardAnimation = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center px-4 gap-x-4">
      <div className="bg-black text-white lg:w-2/4 w-full mx-auto xl:py-10 lg:py-8 md:py-6 py-4">
        <div className="text-center lg:w-3/5 w-full mx-auto lg:space-y-2 space-y-1">
          <h1 className="xl:text-4xl lg:text-2xl text-lg font-semibold font-serif ">
            P S TV+
          </h1>
          <p className="lg:text-lg sm:text-md text-sm px-4">
            Get 3 months of Apple TV+ free when you buy an iPhone.10
          </p>
          <div className="flex sm:flex-row flex-col items-center justify-center xl:gap-x-8 lg:gap-x-6 md:gap-x-4 sm:gap-x-2 gap-x-1 sm:space-y-0 space-y-1">
            <div className=" lg:text-lg md:text-md text-sm font-semibold font-serif flex items-center md:gap-x-2 gap-x-1 text-blue-600">
              <h2>Try it free</h2>
              <BsArrowUpRight className="font-bold" />
            </div>
            <div className="lg:text-lg md:text-md text-sm font-semibold font-serif flex items-center md:gap-x-2 gap-x-1 text-blue-600">
              <h2>Learn More</h2>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="flx flex-col ">
          <Marquee
            gradientColor
            speed={20}
            pauseOnHover
            className="rounded-lg  duration-300"
          >
            <div className="flex items-center xl:mt-10 lg:mt-8 md:mt-6 sm:mt-4 mt-2 ">
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg">
                <img
                  className="  rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] "
                  src="https://i.ibb.co/d6679Tr/220223142418-galaxy-s22-plus-design.jpg"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/VQQSDNB/samsung-galaxy-s22-purple-in-pocket.webp"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/crtcGqc/istockphoto-1352601587-170667a.webp"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/SvDM7r9/istockphoto-538683033-170667a.jpg"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/yyVs02P/depositphotos-278605230-stock-photo-back-view-male-checking-banking.webp"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/J37BgLc/clipboard-working-desk-external-drive-smartphone-hot-coffee-blank-note-book-wood-background-office-o.webp"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/RybBqf5/201705080655326507.png"
                  alt=""
                />
              </div>
            </div>
          </Marquee>
          <Marquee
            gradientColor
            speed={15}
            pauseOnHover
            className="rounded-lg  duration-300"
          >
            <div className="flex items-center lg:mt-4  mt-2 ">
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg">
                <img
                  className="  rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px] "
                  src="https://i.ibb.co/ypDSkcL/oneplus-nord-2t-review-5-x800-one-one.jpg"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/NnKBVSD/One-Plus-logo.jpg"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/WtPWS8x/images.jpg"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/jhLDKPd/maxresdefault.jpg"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/jDjYXjb/images.jpg"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/WtPWS8x/images.jpg"
                  alt=""
                />
              </div>
              <div className="lg:mx-6 md:mx-4 mx-2  border border-black rounded-lg ">
                <img
                  className="rounded-lg w-full xl:h-[150px] lg:h-[120px] md:h-[100px] sm:h-[80px] h-[60px]"
                  src="https://i.ibb.co/RybBqf5/201705080655326507.png"
                  alt=""
                />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="bg-[#a9c4ba] text-black lg:w-2/4 w-full mx-auto lg:mt-0 mt-8 2xl:py-16 xl:py-10 lg:py-8 md:py-6 py-4">
        <SwiperCard />
      </div>
    </div>
  );
};

export default MarqueeCardAnimation;
