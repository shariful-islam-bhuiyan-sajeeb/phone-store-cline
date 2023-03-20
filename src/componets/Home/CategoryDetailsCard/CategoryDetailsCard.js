import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import BookingModal from "../../BookingModal/BookingModal";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";
import UseTitle from "../../Hook/UseTitle/UseTitle";
import ReportModal from "../../BookingModal/ReportModal/ReportModal";
import { HiArrowTopRightOnSquare, IconName } from "react-icons/hi2";
import { HiShieldExclamation } from "react-icons/hi";

const CategoryDetailsCard = ({ category, refetch }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [booking, setBooking] = useState(null);
  const { user } = useContext(AuthContext);
  UseTitle("Phones Category");

  const {
    price,
    resalePrice,
    used_of_year,
    name,
    img,
    description,
    ratings,
    release,
    location,
  } = category;

  return (
    <div className="flex flex-col max-w-lg border-b  border-x hover:border-sky-500 overflow-hidden rounded-lg ">
      <div className="flex lg:space-x-4 sm:space-x-2 space-x-1">
        <img
          alt=""
          src={img}
          className="object-cover w-10 h-10 rounded-full border-sky-500 border-2 "
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="#"
            className="md:text-lg text-sm font-serif"
          >
            <span className="font-semibold">Seller Name:</span>
            <span className="text-sm pl-2 italic">
              {user?.displayName ? user?.displayName : "Updating this Username"}{" "}
            </span>
          </a>
          <span className="text-xs dark:text-black">
            <p>Date: {format(selectedDate, "PP")}.</p>
          </span>
        </div>
      </div>
      <div className="">
        <div className="overflow-hidden">
          <img
            src={img}
            alt=""
            className="object-cover w-full mb-4 h-50 sm:h-96  ease-in-out duration-500 transform hover:scale-125 "
          />
        </div>
        <div className="font-serif px-2">
          <div className="flex sm:flex flex-col items-center justify-between text-md font-serif">
            <h2 className="sm:text-xl text-lg font-semibold  ">
              {" "}
              Name: {name?.length > 20 ? name?.slice(0, 20) + "..." : name}
            </h2>
            <div className="flex items-start animate-pulse">
              <FaStar className="sm:text-lg text-md ml-2 text-orange-300"></FaStar>{" "}
              <FaStar className="sm:text-lg text-md ml-2 text-orange-300"></FaStar>{" "}
              <FaStar className="sm:text-lg text-md ml-2 text-orange-300"></FaStar>{" "}
            </div>
          </div>

          <p className="text-md text-justify text-black">
            {description.slice(0, 100) + "..."}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mt-2 px-2 ">
        <div className="">
          <div className="font-serif">
            <p className="text-xl font-semibold">Original Price: {price}</p>
            <p>
              <small className="">Used : {used_of_year}yr</small>
            </p>
          </div>
        </div>
        <div className="flex  text-sm text-black">
          <p className="text-xl font-semibold">Resale Price: {resalePrice}</p>
        </div>
      </div>
      <div className=" flex gap-x-2 px-2 sm:pt-0 pt-2 text-xl font-serif">
        <label
          onClick={() => setBooking(category)}
          htmlFor="report-modal"
          className=" flex items-center justify-center gap-x-1 bg-sky-400 hover:bg-green-400 px-3 py-2 rounded-lg w-full"
        >
          <HiShieldExclamation />
          Report
        </label>
        <label
          onClick={() => setBooking(category)}
          htmlFor="confirmation-modal"
          className="flex items-center justify-center gap-x-1 bg-sky-400 hover:bg-green-400  px-3 py-2 rounded-lg w-full  "
        >
          <HiArrowTopRightOnSquare />
          Booking
        </label>
      </div>
      {booking && (
        <BookingModal
          category={category}
          booking={booking}
          setBooking={setBooking}
          refetch={refetch}
        ></BookingModal>
      )}
      ,
      {booking && (
        <ReportModal
          category={category}
          setBooking={setBooking}
          refetch={refetch}
        ></ReportModal>
      )}
    </div>
  );
};

export default CategoryDetailsCard;
