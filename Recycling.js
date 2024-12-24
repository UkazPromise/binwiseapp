import React from 'react';

const Recycling = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:mx-24 lg:py-20">
      {/* Left Section */}
      <div className="lg:grow lg:pr-20 text-center lg:text-center">
        <h1 className="font-bold text-2xl lg:text-3xl">
          Find A Recycler Close to You
        </h1>
        <h1 className="font-bold text-2xl lg:text-3xl mt-4">
          Turn Trash into Treasure:<br />
          Your Guide to<br />
          Smarter Recycling!
        </h1>
        <h1 className="font-normal text-base lg:text-2xl mt-4 leading-relaxed">
          Discover how easy it is to make a difference! Recycling <br/>isn’t just
          about disposing of waste; it’s about<br/> transforming everyday items into
          valuable resources<br/>. Explore our step-by-step guides, learn what
          materials<br/> can be recycled, and join the movement to reduce<br/> landfill
          waste.
        </h1>
      </div>

      {/* Right Section */}
      <div className="lg:grow mt-10 lg:mt-0 lg:pl-20 text-center">
        <h1 className="font-bold text-white text-xl lg:text-xl mb-4 lg:mb-6 lg:pl-[400px]">
          Learn More →
        </h1>
        <img
          src="/images/img3.png"
          alt="Recycler Illustration"
          className="h-64 w-80 lg:h-96 lg:w-[550px] mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
};

export default Recycling;
