import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowIt\'sWork/HowWork';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-[1281px] mx-auto my-10 p-6'>
            <h1 className='text-4xl font-extrabold py-4'>How It's Work</h1>
            <HowWork></HowWork>
            </div>
            <Service></Service>
        </div>
    );
};

export default Home;