import React from "react";
// import man from '../../../assets/images/banner/2.png'
import man from "../2.png";
import background from "../3.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    
    <div>
        <div className="text-center mt-8 mb-6">
          <h2 className="text-5xl font-bold text-cyan-900 mb-4">
          Regular Products
          </h2>
        </div>
        <section
      className="mt-8 mb-10"
      style={{
        background: `url(${background})`,
      }}
    >
        
      <div className="hero">
      
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img
              src={man}
              className="lg:w-1/2 md:block hidden  rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white">
              Consumable & Disposable
            </h1>
            <p className="py-6 font-semibold text-white">
              Disposable products are a particular, extreme case of consumables,
              because their end-of-life is reached after a single use.
              Consumables are products that consumers use recurrently, i.e.,
              items which "get used up" or discarded.
            </p>
            <Link to=''><button className="btn btn-outline text-cyan-900 mr-6" data-aos-duration="1000">Contact<FaShoppingCart size='2rem'/></button></Link>
            
          </div>
        </div>
      </div>
    </section>
    <section
      className="mt-8 mb-10"
      style={{
        background: `url(${background})`,
      }}
    >
        
      <div className="hero">
      
        <div className="hero-content flex-col lg:flex-row">
          
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white">
              Consumable & Disposable
            </h1>
            <p className="py-6 font-semibold text-white">
              Disposable products are a particular, extreme case of consumables,
              because their end-of-life is reached after a single use.
              Consumables are products that consumers use recurrently, i.e.,
              items which "get used up" or discarded.
            </p>
            <Link to=''><button className="btn btn-outline text-cyan-900 mr-6" data-aos-duration="1000">Contact<FaShoppingCart size='2rem'/></button></Link>
            
          </div>
          <div className="w-1/2 ml-60">
            <img
              src={man}
              className="lg:w-1/2 md:block hidden  rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      className="mt-8 mb-10"
      style={{
        background: `url(${background})`,
      }}
    >
        
      <div className="hero">
      
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img
              src={man}
              className="lg:w-1/2 md:block hidden  rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white">
              Consumable & Disposable
            </h1>
            <p className="py-6 font-semibold text-white">
              Disposable products are a particular, extreme case of consumables,
              because their end-of-life is reached after a single use.
              Consumables are products that consumers use recurrently, i.e.,
              items which "get used up" or discarded.
            </p>
            <Link to=''><button className="btn btn-outline text-cyan-900 mr-6" data-aos-duration="1000">Contact<FaShoppingCart size='2rem'/></button></Link>
            
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Products;
