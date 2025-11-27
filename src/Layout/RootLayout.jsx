import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shered/Footer/Footer';
import Navbar from '../pages/Shered/Header/Navbar';

const RootLayout = () => {
    return (
        <div className='w-[1500px] mx-auto bg-base-200 px-10 pb-10'>
            <div className='py-8'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;