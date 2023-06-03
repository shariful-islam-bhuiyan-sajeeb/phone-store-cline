import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shered/Footer/Footer";
import Navbar from "../Shered/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
