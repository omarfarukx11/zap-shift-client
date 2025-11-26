import React, { useEffect, useState } from "react";
import Car from '../../../assets/fi_9618754.png'

const HowWork = () => {
    const [topServices , setTopService] =useState([])

    useEffect(() => {
        fetch('/how.json')
        .then(res => res.json())
        .then(data => {
            setTopService(data)
        })
    } , [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">        
      {topServices.map((item, i) => (
        <div
          key={i}
          className="p-5 flex bg-white shadow rounded-xl flex-col items-start gap-3 border border-gray-100 hover:shadow-md transition"
        >
          <div className="text-2xl" ><img src={Car} alt="" /></div>
          <div>
            <h3 className="font-bold text-xl py-5">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}


    </div>
  );
};

export default HowWork;
