import React from 'react';
import Banner from '../Banner/Banner';
import HowWork from '../HowIt\'sWork/HowWork';
import Service from '../Service/Service';
import Brands from '../Brands/Brands';
import ServiceTwo from '../Service/ServiceTwo';
import Divider from '../../../Components/Divider';
import SecBanner from '../SecBanner/SecBanner';
import Review from '../Review/Review';
import { Fa0 } from 'react-icons/fa6';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-[1281px] mx-auto my-10 p-6'>
            <h1 className='text-4xl font-extrabold py-4 text-secondary'>How It's Work</h1>
            <HowWork></HowWork>
            </div>
            <Service></Service>
            <Brands></Brands>
            <Divider></Divider>
            <ServiceTwo></ServiceTwo>
            <Divider></Divider>
            <SecBanner></SecBanner>
            <Review></Review>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;