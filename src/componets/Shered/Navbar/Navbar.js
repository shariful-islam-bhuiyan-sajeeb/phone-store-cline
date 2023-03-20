import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import mobileshop from "../../Assets/navbar photo.png";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  // <NavLink
  //   to="/messages"
  //   className={({ isActive, isPending }) =>
  //     isPending ? "pending" : isActive ? "active" : ""
  //   }
  // >
  //   Messages
  // </NavLink>;

  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-sky-500 rounded-lg animate-pulse   lg:px-4 py-1" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="bookingDashBoard"
        className={({ isActive }) =>
          isActive ? "bg-sky-500 rounded-lg  animate-pulse  lg:px-4 py-1" : ""
        }
      >
        DashBoard
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "bg-sky-500 rounded-lg  animate-pulse  lg:px-4 py-1" : ""
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/ServiceCenter"
        className={({ isActive }) =>
          isActive ? " bg-sky-500 rounded-lg   lg:px-4 py-1" : ""
        }
      >
        Service Centers
      </NavLink>

      {user?.uid ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? " hover:bg-red-500 rounded-lg   lg:px-4 py-1" : ""
            }
          >
            <button className="" onClick={handleLogOut}>
              LogOut
            </button>
          </NavLink>
        </>
      ) : (
        <NavLink
          className={({ isActive }) =>
            isActive ? " rounded-lg  animate-pulse  lg:px-4 py-1" : ""
          }
        >
          {" "}
          <Link className="  py-2" to="/login">
            Login
          </Link>{" "}
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar font-semibold flex items-center justify-between md:mb-8 ">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content  text-center py-2 px-4 space-y-2 bg-white rounded-lg "
          >
            {menuItems}
          </ul>
        </div>
        <div>
          <Link>
            <img className="lg:w-36 sm:w-25 w-20 " src={mobileshop} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-center xl:text-xl md:text-lg text-md font-serif  flex item-center justify-center ">
        <ul className="menu menu-horizontal hidden md:flex item-center gap-x-8 ">
          {menuItems}
        </ul>
      </div>

      {/* <label className="swap swap-rotate pr-4 ">
        <input onClick={handleThemeSwitch} type="checkbox" />

        <svg
          className="swap-on text-[#FFC300] fill-current xl:w-10 w-5 xl:h-10 h-5  "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        <svg
          className="swap-off  text-gray-500  fill-current xl:w-10 sm:w-7 w-5  xl:h-10 sm:h-7 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label> */}
    </div>
  );
};

export default Navbar;
