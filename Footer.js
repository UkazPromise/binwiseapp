import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="bg-black w-full py-8">
      {/* Wrapper for Footer Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-24 px-6 lg:px-40">
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
          <img
            src="images/logo1.png"
            alt="binwise logo"
            className="h-20 w-36 lg:h-28 lg:w-44"
          />
        </div>

        {/* Contact Info Section */}
        <div className="mb-6 lg:mb-0">
          <h1 className="text-xl lg:text-2xl font-bold text-white text-center lg:text-left">
            Bin wise waste management
          </h1>
          <div className="flex flex-col space-y-3 mt-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-white" />
              <h1 className="text-white text-sm lg:text-base">
                34, Oworonshoki Lane, Lagos state
              </h1>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-white" />
              <h1 className="text-white text-sm lg:text-base">
                infobinwise@gmail.com
              </h1>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <FontAwesomeIcon icon={faClock} className="text-white" />
              <h1 className="text-white text-sm lg:text-base">
                Opening Hours: Mon-Fri, 8:00am-4pm
              </h1>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-xl lg:text-2xl font-bold text-white">Quick Links</h1>
          <ul className="space-y-2 mt-4">
            <li className="text-white text-sm lg:text-base">Pick up</li>
            <li className="text-white text-sm lg:text-base">Recycler</li>
            <li className="text-white text-sm lg:text-base">Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
