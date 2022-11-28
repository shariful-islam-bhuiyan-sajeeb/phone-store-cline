import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import UseTitle from '../../Hook/UseTitle/UseTitle';
import Loading from '../../Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState()
    const imageHostKey = process.env.REACT_APP_imgbb_Key
    const navigate = useNavigate()
    UseTitle('/addProduct')


    //product category 
    const { data: addProducts, isLoading } = useQuery({
        queryKey: ['addProducts'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-lac.vercel.app/addProducts');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleSingUP = data => {
        console.log(data);

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const product = {
                        addProduct: data.addProduct,
                        Name: data.productName,
                        Price: data.originalPrice,
                        resalePrice: data.resalePrice,
                        used: data.used,
                        location: data.location,
                        email: data.email,
                        phone: data.phone,
                        date: data.date,
                        image: imgData.data.url,
                    }

                    fetch('https://assignment-12-server-lac.vercel.app/addProducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('All Products added is Success.')
                            navigate('/bookingDashBoard/manageProduct')
                        })
                }
            })
    }


    return (

        <div className='  flex justify-center items-center  mb-10 '>
            <div className='w-96 p-7 bg-slate-200 shadow-2xl px-9 py-2 rounded-lg'>
                <h2 className='text-xl text-center '>Add Product.</h2>
                <form onSubmit={handleSubmit(handleSingUP)}>
                    <div className="form-control w-full  max-w-xs">
                        <label className="label"><span className="label-text">Product Category</span></label>
                        <select
                            {...register('addProduct')}
                            className="select select-bordered w-full text-black max-w-xs">
                            <option disabled selected>Select your Product</option>
                            {
                                addProducts.map(addProduct => <option
                                    key={addProduct._id}
                                    value={addProduct.name}
                                >{addProduct.name}</option>)
                            }
                        </select>
                        <label className="label"><span className="label-text">Original Price</span></label>
                        <input type="text"
                            {...register("originalPrice",
                                { required: "please type your Original Price" }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.originalPrice && <p className='text-red-700'>{errors.originalPrice?.message}</p>}

                        <label className="label"><span className="label-text">Resale Price</span></label>
                        <input type="text"
                            {...register("resalePrice",
                                { required: "please type your resale Price" }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.resalePrice && <p className='text-red-700'>{errors.resalePrice?.message}</p>}

                        <label className="label"><span className="label-text">Used of Year</span></label>
                        <input type="text"
                            {...register("used",
                                { required: "please type your used of year" }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.used && <p className='text-red-700'>{errors.used?.message}</p>}

                        <label className="label"><span className="label-text">Seller/ Buyer Name</span></label>
                        <input type="text"
                            {...register("productName",
                                { required: "please type your Product name" }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.productName && <p className='text-red-700'>{errors.productName?.message}</p>}

                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text"
                            {...register("location",
                                { required: "please type your location" }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-700'>{errors.location?.message}</p>}

                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email",
                                { required: "email is required" }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}

                        <label className="label"><span className="label-text">Phone Number</span></label>
                        <input type="Phone"
                            {...register("phone",
                                {
                                    required: "phone number is required",
                                    minLength: { value: 10, message: "Phone number  minimum 10 characters long" }
                                }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className='text-red-700'>{errors.phone?.message}</p>}
                        <label className="label"><span className="label-text">Date</span></label>
                        <input type="date"
                            {...register("date",
                                { required: "date is required" }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.date && <p className='text-red-700'>{errors.date?.message}</p>}

                        <label className="label"><span className="label-text mt-4">Image Upload</span></label>
                        <input type="file"
                            {...register("image",
                                {
                                    required: "photo is required",

                                }

                            )} className=" border-solid border-black border-2 p-6 rounded-lg  w-full max-w-xs" />
                        {errors.image && <p className='text-red-700'>{errors.image?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4 mb-4' value='Add Product' type="submit" />
                    {signUpError && <p className='text-red-600'> {signUpError}</p>}
                </form>
            </div>

        </div>
    );
};

export default AddProduct;