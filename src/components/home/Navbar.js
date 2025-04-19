import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo-Photoroom.png";

const Navbar = ({ onSignUpClick }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClasses = "text-black hover:text-teal-600 px-3 py-3 rounded-md text-lg font-thin transition-colors duration-150 whitespace-nowrap";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-24">
        <div className="flex-shrink-0">
          <Link to="/">
            <img className="h-36 w-auto" src={logo} alt="Logo" />
          </Link>
        </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-4">
            <Link to="/" className={linkClasses}>Home</Link>
            <Link to="/pharmacy" className={linkClasses}>Pharmacy</Link>
            <Link to="/medicines" className={linkClasses}>Medicines</Link>
            <Link to="/labtest" className={linkClasses}>Lab Test</Link>
            <Link to="/contact" className={linkClasses}>Contact</Link>

            <button
              onClick={onSignUpClick}
              className="ml-6 text-white bg-teal-800 hover:bg-teal-600 px-5 border border-teal-900 py-3 rounded-full text-base font-thin transition-colors duration-150 shadow-sm whitespace-nowrap"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link to="/" className={linkClasses}>Home</Link>
            <Link to="/pharmacy" className={linkClasses}>Pharmacy</Link>
            <Link to="/medicines" className={linkClasses}>Medicines</Link>
            <Link to="/labtest" className={linkClasses}>Lab Test</Link>
            <Link to="/contact" className={linkClasses}>Contact</Link>
            <Link to="/hospitals" className={linkClasses}>Find Hospitals</Link>
            <button
              onClick={onSignUpClick}
              className="w-full text-white bg-teal-700 hover:bg-teal-600 px-5 border border-teal-900 py-3 rounded-full text-base font-thin transition-colors duration-150 shadow-sm"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
