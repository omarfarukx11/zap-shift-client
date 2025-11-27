import React from "react";
import quote from "../../../assets/reviewQuote.png";


const ReviewCard = ({rev}) => {
  const {userName, review, profession ,user_photoURL} = rev
  //  "id": "5f47ac10b4f1c03e8c123456",
  //   "user_email": "john.doe@example.com",
  //   "userName": "John Doe",
  //   "delivery_email": "delivery1@example.com",
  //   "ratings": 4.5,
  //   "review": "Smooth delivery and polite staff.",
  //   "parcel_id": "5f47ac10b4f1c03e8c654321",
  //   "pick_up_email": "pickup1@example.com",
  //   "user_photoURL": "https://randomuser.me/api/portraits/men/10.jpg",
  //   "date": "2024-05-08T14:30:00.000Z"
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-2xl">
      <div className="card-body">
        
        <div className="text-info text-4xl font-serif mb-4"><img src={quote} alt="" /></div>

        {/* Testimonial Text */}
        <p className="text-sm text-base-content/70 leading-relaxed mb-6">
          {review}
        </p>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-secondary mb-4"></div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full bg-primary">
              <div className="flex items-center justify-center h-full text-primary-content font-bold">
                <img src={user_photoURL} alt="" />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div>
            <h3 className="font-bold text-xl text-base-content">{userName}</h3>
            <p className="text-sm text-base-content/60">
              {profession}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
