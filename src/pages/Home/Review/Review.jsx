import React, { useEffect, useState } from "react";
import ReviewImg from "../../../assets/customer-top.png";
import ReviewCard from "./ReviewCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import 'swiper/css';

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="mb-20 ">
      <div className="flex flex-col items-center justify-center my-10 pt-10">
        <img src={ReviewImg} alt="" />
        <h1 className="text-4xl font-bold py-5">
          What our customers are sayings
        </h1>
        <p className="pb-5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. <br /> Achieve proper alignment, reduce pain, and strengthen your
          body with ease!
        </p>
      </div>
          <Swiper
          loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            
            }}
            autoplay={{
                delay:3000,
                disableOnInteraction:false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination , Autoplay]}
            className="mySwiper"
          >
            {review.map((rev) => (
              <SwiperSlide key={rev.id}>
                <ReviewCard rev={rev}></ReviewCard>
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  );
};

export default Review;
