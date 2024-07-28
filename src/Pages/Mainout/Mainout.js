/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Mainout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("https://surgical-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        {/* image add */}

        <div className="carousel w-full">
          <div className="carousel-item relative py-6 w-full">
            <img
              src="https://i.ibb.co/3NQ1f17/Special-Sale-1.png"
              className="w-full"
            />
          </div>
        </div>

        {/* image end */}

        <h2 className="text-4xl">Your order: {title}</h2>
        <h2 className="text-3xl py-2">Price: {price}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-4 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="input input-ghost w-full input-bordered"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-ghost w-full input-bordered"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full "
          placeholder="Your Message"
          required
        ></textarea>

        <div className="py-2">
          <input className="btn bg-cyan-900 text-white" type="submit" value="Place Your Order" />
        </div>
      </form>
    </div>
  );
};

export default Mainout;
