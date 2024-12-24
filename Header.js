import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // Don't render the header on the Sign In page
  if (location.pathname === '/signin') {
    return null;
  }
  if (location.pathname === '/signup') {
    return null;
  }

  return (
    <header className="bg-gray-800 text-green-600 font-semibold mx-16 my-16">
      <div className="container flex items-center justify-between py-4 w-5/6 h-20">
        <img src="/images/binwise.png" alt="binwise logo" className="h-16 px-12" />

        <button
          className="text-2xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } sm:flex sm:space-x-8 absolute sm:static bg-gray-800 sm:opacity-100 w-[100px] sm:w-auto left-0 top-14 sm:top-0`}
        >
          <Link to="/Home" className="block py-2 px-4 hover:bg-green-500 hover:text-white sm:hover:bg-green-500">
            Home
          </Link>
          <Link to="/Recycler" className="block py-2 px-4 hover:bg-green-500 hover:text-white sm:hover:bg-green-500">
            Recycler
          </Link>
          <a href="#pickup" className="block py-2 px-4 hover:bg-green-500 hover:text-white sm:hover:bg-green-500">
            Pickup
          </a>
          <Link to="/Buybin" className="block py-2 px-4 hover:bg-green-500 hover:text-white sm:hover:bg-green-500">
            Buy a bin
          </Link>
          <Link to="/Services" className="block py-2 px-4 hover:bg-green-500 hover:text-white sm:hover:bg-green-500">
            Services
          </Link>
          <a href="#contact" className="block py-2 px-4 hover:bg-green-500 hover:text-white sm:hover:bg-green-500">
            Contact us
          </a>
          <Link
            to="/signin"
            className="block py-2 px-4 hover:bg-green-500 hover:text-white sm:hover:bg-green-500"
          >
            Sign in
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
