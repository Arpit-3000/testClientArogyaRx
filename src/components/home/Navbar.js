// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSignUpClick }) => {
  const linkClasses = "text-black hover:text-teal-600 px-3 py-3 rounded-md text-lg font-thin transition-colors duration-150 whitespace-nowrap";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-12 w-auto" src="/path/to/your/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className={linkClasses}>Home</Link>
              <Link to="/pharmacy" className={linkClasses}>Pharmacy</Link>
              <Link to="/medicines" className={linkClasses}>Medicines</Link>
              <Link to="/labtest" className={linkClasses}>Lab Test</Link>
              <Link to="/contact" className={linkClasses}>Contact</Link>
              <Link to="/hospitals" className={linkClasses}>Find Hospitals</Link>
            </div>
            <div className="ml-6 flex items-center space-x-4 -mr-32">
             
              <button
                onClick={onSignUpClick}
                className="text-white bg-teal-700 hover:bg-teal-600 px-5 border border-teal-900 py-3 rounded-full text-base font-thin transition-colors duration-150 shadow-sm whitespace-nowrap"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
