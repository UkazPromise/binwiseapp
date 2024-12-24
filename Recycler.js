import React from 'react';
import Footer from '../components/Footer';
import RecyclingCompaniesTable from './RecyclingCompaniesTable';
import SearchBar from './SearchBar';

const Recycler = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Image Section */}
      <div className="relative">
        <img
          src="images/img8.png"
          alt="Recycling Center"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="text-white text-base sm:text-lg md:text-xl font-bold text-center">
            LOCATE THE NEAREST RECYCLING CENTRE CLOSE TO YOU
          </p>
        </div>
      </div>

      {/* Search Bar and Info Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 px-6 py-4">
        <p className="text-base sm:text-lg md:text-xl text-black font-bold text-center md:text-left">
          Visit the nearest recycling centre close to you
        </p>
        <div className="w-full md:w-auto">
          <SearchBar />
        </div>
      </div>

      {/* Recycling Companies Table Section */}
      <div className="flex-grow px-4 sm:px-6 lg:px-8 py-6">
        <RecyclingCompaniesTable />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Recycler;
