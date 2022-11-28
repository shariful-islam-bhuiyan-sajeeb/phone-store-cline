import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseTitle from '../../Hook/UseTitle/UseTitle';
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
import Navbar from '../../Shered/Navbar/Navbar';
import { HiOutlineArchiveBoxArrowDown, HiOutlineCircleStack, HiOutlineFolder, HiShieldExclamation, HiUsers, } from "react-icons/hi2";

import useAdmin from '../../Hook/BookingUsedAdmin/useAdmin';

const BookingDashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    UseTitle('Booking Dashboard')

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side ">
                    <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 mt-20 text-base-content">
                        <div className='mb-6'>
                            <img src={user?.displayURL} alt="" />
                            {
                                <div>
                                    <div className="avatar">
                                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} alt='/' />
                                        </div>
                                    </div>
                                    <h2 className='text-semibold text-xl text-cyan-500 p-4 '> <span className='text-black font-bold'>Seller Email:</span> {user?.email}</h2>
                                </div>
                            }
                        </div>
                        <li><Link to='/bookingDashBoard'>  <HiOutlineArchiveBoxArrowDown className='text-xl text-orange-500' /> <span className='font-semibold'>My Booking</span> </Link></li>
                        <li><Link to='/bookingDashBoard/productReport'><HiShieldExclamation className='text-xl text-red-500' /> <span className='font-semibold'>Report</span> </Link></li>
                       
                        {
                            isAdmin && <>
                                <li><Link to='/bookingDashBoard/addProduct'> <HiOutlineCircleStack className='text-xl text-green-600' /> <span className='font-semibold'>Add Products</span></Link></li>
                                <li><Link to='/bookingDashBoard/manageProduct'> <HiOutlineFolder className='text-xl text-green-600' /> <span className='font-semibold'> Manage Products</span></Link></li>
                                <li><Link to='/bookingDashBoard/bookingUsers'> <HiUsers className='text-xl text-green-600' /> <span className='font-semibold'>All Buyer</span></Link></li>
                                <li><Link to='/bookingDashBoard/allSeller'> <HiUsers className='text-xl text-green-600' /> <span className='font-semibold'>All Seller</span></Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default BookingDashBoardLayout;