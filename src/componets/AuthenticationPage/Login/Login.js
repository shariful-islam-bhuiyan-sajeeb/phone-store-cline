import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import email from "../../Assets/sign in.png";
import bg from "../../Assets/login bg.gif";

import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";
import UseTitle from "../../Hook/UseTitle/UseTitle";
import useToken from "../../Hook/useToken/useToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, login, signInGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState();
  const [loginEmail, setLoginEmail] = useState("");

  const [token] = useToken(loginEmail);
  UseTitle("Login");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    // console.log(data);
    setLoginError("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setLoginEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      // style={{
      //     background: `url(${email})`,
      //     backgroundSize: 'cover'
      // }}
      className="h-[800px] flex justify-center items-center md:flex-row flex-col "
    >
      <div className="">
        <img
          className=" rounded-lg md:w-[400px] w-full h-96 mx-auto  "
          src={bg}
          alt=""
        />
      </div>

      <div className=" p-7">
        <div className="">
          <h2 className="text-xl font-bold text-center"> Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full  "
              />
              {errors.email && (
                <p className="text-orange-700">{errors.email?.message}</p>
              )}

              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                {...register("password", {
                  required: "Password Address is required",
                  minLength: {
                    value: 6,
                    message: "password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full"
              />
              {errors.password && (
                <p className="text-orange-700">{errors.password?.message}</p>
              )}
            </div>
            <input
              className="btn btn-accent w-full mt-5 bg-gradient-to-r from-sky-500 to-indigo-500 text-2xl "
              value="Login"
              type="submit"
            />
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>
          <p>
            New to Doctors Portal{" "}
            <Link className="text-primary font-semibold" to="/signup">
              Create new Account
            </Link>
          </p>
          <div className="divider ">OR</div>
          <button
            onClick={handleGoogle}
            className="btn border-0 uppercase w-full bg-gradient-to-r from-purple-500 to-pink-500   "
          >
            {" "}
            <FaGoogle className="text-2xl text-black mr-2"></FaGoogle> Continue
            With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
