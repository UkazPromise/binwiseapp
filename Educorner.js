import React from 'react';

const Educorner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:mx-24 lg:py-44">
      {/* Left Section */}
      <div className="lg:grow lg:pr-20 text-center lg:text-center">
        <h1 className="font-bold text-2xl lg:text-3xl">Educational Corner</h1>
        <img
          src="/images/img2.png"
          alt=""
          className="h-64 w-64 lg:h-96 lg:w-96 mx-auto lg:mx-0 py-5"
        />
      </div>

      {/* Right Section */}
      <div className="lg:grow lg:pl-20 text-center lg:text-center mt-8 lg:mt-0">
        <h1 className="font-bold text-white lg:text-white text-xl lg:text-xl mb-4 lg:pl-[500px]">
          Learn More →
        </h1>
        <h1 className="font-bold text-2xl lg:text-3xl py-2">
          Trash Talk: Your Guide<br />
          to Smarter, Greener Waste<br />
          Management!
        </h1>
        <h4 className="font-normal text-base lg:text-2xl mt-4 leading-relaxed">
          Welcome to Trash Talk, your go-to hub for all things waste<br/>
          management! Dive into tips, tricks, and resources<br/> designed to help
          you recycle right, reduce waste, and<br/> embrace sustainable living.<br/>
          Whether you're curious about composting, sorting<br/> recyclables, or
          finding eco-friendly solutions, we've got you<br/> covered.
        </h4>
      </div>
    </div>
  );
};

export default Educorner;
