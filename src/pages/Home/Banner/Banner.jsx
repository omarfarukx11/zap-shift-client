import React from "react";
import Banner1 from "../../../assets/banner1.png";
import Banner2 from "../../../assets/banner2.png";
import Banner3 from "../../../assets/banner3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowRight} from "react-icons/fa6";
const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} className="mx-10 ">
      <div className="relative">
        <img src={Banner1} />

        <div className=" flex justify-center items-center gap-5 absolute bottom-20 left-25 ">
          <div className="flex items-center justify-center">
            <button className="btn bg-primary text-2xl font-bold py-6 rounded-4xl px-10 ">
              Track Your Parcel
            </button>
            <span className="bg-black p-4 rounded-[50%] text-primary -rotate-45">
              <FaArrowRight className="font-bold text-2xl" />
            </span>
          </div>
          <button className="btn bg-primary-content text-xl py-6 text-gray-500">
            Be A Rider
          </button>
          
        </div>

      </div>
      <div>
        <img src={Banner2} />
         <div className=" flex justify-center items-center gap-5 absolute bottom-20 left-25 ">
          <div className="flex items-center justify-center">
            <button className="btn bg-primary text-2xl font-bold py-6 rounded-4xl px-10 ">
              Track Your Parcel
            </button>
            <span className="bg-black p-4 rounded-[50%] text-primary -rotate-45">
              <FaArrowRight className="font-bold text-2xl" />
            </span>
          </div>
          <button className="btn bg-primary-content text-xl py-6 text-gray-500">
            Be A Rider
          </button>
          
        </div>
      </div>
      <div>
        <img src={Banner3} />
         <div className=" flex justify-center items-center gap-5 absolute bottom-20 left-25 ">
          <div className="flex items-center justify-center">
            <button className="btn bg-primary text-2xl font-bold py-6 rounded-4xl px-10 ">
              Track Your Parcel
            </button>
            <span className="bg-black p-4 rounded-[50%] text-primary -rotate-45">
              <FaArrowRight className="font-bold text-2xl" />
            </span>
          </div>
          <button className="btn bg-primary-content text-xl py-6 text-gray-500">
            Be A Rider
          </button>
          
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
