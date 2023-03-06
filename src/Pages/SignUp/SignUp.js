import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../Home/Home/Untitled design (40).png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const handleSignUp =event =>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }
    return (
        <div className="hero w-full my-20 text-orange-200">
        <div className="hero-content grid gap-24 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
           <img className= ''src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <from onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl text-center font-bold">Sign Up</h1>
              <div className="form-control text-orange-200">
                <label className="label">
                  <span className="label-text text-orange-200">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
              </div>

              <div className="form-control text-orange-200">
                <label className="label">
                  <span className="label-text text-orange-200">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
              </div>

              <div className="form-control text-orange-200">
                <label className="label">
                  <span className="label-text text-orange-200">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                  <input className='btn btn-primary' type="submit" value="Sign Up" />
              </div>
            </from>
            <p className='text-center'>Already Have an account? <Link className='text-orange-800 font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;

