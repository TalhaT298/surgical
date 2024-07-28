import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaModx } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { ImManWoman } from "react-icons/im";
import { GiBuyCard } from "react-icons/gi";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

import logo from "../../../assets/Untitled design (82).png";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const menuItems = (
    <>
      <li className="font-semibold text-orange-200">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold text-orange-200">
        <Link to="/features">Features</Link>
      </li>
      <li className="font-semibold text-orange-200">
        <Link to="/">Big Deal</Link>
      </li>
      {user?.email ? (
        <>
          <li className="font-semibold text-orange-200">
            <Link to="/orders">Orders</Link>
          </li>
        </>
      ) : (
        <li className="font-semibold text-orange-200">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">
                <FaHome size="2rem" color="1b8a82" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/shopmore">
                <GiBuyCard size="2rem" color="1b8a82" />
                Quick Buy
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaModx size="2rem" color="1b8a82" />
                About
              </Link>
            </li>
            <li>
              <Link to="/login">
                <AiOutlineLogin size="2rem" color="1b8a82" />
                Login
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost  normal-case text-xl pb-20 w-40 ">
          <div className="flex">
            <img src={logo} alt="" />
            <p className="py-8 text-teal-600 font-bold">SurgicalSavvy</p>
          </div>
        </Link>
      </div>
      <div className="form-control"></div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <FaHome size="1.8rem" color="1b8a82" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/shopmore">
              <GiBuyCard size="1.8rem" color="1b8a82" />
              Quick Buy
            </Link>
          </li>
          <li>
            <Link to="/shopmore">
              <FaHandHoldingMedical size="1.8rem" color="1b8a82" />
              Medical Devices
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaModx size="1.8rem" color="1b8a82" />
              About
            </Link>
          </li>
          <li>
            <Link to="/login">
              <AiOutlineLogin size="1.8rem" color="1b8a82" />
              Login
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FaSearchPlus size="1rem" color="" />
            </Link>
          </li>
          <li>
            <Link to="/shopmore">
              <AiOutlineShopping size="1rem" color="" />
            </Link>
          </li>
          <li>
            <Link to="/">INR</Link>
          </li>
          <li>
            <Link to="/login">
              <ImManWoman size="1rem" color="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
