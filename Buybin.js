import React from 'react';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

const Buybin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="images/buybin.png"
          alt="bin for sale"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="text-white text-sm sm:text-lg md:text-2xl font-bold text-center">
            NUMBER ONE STORE FOR YOUR WASTE COLLECTION STORAGE
          </p>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 space-y-4 md:space-y-0">
        <p className="text-base sm:text-lg md:text-xl text-black font-bold text-center md:text-left">
          FIND THE BEST STORAGE THAT FIT YOUR NEED
        </p>
        <div className="w-full md:w-auto">
          <SearchBar />
        </div>
      </div>

      {/* Industrial Storage Machines */}
      <div className="px-6 py-4">
        <p className="text-base sm:text-lg md:text-xl text-black font-bold">
          INDUSTRIAL STORAGE MACHINE
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Product Card */}
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: '#199f4c' }}
                className="self-end text-lg mb-2"
              />
              <img
                src="images/buybin1.png"
                alt="industrial bin"
                className="w-full h-[200px] object-contain"
              />
              <p className="text-center text-lg font-bold mt-4">
                SANITA INDUSTRIAL BIN
              </p>
              <p className="text-center text-base font-bold mt-2">$750</p>
              <button className="rounded-md text-white font-bold mt-4 px-6 py-2 bg-green-500">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Other Storage Machines */}
      <div className="px-6 py-4">
        <p className="text-base sm:text-lg md:text-xl text-black font-bold">
          OTHER STORAGE MACHINES
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Product Card */}
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: '#199f4c' }}
                className="self-end text-lg mb-2"
              />
              <img
                src={`images/buybin${item + 1}.png`}
                alt={`bin ${item}`}
                className="w-full h-[200px] object-contain"
              />
              <p className="text-center text-lg font-bold mt-4">
                {item === 1 ? 'SPAR PLASTIC BIN' : 'SPAN MINI BIN'}
              </p>
              <p className="text-center text-base font-bold mt-2">$750</p>
              <button className="rounded-md text-white font-bold mt-4 px-6 py-2 bg-green-500">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Buybin;
