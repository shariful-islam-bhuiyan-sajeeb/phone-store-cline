import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import UseTitle from '../../Hook/UseTitle/UseTitle';
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';

const ProductReport = () => {
    const {user}=useContext(AuthContext)
    UseTitle('/ProductReport')

    const url = `https://assignment-12-server-lac.vercel.app/reports?email=${user?.email}`;
    console.log(url);
    const { data: reports =[] } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl'> report</h2>

            <div className="overflow-x-auto w-full">
                <table className="table bg-white w-full">
                    <thead>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>Brand Model</th>
                            <th>Reporter Name / Email</th>
                            <th>Original Price</th>
                            <th>sell Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reports.map((report, i) => <tr key={report._id}>
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={report.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{report.brandName}</div>
                                            <p className='text-md'>{report.location}</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{user?.email}</p>
                                    <br />
                                    <span className="badge badge-ghost badge-lg">{user?.displayName}</span>
                                </td>
                                <td>{report.originalPrice}</td>
                                <td>{report.resellerPrice}</td>
                                
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ProductReport;