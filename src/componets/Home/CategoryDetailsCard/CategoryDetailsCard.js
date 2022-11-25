import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import BookingModal from '../../BookingModal/BookingModal';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const CategoryDetailsCard = ({ category }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [booking ,setBooking] = useState(null)
    const { price, resalePrice, used_of_year, name, img, description, ratings, release, location } = category;

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-4 overflow-hidden rounded-lg shadow-xl  text-black">
            <div className="flex space-x-4">
                <img alt="" src={img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-lg font-semibold">Seller </a>
                    <span className="text-xs dark:text-black"><p>Date: {format(selectedDate, 'PP')}.</p></span>
                </div>
            </div>
            <div>
                <img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold "> Name: {name}</h2>
                <p className="text-sm text-black">{description.slice(0, 60)}</p>
            </div>

            <div className="flex flex-wrap justify-between pt-3 ">
                <div className="space-x-2">
                    <div>
                        <p className='text-xl font-semibold'>Original Price: {price}</p>
                        <p><small className='mr-10'>Used : {used_of_year} yr</small></p>
                        
                    </div>
                </div>
                <div className="flex space-x-2 text-sm text-black">
                    <div>
                        <p className='text-xl'>Resale Price: {resalePrice}</p>
                        <div>
                            <p className='flex text-md'>Ratings-{ratings} <FaStar className='text-lg ml-2 text-orange-400 flex items-center'></FaStar> <FaStar className='text-lg ml-2 text-orange-400'></FaStar> <FaStar className='text-lg ml-2 text-orange-400'></FaStar> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label onClick={() => setBooking(category)} htmlFor="confirmation-modal" className="btn btn-success p-3  ">Booking</label>
            </div>
            { booking &&
                <BookingModal
                category={category}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryDetailsCard;