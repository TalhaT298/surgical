import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../Home/Home/Untitled-design-3--unscreen.gif";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero w-full my-20 text-cyan-700">
      <div className="hero-content grid gap-24 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <from onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <div className="form-control text-cyan-700">
              <label className="label">
                <span className="label-text text-cyan-700">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control text-cyan-700">
              <label className="label">
                <span className="label-text text-cyan-700">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control text-cyan-700">
              <label className="label">
                <span className="label-text text-cyan-700">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary bg-cyan-900 text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </from>
          <p className="text-center">
            Already Have an account?{" "}
            <Link className="text-orange-800 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
