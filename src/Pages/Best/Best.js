import React from "react";
import { FaAudible } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaRetweet } from "react-icons/fa";

const Best = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center py-6 ">
        <p className="text-4xl font-bold text-cyan-700 pb-4">Get Know About Us</p>
      </div>
      <div className="grid mr-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-slate-50">
        <div className="card w-96 bg-cyan-700 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center">
              <FaAudible size="3rem" />
            </h2>
            <p className="text-2xl font-semibold">Best Services</p>
            <p>A service is something that the public needs</p>
          </div>
        </div>

        <div className="card w-96 bg-cyan-700 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center">
              <FaShippingFast size="3rem" />
            </h2>
            <p className="text-2xl font-semibold">Free Shipping</p>
            <p>
              You don't need additional shipping charge during the checkout
              process
            </p>
          </div>
        </div>

        <div className="card w-96 bg-cyan-700 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center">
              <IoIosPeople size="3rem" />
            </h2>
            <p className="text-2xl font-semibold">Million Customers</p>
            <p>We are provide high-Quality products</p>
          </div>
        </div>

        <div className="card w-96 bg-cyan-700 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center">
              <FaRetweet size="3rem" />
            </h2>
            <p className="text-2xl font-semibold">30 Days Free-Return</p>
            <p>
              you have the right to return it within 30 days and get all of your
              money back if it's faulty
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
