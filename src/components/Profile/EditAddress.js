// src/components/cart/EditAddress.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditAddress = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-md shadow">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Add New Address</h2>

      <form className="space-y-4">
        <div>
          <label>Country *</label>
          <input
            defaultValue="India"
            className="w-full border border-gray-300 rounded px-3 py-2"
            disabled
          />
        </div>

        <div>
          <label>First Name *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label>Last Name</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label>Mobile Number *</label>
          <div className="flex">
            <span className="px-3 py-2 border border-gray-300 bg-gray-100 rounded-l">+91</span>
            <input className="flex-1 border border-gray-300 rounded-r px-3 py-2" />
          </div>
        </div>

        <div>
          <label>PIN Code/Postal Code/ZIP Code *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>City *</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label>State *</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <label>Flat no/Building, Street name *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label>Area/Locality *</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label>Landmark</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="flex space-x-2">
          {['Home', 'Office', 'Other'].map((tag) => (
            <button
              type="button"
              key={tag}
              className="border border-yellow-400 px-4 py-2 rounded text-sm hover:bg-yellow-100"
            >
              {tag}
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="bg-gray-400 text-white w-full py-2 rounded font-semibold"
        >
          SAVE ADDRESS
        </button>
      </form>
    </div>
  );
};

export default EditAddress;
