// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">Holistic Healthcare</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/pharmacy" className="text-white hover:text-gray-200">Pharmacy</Link>
          <Link to="/medicines" className="text-white hover:text-gray-200">Medicines</Link>
          <Link to="/labtest" className="text-white hover:text-gray-200">Lab Test</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
          <Link to="/hospitals" className="text-white hover:text-gray-200">Find Hospitals</Link>
          <Link to="/signin" className="text-white hover:text-gray-200">Sign in</Link>
          <Link to="/signup" className="text-white hover:text-gray-200">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
