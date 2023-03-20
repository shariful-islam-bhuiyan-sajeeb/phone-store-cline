import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryDetailsCard from "../CategoryDetailsCard/CategoryDetailsCard";
import phone from "../../Assets/best-phone.gif";
import phone2 from "../../Assets/phone details.webp";
import phone3 from "../../Assets/phone details 2.webp";

const CategoryDetails = () => {
  const categories = useLoaderData();

  return (
    <div className=" flex flex-col justify-center">
      <div className="flex justify-center lg:w-full w-10/12 mx-auto rounded-l-lg gap-x-2 mt-8 mb-4">
        <img
          className="xl:w-1/3 lg:w-80 md:w-64 rounded-l-lg sm:w-48 w-36 hidden sm:block"
          src={phone2}
          alt=""
        />
        <img
          className="xl:w-1/3 lg:w-80 md:w-64 sm:w-48 w-10/12  "
          src={phone}
          alt=""
        />
        <img
          className="xl:w-1/3 lg:w-80 md:w-64 sm:w-48 w-36 rounded-r-lg hidden sm:block"
          src={phone3}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center py-8 ">
        <h1 className="h-[1px] xl:w-[400px] lg:w-[320px] md:w-[220px] sm:w-[120px] hidde sm:block bg-gray-400"></h1>
        <h2 className="font-serif lg:px-10 md:px-6 sm:px-4 px-2 lg:text-2xl md:text-xl text-lg text-gray-600 uppercase">
          Choose your best phone{" "}
        </h2>
        <h1 className="h-[1px] xl:w-[400px] lg:w-[320px] md:w-[220px] sm:w-[120px] hidde sm:block bg-gray-400"></h1>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center gap-6 px-4 sm:mt-4">
          {categories.map((category) => (
            <CategoryDetailsCard
              key={category._id}
              category={category}
            ></CategoryDetailsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
