import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineReadMore } from "react-icons/md";
import chair from "../../../assets/images/banner/1.png";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="hero  pt-12 pb-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl text-cyan-700 font-bold ">Quality First</h1>
          <p className="py-10 font-semibold">
            We are a customer-driven company that sells the highest quality
            medical tools, supplies and German-manufactured surgical instruments
            at cost-effective pricing. Save up to{" "}
            <TypeAnimation
              sequence={[
                "36%",
                1000,
                "-",
                1000,
                // 'Guinea Pigs',
                // 1000,
                // 'Chinchillas',
                // 1000,
              ]}
              repeat={Infinity}
            />
            off list prices on ALL your medical surgical online orders!
          </p>
          <Link to="">
            <button
              className="btn btn-outline text-teal-600 mr-6"
              data-aos-duration="1000"
            >
              Contact
              <FaShoppingCart size="2rem" />
            </button>
          </Link>
          <Link to="">
            <button
              className="btn btn-outline text-cyan-700"
              data-aos-duration="1000"
            >
              See More
              <MdOutlineReadMore size="2rem" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
