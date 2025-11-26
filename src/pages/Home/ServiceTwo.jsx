import React, { useEffect, useState } from "react";



const ServiceTwo = () => {

    const [service , setService] =useState([])

    useEffect(() => {
        fetch('/service2.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
  return (

      <div className="space-y-6 w-[1281px] mx-auto mb-10 p-6">
        {service.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-6 rounded-xl shadow"
          >
            <div className="flex-shrink-0">
              <img
                src={service.image}
                className="w-[150px] h-[150px] object-contain"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 border-l-2 border-dashed border-secondary pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[#03464D] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

  );
};

export default ServiceTwo;
