import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlassCard from "./GlassCard";
import { FaShoppingCart } from "react-icons/fa";

const Glasses = () => {
  const [glasses, setglasses] = useState([]);
  useEffect(() => {
    fetch("https://surgical-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setglasses(data));
  }, []);
  return (
    <div className="py-10 pl-8">
      <div className="text-center mb-6">
          <h2 className="text-5xl font-bold text-cyan-700 mb-4">
          Buy our products
          </h2>
        </div>
        <div className="text-center mb-6 pb-10">
          <h4 className="text-xl uppercase space-x-3 font-bold text-teal-600 mb-4">
          Buy top-quality surgical products at great prices on our secure site with fast shipping and expert support!
          </h4>
        </div>
      {/* <div className="flex justify-between">
        <figure>
          <img
            className="w-24 lg:w-48"
            src="https://i.ibb.co/D7Rwv3C/Untitled-design-8.png"
            alt=""
          />
        </figure>
        <div>
          <h4 className="lg:text-5xl md:text-2xl sm:text-3xl text-cyan-700 font-bold pt-10 pr-14">
            Buy our products
          </h4>
          
        </div>
      </div> */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {glasses.map((glass) => (
          <GlassCard key={glass._id} glass={glass}></GlassCard>
        ))}
      </div>
      <div className="text-center pt-6 pb-6">
        <Link to="/shopmore">
          <button className="btn btn-outline bg-cyan-700 text-white">
            <FaShoppingCart className="" size="2rem" />
            SHOP MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Glasses;
