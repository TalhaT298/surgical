import React from "react";

const Message = () => {
  return (
    <section className="">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
            Please enter your login credentials to access the site. If you don't have an account yet, you can easily create one by clicking on the 'Sign Up' button.
            </p>
          </div>
          <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 bg-cyan-900">
                <button className="btn btn-primary bg-cyan-900 text-white">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
