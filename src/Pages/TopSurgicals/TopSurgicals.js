import React from "react";
import accuracy from "../../../src/assets/images/banner/accuracy.png";
import Bacteria from "../../../src/assets/images/banner/Bacteria.png";
import Protection from "../../../src/assets/images/banner/Protection.png";

const TopSurgicals = () => {
  return (
    <div>
      <div>
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold text-cyan-700 mb-4">
            What Makes The Difference?
          </h2>
        </div>
        <div className="text-center mb-6">
          <h4 className="text-xl space-x-3 font-bold text-teal-600 mb-4">
            HIGH PERFORMANCE AND SAFETY
          </h4>
        </div>
      </div>
      {/* <div className="carousel w-full">
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
      </div> */}

      <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 text-gray-800 text-center">
          <div class="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
            <div class="mb-12 md:mb-0">
              <div class="flex justify-center mb-6">
                <img
                  src={accuracy}
                  className="rounded-full shadow-lg w-48"
                />
              </div>
              <h5 class="text-lg font-bold mb-4">Accuracy</h5>
              <p class="mb-4">
                We measures the proximity of a result to the true value.
              </p>
            </div>
            <div class="mb-12 md:mb-0">
              <div class="flex justify-center mb-6">
                <img
                  src={Protection}
                  class="rounded-full shadow-lg w-48"
                />
              </div>
              <h5 class="text-lg font-bold mb-4">Complete Protection</h5>
              <p class="mb-4">
                Measures that aim to safeguard against threats and risks.
              </p>
            </div>
            <div class="mb-0">
              <div class="flex justify-center mb-6">
                <img
                  src={Bacteria}
                  class="rounded-full shadow-lg w-48"
                />
              </div>
              <h5 class="text-lg font-bold mb-4">Prevents Bacteria</h5>

              <p class="mb-4">
                Preventing bacteria involves implementing measures to inhibit
                their growth, reproduction, and spread.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopSurgicals;
