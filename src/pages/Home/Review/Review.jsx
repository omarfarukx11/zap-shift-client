import React from 'react';
import ReviewImg from '../../../assets/customer-top.png'
const Review = () => {
    return (
        <div className='flex flex-col items-center justify-center my-10 pt-10'>
            <img src={ReviewImg} alt="" />
            <h1 className='text-4xl font-bold py-5'>What our customers are sayings</h1>
            <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. <br /> Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>
    );
};

export default Review;