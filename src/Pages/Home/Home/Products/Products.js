import React from "react";
// import man from '../../../assets/images/banner/2.png'
import man from "../2.png";
import background from "../3.png";
import second from "../Untitled design (100).png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="">
      <div className="text-center mt-8 mb-6">
        <h2 className="text-5xl font-bold text-cyan-700 mb-4">
          Regular Products
        </h2>
        <p className="text-center uppercase text-xl space-x-3 font-bold text-teal-600 mb-4">
          Simplified collection of products offered by a company or brand.
        </p>
      </div>
      <div className="" data-aos="fade-left">
        <section
          className="mt-8 mb-10 rounded-l-full rounded-r-full bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="hero">
            <div className="hero-content flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img
                  src={man}
                  className="w-full lg:w-3/4 md:block hidden shadow-2xl mx-auto"
                  alt="Description"
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 lg:px-8 text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Consumable & Disposablee
                </h1>
                <p className="py-4 text-sm md:text-base font-semibold text-white">
                  Disposable products are a particular, extreme case of
                  consumables, because their end-of-life is reached after a
                  single use. Consumables are products that consumers use
                  recurrently, i.e., items which "get used up" or discarded.
                </p>
                <Link to="">
                  <button
                    className="btn btn-outline text-cyan-700 bg-white mr-6"
                    data-aos-duration="1000"
                  >
                    Contact
                    <FaShoppingCart size="2rem" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="" data-aos="fade-right">
        <section
          className="mt-8 mb-10 rounded-l-full rounded-r-full bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="hero">
            <div className="hero-content flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img
                  src={second}
                  className="w-full lg:w-3/4 md:block hidden shadow-2xl mx-auto"
                  alt="Description"
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 lg:px-8 text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Medical Device & Equipment
                </h1>
                <p className="py-4 text-sm md:text-base font-semibold text-white">
                  Respiratory disease diagnostic at the first stage of infection
                  period. Easy to use, CE approved, Fast delivery. Sample for
                  free
                </p>
                <Link to="">
                  <button
                    className="btn btn-outline text-cyan-700 bg-white mr-6"
                    data-aos-duration="1000"
                  >
                    Contact
                    <FaShoppingCart size="2rem" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="" data-aos="fade-left">
        <section
          className="mt-8 mb-10 rounded-l-full rounded-r-full bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="hero">
            <div className="hero-content flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img
                  src={man}
                  className="w-full lg:w-3/4 -pl-4 md:block hidden shadow-2xl mx-auto"
                  alt="Description"
                />
              </div>
              <div className="w-full lg:w-1/2 px-4 lg:px-8 text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Physiotherapy & Rehabilitation
                </h1>
                <p className="py-4 text-sm md:text-base font-semibold text-white">
                  Physiotherapy rehabilitation aims to optimise patient function
                  and well-being, to help integrate that patient back into their
                  chosen lifestyle activities whether at home, work or leisure
                </p>
                <Link to="">
                  <button
                    className="btn btn-outline text-cyan-700 bg-white mr-6"
                    data-aos-duration="1000"
                  >
                    Contact
                    <FaShoppingCart size="2rem" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
