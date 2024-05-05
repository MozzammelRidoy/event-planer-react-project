// import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Pages/Navbar/Navbar";
import Footer from "../Component/Pages/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider/AuthProvider";
import { RotateLoader } from "react-spinners";

const Root = () => {
  const { isLoading } = useContext(AuthContext);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <RotateLoader color="black" />
        </div>
      ) : (
        <div className="overflow-hidden font-Ubuntu">
          <div className="max-w-screen-xl mx-auto">
            <div className="">
              <Navbar />
              <Outlet></Outlet>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Root;
