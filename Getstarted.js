import React from 'react';

const Getstarted = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[120px] lg:mx-16 lg:my-16 lg:w-screen">
      {/* Text Section */}
      <div className="lg:pr-20 text-center lg:text-center">
        <h1 className="font-bold text-2xl lg:text-3xl">
          Be part of the solution,<br />not the pollution
        </h1>
        <h4 className="font-normal text-xl lg:text-2xl mt-4 lg:mt-2">
          Join us in reducing waste and promoting<br />sustainability in our<br />community
        </h4>
        <button className="rounded-md font-bold mt-6 lg:mx-0 px-4 py-2 bg-green-500">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-8 lg:pl-32 lg:mt-0 flex justify-end">
        <img
          src="/images/img1.png"
          alt=""
          className="lg:h-80 lg:w-[700px]"
        />
      </div>
    </div>
  );
};

export default Getstarted;
