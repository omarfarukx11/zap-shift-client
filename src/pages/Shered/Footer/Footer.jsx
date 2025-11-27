import React from "react";
import Logo from "../../../assets/logo.png";
import { NavLink } from "react-router";
import Facebook from "../../../assets/Group 10036.png"
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
const Footer = () => {
  const links = (
    <>
      <li>
        <NavLink>Services</NavLink>
      </li>
      <li>
        <NavLink to={'/coverage'}>Coverage</NavLink>
      </li>
      <li>
        <NavLink>About Us</NavLink>
      </li>
      <li>
        <NavLink>Pricing</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </>
  );

  return (
    <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10 rounded-2xl">
      <aside>
        <div className="flex items-center">
          <img src={Logo} alt="" />
          <p className="text-[32px] relative top-[6px] right-[16px] font-extrabold ">
            ZapShift
          </p>
        </div>

        <p className="text-base text-gray-400 ">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </aside>

      <div className="border-y-2 border-dashed py-5 border-[#03464D] w-full">
        <ul className="flex gap-5 text-base text-gray-400 ">{links}</ul>
      </div>
      <div className="flex items-center justify-center gap-5">
        <a className="p-3 rounded-[50%] text-2xl bg-[#0575B3] text-white">
          <FaLinkedinIn />
        </a>

        <a className="p-3 rounded-[50%] text-2xl bg-white text-black border">
          <BsTwitterX />
        </a>

        <a className="p-2 rounded-[50%] bg-blue-500">
         <BiLogoFacebook className="text-3xl" />
        </a>
        <a className="p-3 rounded-[50%] text-2xl bg-[#FF0000] text-white">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
