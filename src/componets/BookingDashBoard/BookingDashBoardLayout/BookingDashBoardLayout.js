import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import BookingUsedAdmin from '../../Hook/BookingUsedAdmin/BookingUsedAdmin';
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
import Navbar from '../../Shered/Navbar/Navbar';

const BookingDashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = BookingUsedAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile mt-4">
                <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/bookingDashBoard'>My Booking</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/bookingDashBoard/bookingUsers'>My User</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default BookingDashBoardLayout;