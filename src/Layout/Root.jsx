// import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Pages/Navbar/Navbar";
import Footer from "../Component/Pages/Footer/Footer";

const Root = () => {
  return (
    <div className="overflow-hidden font-Ubuntu">
      <div className="max-w-screen-xl mx-auto">
        <div className="min-h-screen">
          <Navbar />
          <Outlet></Outlet>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
