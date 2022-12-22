import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import emailPage from '../../Assets/register photo.gif'
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import UseTitle from '../../Hook/UseTitle/UseTitle';
import useToken from '../../Hook/useToken/useToken';
import './SignuP.css'

const SignUP = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_Key
    const [signUpError, setSignUpError] = useState()
    const [signUpUserEmail, setSignUpUserEmail] = useState('')
    const [token] = useToken(signUpUserEmail)
    const { createUser, signInGoogle, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()
    UseTitle('SignUp')

    if (token) {
        navigate('/')
    }

    const handleSingUP = data => {
        setSignUpError('')
        // console.log(data);
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
                    const imgStore = {
                        name: data.name,
                        email: data.email,
                        image: imgData.data.url,
                    }
                   

                    // fetch('http://localhost:5000/imgStore',{
                    //     method: 'POST',
                    //     headers:{
                    //         'content-type': 'application/json',
                    //         authorization: `bearer ${localStorage.getItem('accessToken')}`
                    //     },
                    //     body: JSON.stringify(imgStore)
                    // })
                    // .then(res => res.json())
                    // .then( result =>{
                    //     console.log(result);
                    //     toast.success(`${data.imgData.data.url} image uploaded is successfully`)
                    // })
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            // console.log(user);
                            toast.success('User Created Successfully')
                            const userInfo = {
                                displayName: data.name,
                                seller: data.role,
                                photoURL: data.image,
                            }
                            console.log(userInfo);
                            updateUser(userInfo)
                            saveUser(data.name, data.email, data.role)
                        })
                        .catch(error => {
                            console.log(error);
                            setSignUpError(error.message)
                        })

                }
            })

    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/bookingUsers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setSignUpUserEmail(email)
            })
    }



    // Handle Google user
    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className=' flex justify-center items-center gap-2 mb-10 md:flex-row flex-col '>
            <div className=''>
                <img className='rounded-lg md:w-[400px] w-full mx-auto' src={emailPage} alt="" />
            </div>
            <div className='animation3 w-96 p-7 border'>
                <h2 className='text-xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSingUP)}>
                    <div className="form-control w-full max-w-xs">
                        <div className="form-control w-full flex justify-center mt-4 ">
                            <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                <span className='text-black text-sm'>Seller</span>
                                <span className="relative">
                                    <input id="Toggle2" type="checkbox" value="seller" {...register("role")} className="hidden peer" />
                                    {errors.radio && <p className='text-red-500'>{errors.name.message}</p>}
                                    <div className="w-10 h-4 rounded-full shadow bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                    <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-black"></div>
                                </span>
                                <span className='text-black text-sm'>Buyer</span>
                            </label>


                            {/* <input type="radio" value="seller"{...register("role")} className="radio radio-success" />
                            {errors.radio && <p className='text-red-500'>{errors.name.message}</p>} */}
                        </div>
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name",
                                { required: "please type your name" }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-700'>{errors.name?.message}</p>}

                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email",
                                { required: "email is required" }
                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}

                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "password is required",
                                    minLength: { value: 6, message: "password minimum 6 characters long" },
                                }

                            )} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}

                        <label className="label"><span className="label-text">Image Upload</span></label>
                        <input type="file"
                            {...register("image",
                                {
                                    required: "photo is required",

                                }

                            )} className=" border-solid border-2 p-6 rounded-lg  w-full max-w-xs" />
                        {errors.image && <p className='text-red-700'>{errors.image?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4 mb-4 bg-gradient-to-r from-purple-500 to-pink-500' value='signup' type="submit" />
                    {signUpError && <p className='text-red-600'> {signUpError}</p>}
                </form>

                <p>All ready have an Account  <Link className='text-primary font-semibold' to='/login'>Login page.</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='btn bg-gradient-to-r from-purple-500 to-pink-500 uppercase w-80 p-0 '> <FaGoogle className='text-xl mr-2 text-green-600'></FaGoogle>  Continue With Google</button>

            </div>

        </div>
    );
};

export default SignUP;