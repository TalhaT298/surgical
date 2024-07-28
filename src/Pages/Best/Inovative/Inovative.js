import React from "react";
import doc from "../../../assets/images/banner/doctor.png";
import { IoIosBody } from "react-icons/io";
import { CiMedicalMask } from "react-icons/ci";
import { FaCapsules } from "react-icons/fa";
import { GiSteampunkGoggles } from "react-icons/gi";
import { GiGloves } from "react-icons/gi";
import { GiTrenchBodyArmor } from "react-icons/gi";
const Inovative = () => {
  return (
    <div className="">
  <div className="text-center mt-8 mb-6 py-6">
    <h2 className="text-3xl md:text-5xl font-bold text-cyan-700 mb-4">
      Innovative Quality & Feature
    </h2>
    <p className="text-center uppercase text-lg md:text-xl space-x-3 font-bold text-teal-600 mb-4">
      Discover our innovative surgical solutions with cutting-edge quality and advanced features
    </p>
  </div>
  {/* <div>
  <img className='' src="https://i.ibb.co/W69kJJM/Screenshot-36.png" alt="" />
  </div> */}
  {/* new thing */}
  <div className="flex flex-col lg:flex-row">
    {/* left side */}
    <div className="w-full lg:w-2/5">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-rows-3 gap-8">
            <div className="p-6 rounded-lg flex flex-col md:flex-row items-center justify-center">
              <div className="flex justify-center mb-4 md:mb-0 md:mr-4">
                <IoIosBody className="w-16 md:w-20 h-16 md:h-20 text-teal-600"/>
              </div>
              <div className="text-center md:text-start">
                <h2 className="text-lg md:text-xl font-bold mb-2">Bodysuit Gown</h2>
                <p className="text-gray-700">
                  Stay protected and comfortable with our high-quality bodysuit gown.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex flex-col md:flex-row items-center justify-center">
              <div className="flex justify-center mb-4 md:mb-0 md:mr-4">
                <CiMedicalMask className="w-16 md:w-20 h-16 md:h-20 text-teal-600"/>
              </div>
              <div className="text-center md:text-start">
                <h2 className="text-lg md:text-xl font-bold mb-2">3 Play Mask</h2>
                <p className="text-gray-700">
                  Enjoy superior protection and breathability with our 3-ply mask
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg flex flex-col md:flex-row items-center justify-center">
              <div className="flex justify-center mb-4 md:mb-0 md:mr-4">
                <FaCapsules className="w-16 md:w-20 h-16 md:h-20 text-teal-600"/>
              </div>
              <div className="text-center md:text-start">
                <h2 className="text-lg md:text-xl font-bold mb-2">Surgical Cap</h2>
                <p className="text-gray-700">
                  Stay secure and comfortable with our high-quality, breathable surgical cap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* middle image */}
    <div className="w-full lg:w-1/5 flex justify-center lg:justify-start">
      <img src={doc} alt="" className="max-w-full h-auto"/>
    </div>

    {/* right side */}
    <div className="w-full lg:w-2/5">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-rows-3 gap-8">
            <div className="p-6 rounded-lg flex flex-col md:flex-row items-center justify-center">
              <div className="text-center md:text-start">
                <h2 className="text-lg md:text-xl font-bold mb-2">Goggles</h2>
                <p className="text-gray-700">
                  See clearly and comfortably with our high-performance, anti-fog goggles
                </p>
              </div>
              <div className="flex justify-center mb-4 md:mb-0 md:ml-4">
                <GiSteampunkGoggles className="w-16 md:w-20 h-16 md:h-20 text-teal-600"/>
              </div>
            </div>

            <div className="p-6 rounded-lg flex flex-col md:flex-row items-center justify-center">
              <div className="text-center md:text-start">
                <h2 className="text-lg md:text-xl font-bold mb-2">Gloves</h2>
                <p className="text-gray-700">
                  Experience ultimate comfort and grip with our advanced, breathable gloves
                </p>
              </div>
              <div className="flex justify-center mb-4 md:mb-0 md:ml-4">
                <GiGloves className="w-16 md:w-20 h-16 md:h-20 text-teal-600"/>
              </div>
            </div>

            <div className="p-6 rounded-lg flex flex-col md:flex-row items-center justify-center">
              <div className="text-center md:text-start">
                <h2 className="text-lg md:text-xl font-bold mb-2">Full Bodysuit</h2>
                <p className="text-gray-700">
                  Experience ultimate protection and comfort with our premium full bodysuit.
                </p>
              </div>
              <div className="flex justify-center mb-4 md:mb-0 md:ml-4">
                <GiTrenchBodyArmor className="w-16 md:w-20 h-16 md:h-20 text-teal-600"/>
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
