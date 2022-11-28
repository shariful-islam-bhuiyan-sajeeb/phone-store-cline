import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const url =`https://assignment-12-server-lac.vercel.app/bookings?email=${user?.email}`;
    
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
           
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-2xl mb-6'> My Booking...</h2>
            <div className="overflow-x-auto w-full">
                <table className="table bg-white w-full">
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>Brand Model</th>
                            <th>Used Product</th>
                            <th>Original Price</th>
                            <th>sell Price</th>
                            <th>Remove</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{booking.brandName}</div>
                                            <p className='text-md'>{booking.location}</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{booking.usedProduct} year</p>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{booking.release}day</span>
                                </td>
                                <td>{booking.originalPrice}</td>
                                <td>{booking.resellerPrice}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;