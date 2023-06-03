import React, { useState } from "react";
import SamsungCards from "./SamsungCards";
import Terrace from "./Terrace";
import Soundbar from "./Soundbar";
import { NavLink } from "react-router-dom";

const TvAudio = () => {
  const [active, setActive] = useState("FirstCard");

  return (
    <main className="xl:my-16 lg:my-10 md:my-8 sm:my-6 my-4 xl:px-0 px-3">
      <section className="bg-[#f5ece5]">
        <div className="flex flex-col justify-center text-center xl:pt-16 lg:pt-14 md:pt-10 sm:pt-8 pt-6">
          <h2 className=" xl:text-6xl md:text-4xl text-2xl font-serif font-semibold ">
            TV & Audio
          </h2>
          <div className="flex items-center justify-center flex-wrap xl:mt-6 lg:mt-4 mt-2 lg:text-lg md:text-md text-md font-semibold font-serif text-black  xl:gap-x-6 lg:gap-x-2">
            <NavLink
              onClick={() => setActive("FirstCard")}
              className={({ isActive }) =>
                isActive
                  ? "lg:text-xl sm:text-lg text-md   hover:bg-white hover:border hover:border-dotted border-black lg:px-3 sm:px-2 px-1 lg:py-2 py-1 rounded-xl transition-all duration-300"
                  : "text-red-500 transition-all"
              }
              to="/"
            >
              Samsung Neo QLED 8K
            </NavLink>
            <NavLink
              onClick={() => setActive("SecondCard")}
              className={({ isActive }) =>
                isActive
                  ? "lg:text-xl sm:text-lg text-md   hover:bg-white hover:border hover:border-dotted border-black lg:px-3 sm:px-2 px-1 lg:py-2 py-1 rounded-xl transition-all duration-300"
                  : "text-red-500 transition-all"
              }
              to="/"
            >
              The Terrace
            </NavLink>
            <NavLink
              onClick={() => setActive("ThirdCard")}
              className={({ isActive }) =>
                isActive
                  ? "lg:text-xl sm:text-lg text-md  hover:bg-white hover:border hover:border-dotted border-black lg:px-3 sm:px-2 px-1 lg:py-2 py-1 rounded-xl transition-all duration-300"
                  : "text-red-500 transition-all "
              }
              to="/"
            >
              Ultra Slim Soundbar
            </NavLink>
          </div>
        </div>
        {active === "FirstCard" && <SamsungCards />}
        {active === "SecondCard" && <Terrace />}
        {active === "ThirdCard" && <Soundbar />}
      </section>
    </main>
  );
};

export default TvAudio;
