// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Pages/Navbar/Navbar';
import Footer from '../Component/Pages/Footer/Footer';

const Root = () => {
    return (
        <div className=' font-Ubuntu'>
                <div>

                <div className='mx-auto md:max-w-6xl min-h-screen border border-black'>
                <Navbar/>
                <Outlet></Outlet>
                </div>
                </div>
                <Footer/>
        </div>
    );
};

export default Root;