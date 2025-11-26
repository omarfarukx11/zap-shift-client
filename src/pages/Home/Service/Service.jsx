import React, { useEffect, useState } from "react";

const Service = () => {

    const [services , setServices] = useState([])

    useEffect(() => {
        fetch('/service.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            console.log(data)
        })
    }, [])


  return (
    <div className="bg-[#002C3E] text-white py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="text-gray-300 mt-2">
          Enjoy fast, reliable parcel delivery with real-time tracking and
          hassle-free services.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <div
            key={i}
            className={`p-6 bg-white text-black rounded-xl shadow hover:shadow-lg transition ${
              item.title === "Nationwide Delivery" ? "bg-[#C5F75C]" : "bg-white"
            }`}
          >
            <div className="flex justify-center mb-3">
              <span className="text-4xl">{/* icon */}</span>
            </div>
            <h3 className="font-semibold text-xl text-center">{item.title}</h3>
            <p className="text-gray-600 text-center mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
