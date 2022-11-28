import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { HiEnvelope, HiPhone } from "react-icons/hi2";

const ManageProductCard = ({ products,refetch }) => {

    const { Price, resalePrice, used, Name, email, phone, date, image, addProduct, description, ratings, release, location } = products;

    const deleteProduct = (products) =>{
        axios.delete(`https://assignment-12-server-lac.vercel.app/manageProduct/${products._id}`)
        .then((res) =>{
            console.log(res);
            if(res.data){
               toast.success('Delete Card is success') 
               refetch()
            }
        } )
    }


    return (
        <div className="flex flex-col max-w-lg p-6 overflow-hidden rounded-lg shadow-xl  text-black">
            <div>
                <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold "> Brand Name : {addProduct}</h2>
            </div>
            <div className="divider my-2 "></div>
            <div className="flex flex-wrap gap-2 justify-between pt-3 ">
                <div className="space-x-2">
                    <div className='flex  gap-10'>
                        <p className='text-md'>Original Price: <span className='text-xl text-green-500 font-bold'>{Price}</span></p>
                        <p><small className=''>Used : <span className='text-lg text-green-500 font-bold'> {used}</span> </small></p>
                    </div>
                </div>
                <div className=" space-x-2 text-sm text-black">
                    <div className='flex gap-6'>
                        <p className='text-md'>Resale Price: <span className='text-lg font-bold text-green-500'>{resalePrice}</span> </p>
                        <p className='text-md'>Location: <span className='text-lg font-bold text-green-500'> {location}</span> </p>
                    </div>
                    <div className="divider my-2"></div>
                    <div>
                        <div className=''>
                            <p className='text-md font-semibold'>Seller/Buyer Name:   <span className='text-xl font-bold text-green-500'>{Name}</span></p>
                            <p className='flex items-center gap-2'> <HiEnvelope className='text-xl text-green-700'></HiEnvelope> : <span className='text-lg font-semibold text-green-500'>{email}</span></p>
                        </div>
                        <div className='flex justify-center items-center gap-6'>
                            <p className='flex items-center gap-2 mt-2'> <HiPhone className='text-xl'></HiPhone> Phone : {phone} </p>
                            <p>Date : <span className='text-mg font-semibold text-green-400'>{date}</span> </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center'>
                <button onClick={() => deleteProduct(products)} className="btn btn-success w-full mt-6 ">Delete</button>
            </div>

        </div>
    );
};

export default ManageProductCard;