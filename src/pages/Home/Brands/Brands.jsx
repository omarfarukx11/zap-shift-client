import React from "react";
import Marquee from "react-fast-marquee";

import moonstar from "../../../assets/moonstar.png";
import StartPeople from "../../../assets/start_people.png";
import Star from "../../../assets/star.png";
import Casio from "../../../assets/casio.png";
import Amazon from "../../../assets/amazon.png";
import Randstad from "../../../assets/randstad.png";
import Divider from "../../../Components/Divider";

const Brands = () => {
  const image = [moonstar, StartPeople, Star, Casio, Amazon, Randstad];

  return (
    <div className="w-[1281px] mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold text-secondary text-center py-5">
        We've helped thousands of sales teams
      </h1>

      <Marquee 
        speed={100}
        gradient={false}
      >
        <div className="flex items-center justify-center py-5 gap-30 ">
          {image.map((img, i) => (
            <img key={i} src={img} className="first:ml-15 last:mr-15" alt="brand" />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
