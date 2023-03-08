import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const GlassCard = ({ glass }) => {
  const { _id, img, price, title } = glass;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-cyan-900 justify-center">{title}</h2>
        <p className="text-2xl text-cyan-900 font-semibold">Price:${price}</p>
        <div className="card-actions justify-center">
          <Link to={`/checkout/${_id}`}>
            <button className="btn bg-cyan-900 btn-wide glass">
              <FaShoppingCart size="2rem" />
              SHOP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
