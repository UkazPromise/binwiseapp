import React from 'react';

const Testimonial = () => {
  return (
    <div className="py-16 px-8 lg:py-32 lg:mx-24">
      {/* Section Title */}
      <h1 className="text-2xl lg:text-4xl font-bold text-center mb-12">
        Testimonials
      </h1>

      {/* Testimonials Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
        {/* Testimonial 1 */}
        <div className="text-center">
          <img
            src="/images/img4.png"
            alt="Testimonial 1"
            className="h-64 w-80 mx-auto lg:h-80 lg:w-96"
          />
          <p className="text-black mt-2">
            “Trashing waste have been more convenient<br/>
            with the help of Binwise ”
          </p>
          <h1 className="text-xl font-bold mt-4">Sharon Williams</h1>
        </div>

        {/* Testimonial 2 */}
        <div className="text-center">
          <img
            src="/images/img5.png"
            alt="Testimonial 2"
            className="h-64 w-80 mx-auto lg:h-80 lg:w-96"
          />
          <p className="text-black mt-2">
            “TAs a small business owner, I struggled<br/> with waste management until I found <br/>BinWise.  ”
          </p>
          <h1 className="text-xl font-bold mt-4">Janet Brown</h1>
        </div>

        {/* Testimonial 3 */}
        <div className="text-center">
          <img
            src="/images/img6.png"
            alt="Testimonial 3"
            className="h-64 w-80 mx-auto lg:h-80 lg:w-96"
          />
          <p className="text-black mt-2">
            “I never realized how much waste I could <br/>recycle until I started using BinWise. ”
          </p>
          <h1 className="text-xl font-bold mt-4">Olayemi Adedeji</h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
