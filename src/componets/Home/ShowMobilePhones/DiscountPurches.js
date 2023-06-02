import React from "react";
import { HiPlay, IconName } from "react-icons/hi2";

const DiscountPurches = () => {
  return (
    <div className="md:my-4 sm:py-3 py-2 flex lg:flex-row flex-col items-center lg:gap-x-3 gap-x-0 lg:space-y-0 sm:space-y-3 space-y-2 sm:px-4 px-2 ">
      <div className="flex items-center  lg:w-3/5 w-full xl:py-4 py-3 rounded-lg border-dotted border-2 border-red-500 bg-red-50 ">
        <div className="flex item-center justify-around w-full  px-1 ">
          <h2 className="font-medium font-serif lg:text-xl sm:text-lg text-md  text-[#F03E3E]">
            Super discount for your first purchase
          </h2>
          <button className="bg-red-500 text-white md:mx-4 sm:mx-2 mx-1 xl:px-4 md:px-3 px-2 sm:py-1 py-0  rounded-2xl md:text-lg  text-sm font-medium font-mono">
            First 250
          </button>
          <p className=" lg:text-lg text-sm text-black font-medium font-serif">
            Use discount code in checkout page.
          </p>
        </div>
      </div>
      <div className="flex items-center lg:w-2/5 w-full xl:py-5 py-4  rounded-lg border-dotted border-2 border-[#fac213] bg-[#FAC2131C] ">
        <div className="flex item-center justify-around w-full mx-auto  px-1 ">
          <h2 className="font-medium font-serif g:text-xl sm:text-lg text-md text-black">
            2nd shopping surprise campaign!
          </h2>
          <button className="flex items-center gap-x-1 bg-[#fac213] text-black mx-4 xl:px-4 md:px-3 px-2 lg:py-1 rounded-2xl sm:text-lg  text-sm font-medium font-mono">
            Check Products
            <HiPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountPurches;
