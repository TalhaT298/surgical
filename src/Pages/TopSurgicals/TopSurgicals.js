import React from "react";

const TopSurgicals = () => {
  return (
    <div>
        <div>
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold text-cyan-900 mb-4">
          Your surgical is here
          </h2>
        </div>
        </div>
        <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/HFsf1fT/Surgical-Savvy.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-ghost">
            ❮
          </a>
          <a href="#slide2" className="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/m45sTrK/Surgical-Savvy-1.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-ghost">
            ❮
          </a>
          <a href="#slide3" className="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/tY2Bt86/Surgical-Savvy-3.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-ghost">
            ❮
          </a>
          <a href="#slide4" className="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/HT7TVv7/Surgical-Savvy-2.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-ghost">
            ❮
          </a>
          <a href="#slide1" className="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopSurgicals;
