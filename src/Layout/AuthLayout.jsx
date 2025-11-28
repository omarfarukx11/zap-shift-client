import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../Components/Logo';
import authImg from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className='w-[1500px] mx-auto bg-base-100'>
            <div className='py-10'>
                <Logo></Logo>
            </div>

            <div className='flex justify-between h-[600px] border-2'>
                <div className='flex-1 py-10'>
                <Outlet></Outlet>
                </div>
            <div className='bg-[#FAFDF0] flex-1 '>
                <img src={authImg} className='mx-auto' alt="" />
            </div>
            </div>
        </div>
    );
};

export default AuthLayout;