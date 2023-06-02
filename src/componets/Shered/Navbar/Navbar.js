import React, { useContext } from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import mobileshop from "../../Assets/navbar photo.png";
import { AuthContext } from "../../Routes/AuthProvider/AuthProvider";
import bg from "../../Assets/bg navbar.png";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

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
          isActive ? " bg-sky-500 rounded-lg md:px-4 px-1 " : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="bookingDashBoard"
        className={({ isActive }) =>
          isActive ? " bg-sky-500 rounded-lg   md:px-4" : ""
        }
      >
        DashBoard
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "bg-sky-500 rounded-lg   md:px-4 py-1" : ""
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/ServiceCenter"
        className={({ isActive }) =>
          isActive ? " bg-sky-500 rounded-lg   md:px-4 py-1" : ""
        }
      >
        Service Centers
      </NavLink>

      {user?.uid ? (
        <>
          <Link className="" onClick={handleLogOut}>
            <a
              href="#_"
              className="px-5  relative rounded group overflow-hidden font-medium bg-purple-50 text-black inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Logout</span>
            </a>
          </Link>
        </>
      ) : (
        <Link className="" to="/login">
          <a
            href="#_"
            className="px-5  relative rounded group overflow-hidden font-medium bg-purple-50 text-black inline-block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Login</span>
          </a>
        </Link>
      )}
    </>
  );

  return (
    <div className="w-full">
      <div
        className={`flex md:flex-row flex-col items-center justify-around fixed z-50 top-0  w-full mx-auto  lg:py-2 md:py-4 sm:py-2 py-1  ${
          navbar ? "bg-slate-200 bg-opacity-70 text-black" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <div className="dropdown absolute sm:left-6 left-3 top-1">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black bg-red-100 bg-opacity-30  rounded-full "
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
              className="menu menu-compact dropdown-content border font-serif text-center py-2 px-4 space-y-2 bg-blue-100 rounded-lg "
            >
              {menuItems}
            </ul>
          </div>
          <Link>
            <img
              className="md:w-52 sm:w-36 w-28 sm:block hidden bg-gray-400 bg-opacity-50 rounded-xl sm:bg-transparent"
              src={mobileshop}
              alt=""
            />
          </Link>
        </div>

        <div className="flex item-center text-right lg:mr-8 md:mr-10 xl:text-3xl md:text-lg text-md font-serif    ">
          <ul className="menu menu-horizontal hidden md:flex   md:gap-x-8 sm:gap-x-4 gap-x-2 font-serif ">
            {menuItems}
          </ul>
        </div>
      </div>
      <section className="">
        <img className="w-full" src={bg} alt="" />
      </section>
    </div>
  );
};

export default Navbar;
