import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import UseTitle from '../../Hook/UseTitle/UseTitle';
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';

const AllSeller = () => {
    const { user } = useContext(AuthContext);
    UseTitle('/All Seller')

    const { data: bookingUsers = [], refetch } = useQuery({
        queryKey: ['bookingUsers'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-lac.vercel.app/bookingUsers');
            const data = await res.json();
            return data;
        }
    })
   
    return (
        <div>
            <h2 className='text-4xl mb-6'>Booking Users</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingUsers.map((bookingUser, i) => <tr key={bookingUser._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} alt='/' />
                                        </div>
                                    </div> 
                                    
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{bookingUser.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {bookingUser.email}
                                </td>
                                <th>
                                    <button className="btn btn-outline btn-info">Verify</button>
                                </th>
                                <th>
                                    <button className="btn  btn-warning">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;