import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import BookingUsedAdmin from '../../Hook/BookingUsedAdmin/BookingUsedAdmin';
import UseTitle from '../../Hook/UseTitle/UseTitle';
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
import Navbar from '../../Shered/Navbar/Navbar';
import { HiOutlineArchiveBoxArrowDown, HiShieldExclamation, HiUserPlus, HiUsers, } from "react-icons/hi2";

const BookingDashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = BookingUsedAdmin(user?.email)
    UseTitle('Booking Dashboard')
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile mt-4">
                <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 mt-20 text-base-content">
                        <li><Link to='/bookingDashBoard'>  <HiOutlineArchiveBoxArrowDown className='text-xl text-orange-500' /> <span className='font-semibold'>My Booking</span> </Link></li>
                        <li><Link >  <HiShieldExclamation className='text-xl text-red-500'/> <span className='font-semibold'>Report</span> </Link></li>

                        {
                            isAdmin && <>
                                <li><Link to='/bookingDashBoard/bookingUsers'> <HiUsers className='text-xl text-green-600' /> <span className='font-semibold'>My User</span></Link></li>
                                
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default BookingDashBoardLayout;