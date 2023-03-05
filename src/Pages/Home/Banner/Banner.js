import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import chair from '../../../assets/images/banner/1.png'

const Banner = () => {
    return (
        <div className="hero  py-12">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl text-sky-800 font-bold">SurgicalSavvy</h1>
      <p className="py-6 font-semibold">We are a customer-driven company that sells the highest quality medical tools, supplies and German-manufactured surgical instruments at cost-effective pricing. Save up to 36% off list prices on ALL your medical surgical online orders!</p>
      <Link to=''><button className="btn btn-outline text-cyan-900 mr-6" data-aos-duration="1000">Contact<FaShoppingCart size='2rem'/></button></Link>
      <Link to=''><button className="btn btn-outline text-green-500" data-aos-duration="1000">Contact<FaShoppingCart size='2rem'/></button></Link>
      
    </div>
  </div>
</div>
    );
};

export default Banner;