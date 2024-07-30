// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import img from "../Home/Home/Untitled-design-3--unscreen.gif";
// import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

// const Logini = () => {
//   const { login } = useContext(AuthContext);

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     login(email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//       })
//       .then((error) => console.log(error));
//   };
//   return (
//     <div className="hero w-full my-20">
//       <div className="hero-content grid gap-24 md:grid-cols-2 flex-col lg:flex-row">
//         <div className="text-center lg:text-left">
//           <img className="" src={img} alt="" />
//         </div>
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
//           <from onSubmit={handleLogin} className="card-body">
//             <h1 className="text-5xl text-center font-bold text-cyan-700">
//               Login now
//             </h1>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-cyan-700">Email</span>
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="email"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text text-cyan-700">Password</span>
//               </label>
//               <input
//                 type="text"
//                 name="password"
//                 placeholder="password"
//                 className="input input-bordered"
//               />
//               <label className="label">
//                 <a
//                   href="#"
//                   className="label-text-alt link link-hover text-cyan-700"
//                 >
//                   Forgot password?
//                 </a>
//               </label>
//             </div>
//             <div className="form-control mt-6">
//               <input
//                 className="btn bg-cyan-900 text-white btn-primary"
//                 type="submit"
//                 value="Login"
//               />
//             </div>
//           </from>
//           <p className="text-center text-cyan-700">
//             New to EyeGlass{" "}
//             <Link className="text-orange-800 font-bold" to="/signup">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Logini;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Logini = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ryk1ydk', 'template_8306npz', form.current, 'Y8-44Z6hmp2exw81g')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='py-10 flex justify-center items-center'>
      <div className="w-full max-w-3xl rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-cyan-700">
        <div className="mb-6">
          <h2 className="text-center text-white text-3xl font-semibold tracking-tight">Contact Us</h2>
        </div>
        <form ref={form} onSubmit={sendEmail} className="w-full space-y-6">
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="user_name">
              Name
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="user_name"
              placeholder="Your Name"
              name="user_name"
              type="text"
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="user_email">
              Email
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="user_email"
              placeholder="Your Email"
              name="user_email"
              type="email"
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="message"
              placeholder="What's on your mind"
              name="message"
            />
          </div>
          <button className="rounded-md bg-sky-500 px-4 py-2 text-teal-600 transition-colors dark:bg-white" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Logini;

