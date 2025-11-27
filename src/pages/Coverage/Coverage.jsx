import React from "react";
import { IoSearch } from "react-icons/io5";

const Coverage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold ">We are available in 64 districts</h1>
       <div className="my-10">
         <label className="input rounded-4xl outline-none bg-base-200 border-none shadow-2xl  my-5">
          <IoSearch className="text-4xl text-gray-600" />
          <input type="email"  placeholder="Search here" required />
          <button className="py-2 px-4 bg-primary rounded-4xl ml-4 relative left-3 font-bold">
            Search
          </button>
        </label>
       </div>
       <h1 className="text-3xl font-bold">We deliver almost all over Bangladesh</h1>
    </div>
  );
};

export default Coverage;
