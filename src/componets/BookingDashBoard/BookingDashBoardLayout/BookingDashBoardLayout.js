import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import BookingUsedAdmin from '../../Hook/BookingUsedAdmin/BookingUsedAdmin';
import UseTitle from '../../Hook/UseTitle/UseTitle';
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
import Navbar from '../../Shered/Navbar/Navbar';
import { HiOutlineArchiveBoxArrowDown, HiShieldExclamation, HiUsers, } from "react-icons/hi2";
import { useQuery } from '@tanstack/react-query';

const BookingDashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const [isAdmin] = BookingUsedAdmin(user?.email)
    UseTitle('Booking Dashboard')

    const { data: imgStores=[], refetch } = useQuery({
        queryKey: ['imgStores'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/imgStore?email=${user?.email}`, {
                    // headers: {
                    //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                    // }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
            }
        }
    });


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
                        <li><Link to='/bookingDashBoard/productReport'><HiShieldExclamation className='text-xl text-red-500'/> <span className='font-semibold'>Report</span> </Link></li>
                        {
                            isAdmin && <>
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