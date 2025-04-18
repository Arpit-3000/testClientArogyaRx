// components/Navbar.js
import React from 'react';
// Consider using NavLink from react-router-dom for active link styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Styles for links based on your provided code
  const linkClasses = "text-black hover:text-teal-600 px-3 py-3 rounded-md text-lg font-thin transition-colors duration-150 whitespace-nowrap";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar container height set to h-24 */}
        <div className="flex justify-between items-center h-24">

          {/* Logo Section (Stays on Left) */}
          <div className="flex-shrink-0">
            <Link to="/">
              {/* --- Replace with your actual logo --- */}
              <img
                // Logo height set to h-12
                className="h-12 w-auto"
                src="/path/to/your/logo.svg" // <-- Replace this path
                alt="Holistic Healthcare Logo"
              />
            </Link>
          </div>

          {/* Combined Links and Buttons Section (Grouped on Right) */}
          {/* Hidden below md breakpoint. Outer div centers items vertically. */}
          <div className="hidden md:flex md:items-center">

            {/* Navigation Links Group */}
            <div className="flex items-center space-x-4"> {/* Spacing between links */}
                <Link to="/" className={linkClasses}>Home</Link>
                <Link to="/pharmacy" className={linkClasses}>Pharmacy</Link>
                <Link to="/medicines" className={linkClasses}>Medicines</Link>
                <Link to="/labtest" className={linkClasses}>Lab Test</Link>
                <Link to="/contact" className={linkClasses}>Contact</Link>
                <Link to="/hospitals" className= {linkClasses}>Find Hospitals</Link>
            </div>

            {/* Buttons Group */}
             {/* Added ml-6 for space between Links group and Buttons group */}
            <div className="ml-6 flex items-center space-x-4 -mr-32"> {/* Spacing between buttons */}
                <Link
                  to="/signin"
                  // Styles for buttons based on your provided code (font thin, size base)
                  className="text-gray-700 bg-white border-2  border-teal-700  hover:bg-gray-50 px-5 py-3 rounded-full text-base font-thin transition-colors duration-150 whitespace-nowrap"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  // Styles for buttons based on your provided code (font thin, size base)
                  className="text-white bg-teal-700 hover:bg-teal-600 px-5 border border-teal-900 py-3 rounded-full text-base font-thin transition-colors duration-150 shadow-sm whitespace-nowrap"
                >
                  Sign Up
                </Link>
            </div>
          </div>

          {/* Mobile Menu Button Placeholder */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
              {/* Add state & onClick for mobile menu toggle */}
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Area (needs conditional rendering based on state) */}
      {/* <div className="md:hidden"> ... mobile links/buttons here ... </div> */}
    </nav>
  );
};

export default Navbar;