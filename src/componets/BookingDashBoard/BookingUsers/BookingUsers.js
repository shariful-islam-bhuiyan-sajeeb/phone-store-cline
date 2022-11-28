import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import UseTitle from '../../Hook/UseTitle/UseTitle';

const BookingUsers = () => {
    const [deleteUser, setDeleteUser] = useState(null)
    UseTitle('/ All Buyer')

    const { data: bookingUsers = [], refetch } = useQuery({
        queryKey: ['bookingUsers'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-lac.vercel.app/bookingUsers');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = email => {
        fetch(`https://assignment-12-server-lac.vercel.app/bookingUsers/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin is Successful')
                    refetch();
                }

            })
    }

    

    const handleDelete = bookingUser => {
        fetch(`https://assignment-12-server-lac.vercel.app/bookingUser/${bookingUser._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller User ${bookingUser.name} is Delete success`)
                }

            })
    } 

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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingUsers.map((bookingUser, i) => <tr key={bookingUser._id}>
                                <th>
                                    {i + 1}
                                </th>
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
                                <td>
                                    {bookingUser?.role !== 'admin' && <button onClick={() => handleMakeAdmin(bookingUser._id)} className='btn btn-xs bg-green-500 mt-4 '>Make Admin</button>}
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(bookingUser)} className="btn btn-xs bg-red-600">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingUsers;