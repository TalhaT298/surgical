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
    <div className="flex justify-center items-center">
  <div className="py-10 w-full max-w-7xl mx-auto">
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
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {glasses.map((glass) => (
        <GlassCard key={glass._id} glass={glass}></GlassCard>
      ))}
    </div>
    <div className="text-center pt-8 pb-8 text-white">
      <Link to="/shopmore">
        <button className="btn bg-cyan-700 hover:bg-teal-600 btn-wide glass">
          <FaShoppingCart className="text-white" size="2rem" />
          <span className="text-white">SHOP MORE</span>
        </button>
      </Link>
    </div>
  </div>
</div>

  );
};

export default Glasses;
