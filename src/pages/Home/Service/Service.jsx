import React, { useEffect, useState } from "react";
import ServiceImg from "../../../assets/service.png";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="bg-secondary text-white py-16 rounded-2xl mb-10 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold pt-5">Our Services</h2>
        <p className="text-gray-300 mt-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((item, i) => (
          <div
            key={i}
            className={`p-6 bg-white hover:bg-primary text-black rounded-xl shadow hover:shadow-lg transition ${
              item.title === "Nationwide Delivery" ? "bg-[#C5F75C]" : "bg-white"
            }`}
          >
            <div className="flex justify-center mb-3">
              <span className="text-4xl p-4 rounded-[50%] shadow-2xl">
                <img src={ServiceImg} alt="" />
              </span>
            </div>
            <h3 className="font-bold text-xl text-center py-3">{item.title}</h3>
            <p className="text-gray-600 text-center mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
