import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Testimonials from "./Testimonials";

const FeaturedDeals = () => {
  const [phones, setPhones] = useState([]);
  const [feature, setFeature] = useState([]);
  useEffect(() => {
    fetch("showMobilePhones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  useEffect(() => {
    fetch("FeaturedDeals/FeaturedDealCard.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-start xl:gap-x-4 lg:gap-x-3 gap-x-2">
        <div className="lg:w-1/5 w-full mx-auto mt-4">
          <div className=" flex items-center px-3 text-right lg:justify-between justify-around    ">
            <h2 className="xl:text-xl lg:text:lg text-md font-serif font-semibold">
              Featured Deals
            </h2>
            <p className="xl:text-md  text-sm text-gray-400 font-medium">
              VIEW ALL
            </p>
          </div>
          {/* ================== card section  */}
          <div className=" grid  lg:grid-cols-1 sm:grid-cols-2 grid-cols-1">
            {feature?.map((card) => (
              <div key={card?.id}>
                <div className=" mt-4 border hover:border-black rounded-md py-2 px-2">
                  <div className="flex items-center gap-x-3 overflow-hidden">
                    <img
                      className="xl:w-20 lg:w-16 w-14 xl:h-20 lg:h-20 h-16 rounded-lg ease-in-out duration-500 transform hover:scale-125"
                      src={card?.img}
                      alt=""
                    />
                    <div className="">
                      <h2 className="lg:text-sm sm:text-md text-sm font-semibold font-mono ">
                        {card?.title}
                      </h2>
                      <p className="lg:text-sm sm:text-md text-sm text-gray-400">
                        ${card?.price}
                      </p>
                      <p className="lg:text-sm sm:text-md text-sm text-semibold text-black">
                        {card?.addToCard}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 mt-2">
                    <button className="bg-red-100 text-red-500 border border-red-300 rounded-md px-2 py-1 text-xs">
                      {card?.Expire}
                    </button>
                    <p className="text-xs text-gray-400">{card?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*========== testominal section  */}
          <div className=" my-4">
            <Testimonials />
          </div>
        </div>

        {/*-============== phone card section is here  */}
        <div className="lg:w-4/5 w-full mx-auto border border-black rounded-t-lg">
          <div>
            <img
              className="rounded-t-lg w-full"
              src="https://i.ibb.co/6mVhnfz/samsung-banner.jpg"
              alt=""
            />
          </div>
          <div className=" w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-col-1 lg:gap-x-3 sm:gap-x-2 gap-x-0 ">
            {phones?.map((phone) => (
              <div className=" mb-10 group " key={phone.id}>
                <div className=" relative overflow-hidden w-full cursor-pointer translate hover:-translate-y-2 transition-transform duration-700 ">
                  <img
                    className="border-2 rounded-lg lg:w-96 w-full xl:h-[250px] lg:h-[300px] md:h-[250px] sm:h-[200px] h-full "
                    src={phone?.img}
                    alt=""
                  />
                  <div className="absolute  w-full h-full  flex items-end justify-center bg-black/20   group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ">
                    <button className="text-white bg-black w-full px-4 py-1 lg:text-lg text-md font-serif">
                      Add to card
                    </button>
                  </div>
                  <h1 className="absolute lg:top-3 top-2 lg:right-3 sm:right-2 right-1 bg-transparent group-hover:bg-red-100 p-1 rounded-full  xl:text-xl text-lg">
                    <AiOutlineHeart />
                  </h1>
                </div>
                <div className="pl-1  mt-2">
                  <h2 className="lg:text-md text-xl font-serif font-medium">
                    {phone?.title}
                  </h2>
                  <p className="text-gray-500 lg:text-md text-lg ">
                    ${phone?.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeals;
