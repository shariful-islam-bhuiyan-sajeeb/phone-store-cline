import React from "react";
import "./PhoneStoreCard.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PhoneStoreCard = ({ phoneStore, refetch }) => {
  const { name, img, category } = phoneStore;

  return (
    <div className=" animation border-2 flex flex-col max-w-lg p-6 mx-auto space-y-4 overflow-hidden rounded-lg shadow-xl  text-black">
      <div>
        <img
          src={img}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="text-center lg:text-2xl text-xl font-semibold font-serif ">
          {" "}
          Brand: {name}
        </h2>
      </div>
      <div className="">
        {/* <div className="space-x-2">
          <Link>
            {" "}
            <FaArrowLeft className="text-2xl"></FaArrowLeft>{" "}
          </Link>
        </div> */}
        <div className=" text-black">
          <Link to={`/homeCategory/${category}`}>
            <button className=" text-xl w-full font-semibold font-serif py-1 px-4 text-center rounded-lg bg-sky-500 translate-all hover:bg-green-600">
              View Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneStoreCard;
