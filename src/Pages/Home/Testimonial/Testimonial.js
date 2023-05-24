import React from "react";
import Reviws from "./Reviws";
import people1 from "../Home/4.png";
import people2 from "../Home/5.png";
import people3 from "../Home/6.png";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Tanzil Tarique",
      img: people1,
      review:
        'I recently purchased a product from this company and I must say, I am thoroughly impressed with the quality and service I received. The product exceeded my expectations and the customer service team was extremely helpful and friendly."',
    },
    {
      _id: 2,
      name: "Robert John",
      img: people2,
      review:
        '"I have been a loyal customer of this business for years and they never disappoint. Their products are of the highest quality and their customer service is unparalleled. I highly recommend them to anyone looking for a great product and exceptional service."',
    },
    {
      _id: 3,
      name: "Arif Islam",
      img: people3,
      review:
        '"I was hesitant to purchase from this company at first, but I am so glad I did. The product was exactly what I was looking for and the customer service team went above and beyond to ensure my satisfaction. I will definitely be a repeat customer!"',
    },
  ];

  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-cyan-700 font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Customers Says</h2>
        </div>
        <figure>
          <img
            className="w-24 lg:w-48"
            src="https://i.ibb.co/hMdx4fg/Untitled-design-9.png"
            alt=""
          />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Reviws key={review._id} review={review}></Reviws>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
