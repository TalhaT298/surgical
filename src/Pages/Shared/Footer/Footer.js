/* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaSearchPlus } from "react-icons/fa";
// // import Wave from "react-wavify";

// import logo from "../../../assets/Untitled design (82).png";

// const Footer = () => {
//   return (
//     <div className="">
//       {/* B5D8DC */}
//       {/* <Wave fill='rgb(0, 151, 167)'
//         paused={false}
//         options={{
//           height: 80,
//           amplitude: 40,
//           speed: 0.20,
//           points: 4
//         }}
//   /> */}
//       <footer className="footer p-20 bg-cyan-700 text-white">
//         <div>
//           <div className="pl-6">
//           <Link
//             to="/"
//             className="btn btn-ghost normal-case text-xl w-40  "
//           >
//             <img src={logo} alt="" />
//           </Link>
//           <p className="pt-1 font-bold">© 2023 All right reserved by SurgicalSavvy.</p>
//           </div>

//           <div className="grid grid-flow-col pl-6 gap-4">
//             <a href="https://www.facebook.com/talha.tarique.5">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg>
//             </a>
//             <a href="https://www.linkedin.com/in/talha-tarique/">
//               <svg
//                 fill="currentColor"
//                 height="24"
//                 width="24"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
//                 <path d="m.396 7.977h4.976v16.023h-4.976z" />
//                 <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
//               </svg>{" "}
//             </a>
//             <a href="https://twitter.com/TalhaTarique1">
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   fill="currentColor"
//   width="24"
//   height="24"
//   viewBox="0 0 50 50"
// >
//   <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
// </svg>
//             </a>
//             <a href="https://www.instagram.com/talha_tarique77/">
//               <svg
//                 fill="currentColor"
//                 height="24"
//                 width="24"
//                 viewBox="0 0 511 511.9"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0" />
//                 <path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0" />
//                 <path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0" />
//               </svg>{" "}
//             </a>
//           </div>
//         </div>
//         <div>
//           <span className="footer-title">Services</span>
//           <a className="link link-hover">Branding</a>
//           <a className="link link-hover">Design</a>
//           <a className="link link-hover">Marketing</a>
//           <a className="link link-hover">Advertisement</a>
//         </div>
//         <div>
//           <span className="footer-title">Company</span>
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Features</a>
//           <a className="link link-hover">Big Deal</a>
//         </div>
//         <div>
//           {/*
//            */}
//           <span className="footer-title">Legal</span>
//           {/* <a className="link link-hover">Terms of use</a>  */}
//           <a className="link link-hover">Privacy policy</a>
//           <a className="link link-hover">Important</a>
//           <div className="form-control w-80">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="enter your email address"
//                 className="input input-bordered w-full pr-16"
//               />
//               <button className="btn btn-primary bg-teal-600 absolute top-0 right-0 rounded-l-none">
//                 <FaSearchPlus size="1.5rem" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import logo from "../../../assets/Untitled design (82).png";
const Footer = () => {
  return (
    <div>
  <footer className="footer bg-cyan-700 text-white text-sm p-10 flex flex-col md:flex-row md:justify-center md:gap-80">
    <nav className="mb-6 md:mb-0">
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav>
    <nav className="mb-6 md:mb-0">
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    <nav className="mb-6 md:mb-0">
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
    <nav>
      <h6 className="footer-title">Privacy</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  <footer className="footer bg-cyan-700 text-base-content border-t border-base-300 px-10 py-4 flex flex-col md:flex-row items-center justify-between">
    <aside className="flex items-center mb-4 md:mb-0">
      <img className="w-28" src={logo} alt="SurgicalSavvy Logo" />
      <p className="text-white font-bold text-sm ml-4">
        © 2023 All rights reserved by SurgicalSavvy
      </p>
    </aside>
    <nav className="flex justify-center md:justify-end">
      <div className="flex gap-4">
        <a href="https://www.instagram.com/talha_tarique77/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="24"
            height="24"
            viewBox="0 0 50 50"
          >
            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
          </svg>
        </a>
        <a href="https://twitter.com/TalhaTarique1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a href="https://www.facebook.com/talha.tarique.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </nav>
  </footer>
</div>

  );
};

export default Footer;
