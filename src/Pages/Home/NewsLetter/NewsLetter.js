import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex items-center md:flex-row flex-col">
          <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 class="text-xs text-teal-600 tracking-widest font-medium title-font mb-1">
            get a new discount
            </h2>
            <h1 class="md:text-3xl text-2xl font-medium title-font text-cyan-700">
            Sign up to NewsLetter
            </h1>
          </div>
          <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <input type="email" placeholder="Your Email Address" class="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700" required></input>
          <button type="submit" class="bg-cyan-700 text-white font-bold py-3 px-12 rounded-md hover:bg-teal-600">SUBMIT</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
