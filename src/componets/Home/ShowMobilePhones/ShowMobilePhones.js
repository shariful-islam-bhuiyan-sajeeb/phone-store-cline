import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ShowMobilePhones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("showMobilePhones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  return (
    <div className="xl:mt-10 lg:mt-8  sm:mt-10 mt-8">
      <div className="text-center xl:py-8 lg:py-6 md:py-4 py-3">
        <h2 className="lg:text-4xl md:text-3xl sm:text-3xl  text-2xl font-bold font-serif ">
          Shop all latest offers and innovations
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col items-center ">
        <div className="hidden xl:flex pl-2 ">
          <img
            className="rounded-lg "
            src="https://i.ibb.co/TvFjf98/samsung-ad.jpg"
            alt=""
          />
        </div>
        <div className="  grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-col-1 lg:gap-x-3 sm:gap-x-2 gap-x-0 ">
          {phones?.map((phone) => (
            <div className="px-4  my-10 group " key={phone.id}>
              <div className=" relative overflow-hidden w-full translate hover:-translate-y-2 transition-transform duration-700 ">
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
  );
};

export default ShowMobilePhones;
