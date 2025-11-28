import React from "react";
import LogoImg from "../assets/logo.png"

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={LogoImg} alt="" />
      <p className="text-[32px] relative top-[6px] right-[16px] font-extrabold ">
        ZapShift
      </p>
    </div>
  );
};

export default Logo;
