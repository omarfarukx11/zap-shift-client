import React from "react";
import { NavLink } from "react-router";
import Logo from "../../../assets/logo.png"
import { FaArrowRight} from "react-icons/fa6";

const Navbar = () => {

    const links = <>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink>Coverage</NavLink></li>
        <li><NavLink>About Us</NavLink></li>
        <li><NavLink>Pricing</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>

  return (

        <div className="navbar bg-base-100 h-[96px] shadow-sm p-5 rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {
            links
           }
          
          </ul>
        </div>
        <div className="flex items-center" >
            <img src={Logo} alt="" />
            <p className="text-[32px] relative top-[6px] right-[16px] font-extrabold ">ZapShift</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end space-x-5 ">
        <button className="btn bg-primary-content text-xl py-6 text-gray-500" >Sign In</button>
        <div className="flex items-center justify-center">
          <button className="btn bg-primary text-xl font-bold py-6 " >Be a rider</button>
         <span className="bg-black p-4 rounded-[50%] text-primary -rotate-45"><FaArrowRight /></span>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
