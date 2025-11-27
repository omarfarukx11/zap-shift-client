import React from "react";
import Book from "../../../assets/location-merchant.png";
import bg from "../../../assets/be-a-merchant-bg.png";

const SecBanner = () => {
  return (
    <div className="flex justify-center items-center w-[1281px] mx-auto p-6 rounded-2xl">
      <div className="bg-secondary rounded-2xl text-white flex justify-between items-center p-20  relative">
        <div className="w-[60%]">
          <h1 className="text-4xl font-bold ">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h1>
          <p className="my-5 text-gray-300">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex gap-5">
            <button className="btn bg-primary rounded-4xl border-none p-8 text-xl font-bold">
              Become a Merchant
            </button>
            <button className="btn rounded-4xl border-primary bg-secondary text-primary p-8 text-xl font-bold">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div className="w-[40%]">
          <img src={Book} alt="" />
        </div>

         <div className="absolute top-0">
        <img src={bg} alt="" />
      </div>
      </div>

     
    </div>
  );
};

export default SecBanner;
