import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import emailPage from '../../Assets/signUp email.webp'
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUP = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_Key 
    const [signUpError, setSignUpError] = useState()
    const { createUser, signInGoogle, updateUser }= useContext(AuthContext)
    const navigate = useNavigate()

    const handleSingUP = data =>{
        setSignUpError('')
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url =`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
           if(imgData.success){
            console.log(imgData.data.url);
           }
        })
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{
                navigate('/')
                console.log(data.name, data.email);

            })
            .catch( err => console.log(err))
        })
        .catch(error =>{
            console.log(error);
            setSignUpError(error.message)
        })

    }

    // Handle Google user
    const handleGoogle = () =>{
        signInGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='  flex justify-center items-center mb-10 '>
            <div className='w-1/3'>
                <img className='' src={emailPage} alt="" />
            </div>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSingUP)}>
                    <div className="form-control w-full max-w-xs">
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
                    <input className='btn btn-accent w-full mt-4 mb-4' value='signup' type="submit" />
                    { signUpError && <p className='text-red-600'> {signUpError}</p>}
                </form>
               
                <p>All ready have an Account  <Link className='text-primary font-semibold' to='/login'>Login page.</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline uppercase w-80 p-0 '> <FaGoogle className='text-xl mr-2 text-green-600'></FaGoogle>  Continue With Google</button>
                
            </div>

        </div>
    );
};

export default SignUP;