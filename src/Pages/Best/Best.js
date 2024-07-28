import React from "react";
import { FaAudible } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaRetweet } from "react-icons/fa";

const Best = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center mt-8 mb-6">
        <h2 className="text-5xl font-bold text-cyan-700 mb-4 ">
          Services
        </h2>
        <p className="text-center pb-8 uppercase text-xl space-x-3 font-bold text-teal-600 mb-4">
        Expert surgical services with advanced techniques and personalized care!
        </p>
      </div>
      <div className="grid gap-5 p-5 text-slate-50 sm:grid-cols-2 lg:grid-cols-4 px-16">
      <div className="card bg-cyan-700 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            <FaAudible size="3rem" />
          </h2>
          <p className="text-2xl font-semibold">Best Services</p>
          <p>A service is something that the public needs</p>
        </div>
      </div>

      <div className="card bg-cyan-700 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            <FaShippingFast size="3rem" />
          </h2>
          <p className="text-2xl font-semibold">Free Shipping</p>
          <p>You don't need additional shipping charge during the checkout process</p>
        </div>
      </div>

      <div className="card bg-cyan-700 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            <IoIosPeople size="3rem" />
          </h2>
          <p className="text-2xl font-semibold">Million Customers</p>
          <p>We provide high-quality products</p>
        </div>
      </div>

      <div className="card bg-cyan-700 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            <FaRetweet size="3rem" />
          </h2>
          <p className="text-2xl font-semibold">30 Days Free-Return</p>
          <p>You have the right to return it within 30 days and get all of your money back if it's faulty</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Best;
