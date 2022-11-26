import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import email from '../../Assets/sign in.webp'
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Routes/AuthProvider/AuthProvider';
import UseTitle from '../../Hook/UseTitle/UseTitle';
import useToken from '../../Hook/useToken/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, login, signInGoogle } = useContext(AuthContext)
    const [loginError, setLoginError] = useState()
    const [userEmail, setUserEmail] = useState()
    const [loginEmail, setLoginEmail]= useState('')

    const [token] = useToken(loginEmail)
      UseTitle('Login')
     

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
               setLoginEmail(data.email)
                // navigate(from, {replace: true})
                
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)

            })
    }

    //----------jwt-----------------------
    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken);
    //                 navigate('/')
    //             }
    //         })
    // }

    const handleGoogle =()=>{
        signInGoogle()
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }


    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div>
                <img className='w-96' src={email} alt="" />
            </div>

            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'> Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input  type="email"
                            {...register("email",
                                { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-orange-700'>{errors.email?.message}</p>}

                        <label className="label"><span className="label-text">Password</span></label>

                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password Address is required",
                                    minLength: { value: 6, message: "password must be 6 characters or longer" }
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-orange-700'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-5 ' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal  <Link className='text-primary font-semibold' to='/signup'>Create new Account</Link></p>
                <div className="divider ">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline uppercase w-full  '> <FaGoogle className='text-2xl mr-2'></FaGoogle> Continue With Google</button>
                
            </div>

        </div>
    );
};

export default Login;