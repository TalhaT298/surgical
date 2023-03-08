import React from "react";
// import man from '../../../assets/images/banner/2.png'
import man from "../2.png";
import background from "../3.png";
import second from "../Untitled design (100).png";
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
        <div className="" data-aos="fade-left">
        <section
      className="mt-8 mb-10 rounded-l-full rounded-r-full"
      style={{
        background: `url(${background})`,
      }}
       >
        
      <div className="hero">
      
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img
              src={man}
              className="lg:w-1/2 md:block hidden pr-20 rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-white">
              Consumable & Disposable
            </h1>
            <p className="py-8 font-semibold text-white">
              Disposable products are a particular, extreme case of consumables,
              because their end-of-life is reached after a single use.
              Consumables are products that consumers use recurrently, i.e.,
              items which "get used up" or discarded.
            </p>
            <Link to=''><button className="btn btn-outline text-cyan-900 bg-white mr-6" data-aos-duration="1000">Contact<FaShoppingCart size='2rem'/></button></Link>
            
          </div>
        </div>
      </div>
    </section>
        </div>
    {/* <section
      className="mt-8 mb-10 w-full rounded-r-full rounded-l-full"
      style={{
        background: `url(${background})`,
      }}
    >
        
      <div className="hero">
      
        <div className="hero-content flex-col lg:flex-row">
          
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-white">
            Medical Device & Equipment
            </h1>
            <p className="py-6 font-semibold text-white">
            Respiratory disease diagnostic at the first stage of infection period. Easy to use, CE approved, Fast delivery.Sample for free
            </p>
            <Link to=''><button className="btn btn-outline text-cyan-900 bg-white mr-6" data-aos-duration="1000">Contact<FaShoppingCart size='2rem'/></button></Link>
            
          </div>
          <div className="w-1/2 ml-60 w-full">
            <img
              src={second}
              className="lg:w-1/2 md:block hidden  rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section> */}

    <div className="" data-aos="fade-right" >
    <section
      className="mt-8 mb-10 rounded-l-full rounded-r-full"
      style={{
        background: `url(${background})`,
      }}
    >
        
      <div className="hero">
      
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img
              src={second}
              className="lg:w-1/2 md:block hidden pr-20  rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-white">
            Medical Device & Equipment
            </h1>
            <p className="py-6 font-semibold text-white">
            Respiratory disease diagnostic at the first stage of infection period. Easy to use, CE approved, Fast delivery.Sample for free
            </p>
            <Link to=''><button className="btn btn-outline text-cyan-900 bg-white mr-6" data-aos-duration="1000">Contact<FaShoppingCart size='2rem'/></button></Link>
            
          </div>
        </div>
      </div>
    </section>
    </div>

    <div className="" data-aos="fade-left">
    <section
      className="mt-8 mb-10 rounded-l-full rounded-r-full"
      style={{
        background: `url(${background})`,
      }}
    >
        
      <div className="hero">
      
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img
              src={man}
              className="lg:w-1/2 -pl-12 md:block hidden pr-20  rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-white">
                Physiotherapy & Rehabilitation
            </h1>
            <p className="py-6 font-semibold text-white">
            Physiotherapy rehabilitation aims to optimise patient function and well-being, to help integrate that patient back into their chosen lifestyle activities whether at home, work or leisure
            </p>
            <Link to=''><button className="btn btn-outline text-cyan-900 bg-white mr-6" data-aos-duration="1000">Contact<FaShoppingCart size='2rem'/></button></Link>
            
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};

export default Products;
