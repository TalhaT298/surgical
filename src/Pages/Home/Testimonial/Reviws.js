/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Reviws = ({ review }) => {
  const { name, img, review: userReview } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p className="pb-4">{userReview}</p>
        <div className="flex items-center justify-evenly">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div>
                <h5 className="text-lg">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviws;
