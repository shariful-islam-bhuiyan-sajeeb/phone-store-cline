import React from "react";
import iPhone from "../../Assets/mobile logo/i phone.png";
import mi from "../../Assets/mobile logo/mi.png";
import samsung from "../../Assets/mobile logo/samsung.png";
import sony from "../../Assets/mobile logo/sony.png";
import htc from "../../Assets/mobile logo/HTC.png";
import nokia from "../../Assets/mobile logo/nokia png.png";
import realme from "../../Assets/mobile logo/Realme.png";
import walton from "../../Assets/mobile logo/walton.png";

const AdvertiseMobileLogo = () => {
  return (
    <section className="md:mt-10 mt-4">
      <div className="flex justify-center items-center container">
        <div className=" font-serif">
          <div className="flex sm:flex-row flex-col md:text-4xl sm:text-2xl text-xl font-semibold">
            {" "}
            <p>Trusted by the Our</p>
            <p className="text-green-500 ">Phone Store</p>
          </div>{" "}
          <p className="md:text-2xl sm:text-xl text-lg text-center ">
            Different Mobile models{" "}
            <span className="text-green-500 ">Advertise</span>{" "}
          </p>
        </div>
      </div>
      <div className="container  md:mt-8 mt-4 md:px-0 px-4 mx-auto dark:text-gray-400">
        <div className="flex flex-wrap md:mb-10 sm:gap-0 gap-4  mb-4 w-full justify-around">
          <div className="flex justify-center p-2   align-middle border hover:border-sky-400">
            <img className="w-36 rounded-lg" src={iPhone} alt="" />
          </div>
          <div className="flex justify-center p-2 border hover:border-sky-400 align-middle ">
            <img className="sm:w-40 w-28" src={mi} alt="" />
          </div>
          <div className="flex justify-center  p-2 border hover:border-sky-400 ">
            <img className="sm:w-40 w-28" src={samsung} alt="" />
          </div>
          <div className="flex justify-center p-2 border hover:border-sky-400">
            <img className="sm:w-40 w-28" src={sony} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap w-full sm:gap-0 gap-4 justify-around">
          <div className="flex justify-center p-2 border hover:border-sky-400">
            <img className="sm:w-40 w-28" src={htc} alt="" />
          </div>
          <div className="flex justify-center p-2 border hover:border-sky-400">
            <img className="sm:w-40 w-28" src={nokia} alt="" />
          </div>
          <div className="flex justify-center p-2 border hover:border-sky-400">
            <img className="sm:w-40 w-28" src={realme} alt="" />
          </div>
          <div className="flex justify-center p-2 border hover:border-sky-400">
            <img className="sm:w-40 w-28" src={walton} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseMobileLogo;
