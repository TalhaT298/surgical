import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import b1 from "../../../src/assets/images/banner/21.png";
import b2 from "../../../src/assets/images/banner/22.png";
import b3 from "../../../src/assets/images/banner/23.png";
import b4 from "../../../src/assets/images/banner/24.png";
import b5 from "../../../src/assets/images/banner/25.png";
import b6 from "../../../src/assets/images/banner/26.png";
import b7 from "../../../src/assets/images/banner/27.png";
import b8 from "../../../src/assets/images/banner/28.png";
import b9 from "../../../src/assets/images/banner/29.png";
import b10 from "../../../src/assets/images/banner/30.png";
import b11 from "../../../src/assets/images/banner/31.png";
import b12 from "../../../src/assets/images/banner/32.png";
import c1 from "../../../src/assets/images/banner/41.png";
import c2 from "../../../src/assets/images/banner/42.png";
import c3 from "../../../src/assets/images/banner/43.png";
import c4 from "../../../src/assets/images/banner/44.png";
import c5 from "../../../src/assets/images/banner/45.png";
import c6 from "../../../src/assets/images/banner/46.png";
import c7 from "../../../src/assets/images/banner/47.png";
import c8 from "../../../src/assets/images/banner/48.png";
const products = [
  { id: 1, image: b1, name: 'Ankel Brace', price: 11 },
  { id: 2, image: b2, name: 'Urin Bags', price: 13 },
  { id: 3, image: b3, name: 'LS Belt', price: 15 },
  { id: 4, image: b4, name: 'Heat and Cold Therapy', price: 10 },
  { id: 5, image: b5, name: 'X Ray Machine', price: 8 },
  { id: 6, image: b6, name: 'Spirometer', price: 22 },
  { id: 7, image: b7, name: 'Cotton Products', price: 9 },
  { id: 8, image: b8, name: 'Catheter', price: 17 },
  { id: 9, image: b9, name: 'Bandage', price: 9 },
  { id: 10, image: b10, name: 'Dialyzer', price: 18 },
  { id: 11, image: b11, name: 'Romsons R4 Urine', price: 6 },
  { id: 12, image: b12, name: 'Dental', price: 19 },
];
const ShopMore = () => {
  return (
    <div>
      <Link to="shopmore"></Link>
      {/* 1st phase done */}
      <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
        <div className="py-8 text-center">
          <h2 className="text-5xl font-bold text-cyan-700 mb-4">Shop More!</h2>
          <p className="text-2xl">Hurry Up!</p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body flex flex-col justify-center items-center">
                <h2 className="card-title text-center">{product.name}</h2>
                <p className="text-2xl text-cyan-700 text-center font-semibold">Price: ${product.price}</p>
                <div className="card-actions justify-center">
                  <button className="btn btn-wide bg-cyan-700 glass">
                    <FaShoppingCart size="2rem" className="mr-2" />
                    SHOP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 1st phase finish */}

      {/* 2nd phase start */}
      <div className="py-10" data-aos="fade-up">
      <div class="flex justify-center space-x-10 p-8">
        <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center" data-aos="fade-up">
                <img src={c1} className="rounded-full" alt="Surgical Mask"></img>
            </div>
            <p class="text-sm font-bold">Surgical Mask</p>
        </div>
        <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center" data-aos="fade-up">
                <img src={c2} className="rounded-full" alt="Safety Guard"></img>
            </div>
            <p class="text-sm font-bold">Safety Guard</p>
        </div>
        <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center" data-aos="fade-up">
                <img src={c3} className="rounded-full" alt="Pharmacy"></img>
            </div>
            <p class="text-sm font-bold">Pharmacy</p>
        </div>
        <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center" data-aos="fade-up">
                <img src={c4} className="rounded-full" alt="Nutritions"></img>
            </div>
            <p class="text-sm font-bold">Nutritions</p>
        </div>
        <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center" data-aos="fade-up">
                <img src={c5} className="rounded-full" alt="Medkits"></img>
            </div>
            <p class="text-sm font-bold">Medkits</p>
        </div>
        <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center" data-aos="fade-up">
                <img src={c6} className="rounded-full" alt="Medicine"></img>
            </div>
            <p class="text-sm font-bold">Medicine</p>
        </div>
        <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center" data-aos="fade-up">
                <img src={c7} className="rounded-full" alt="Hand Gloves"></img>
            </div>
            <p class="text-sm font-bold">Hand Gloves</p>
        </div>
        <div class="text-center">
            <div class="w-32 h-32 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center" data-aos="fade-up">
                <img src={c8} className="rounded-full" alt="Equipments"></img>
            </div>
            <p class="text-sm font-bold">Equipments</p>
        </div>
    </div>
      </div>
      {/* 2nd phase finish */}
    </div>
  );
};

export default ShopMore;
