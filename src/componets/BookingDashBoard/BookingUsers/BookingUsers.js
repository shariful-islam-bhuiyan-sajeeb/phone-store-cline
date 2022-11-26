import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const BookingUsers = () => {

    const { data: bookingUsers = [], refetch } = useQuery({
        queryKey: ['bookingUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bookingUsers');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin= id =>{
        fetch(`http://localhost:5000/bookingUsers/admin/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then( data => {
            if(data.modifiedCount > 0){
                toast.success('Make Admin is Successful')
                refetch();
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
                            bookingUsers.map((user, i) => <tr key={user._id}>
                                <th>
                                    {i+1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {user.email}
                                </td>
                                <td>
                                    {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs bg-green-500 mt-4 '>Make Admin</button>}
                                </td>
                                
                                <th>
                                    <button className="btn btn-xs bg-red-600">Delete</button>
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