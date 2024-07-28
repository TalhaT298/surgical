import React from "react";
import a1 from "../../../assets/images/banner/7.png";
import { IoIosBody } from "react-icons/io";
import { CiMedicalMask } from "react-icons/ci";
import { FaCapsules } from "react-icons/fa";
const Inovative = () => {
  return (
    <div className="">
      <div className="text-center mt-8 mb-6 py-6">
        <h2 className="text-5xl font-bold text-cyan-700 mb-4">
          Innovative Quality & Feature
        </h2>
        <p className="text-center uppercase text-xl space-x-3 font-bold text-teal-600 mb-4">
          Discover our innovative surgical solutions with cutting-edge quality
          and advanced features
        </p>
      </div>
      {/* <div>
      <img className='' src="https://i.ibb.co/W69kJJM/Screenshot-36.png" alt="" />
      </div> */}
      {/* new thing */}
      <div class="flex">
        {/* left side */}
        <div className="w-2/5">
          <div className= "p-8">
            <div className="max-w-4xl mx-auto">
              <div class="grid grid-rows-1 md:grid-rows-3 gap-8">
                <div className=" p-6 rounded-lg shadow-md flex flex-row items-center justify-center">
                  <div className="flex justify-center mr-4">
                  <IoIosBody className="w-20 h-20 text-teal-600"/>
                  </div>
                  <div className="text-start">
                    <h2 className="text-xl font-bold mb-2">Bodysuit Gown</h2>
                    <p className="text-gray-700">
                    Stay protected and comfortable with our high-quality bodysuit gown.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center justify-center">
                  <div className="flex justify-center mr-4">
                  <CiMedicalMask className="w-20 h-20 text-teal-600"/>
                  </div>
                  <div className="text-start">
                    <h2 className="text-xl font-bold mb-2">3 Play Mask</h2>
                    <p className="text-gray-700">
                    Enjoy superior protection and breathability with our 3-ply mask
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center justify-center">
                  <div className="flex justify-center mr-4">
                  <FaCapsules className="w-20 h-20 text-teal-600"/>
                  </div>
                  <div className="text-start">
                    <h2 className="text-xl font-bold mb-2">Surgical Cap</h2>
                    <p className="text-gray-700">
                    Stay secure and comfortable with our high-quality, breathable surgical cap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 bg-green-500">Middle Div</div>
        {/* right side */}
        <div className="w-2/5 bg-red-500">
          <div className="bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
              <div class="grid grid-rows-1 md:grid-rows-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center justify-center">
                  
                  <div className="text-start">
                    <h2 className="text-xl font-bold mb-2">Goggles</h2>
                    <p className="text-gray-700">
                    See clearly and comfortably with our high-performance, anti-fog goggles
                    </p>
                  </div>
                  <div className="flex justify-center mr-4">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Bodysuit Gown Icon"
                      className="w-24 h-24"
                    ></img>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center justify-center">
                  
                  <div className="text-start">
                    <h2 className="text-xl font-bold mb-2">Gloves</h2>
                    <p className="text-gray-700">
                    Experience ultimate comfort and grip with our advanced, breathable gloves
                    </p>
                  </div>
                  <div className="flex justify-center mr-4">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Bodysuit Gown Icon"
                      className="w-24 h-24"
                    ></img>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-row items-center justify-center">
                  
                  <div className="text-start">
                    <h2 className="text-xl font-bold mb-2">Full Bodysuit</h2>
                    <p className="text-gray-700">
                    Experience ultimate protection and comfort with our premium full bodysuit.
                    </p>
                  </div>
                  <div className="flex justify-center mr-4">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Bodysuit Gown Icon"
                      className="w-24 h-24"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inovative;
