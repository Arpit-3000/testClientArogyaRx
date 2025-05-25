// src/components/cart/MyAddresses.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyAddresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Shivam Kumar',
      tag: 'Home',
      address:
        'Aruna Nagar, District-Etah, Street near baithak hotel, Aruna Nagar, Etah, Uttar Pradesh, 207120',
      mobile: '8791762374',
    },
    {
      id: 2,
      name: 'Shivam Kumar',
      tag: 'Home',
      address:
        'Aruna Nagar, District-Etah, Street near baithak hotel, Aruna Nagar, Etah, Uttar Pradesh, 207120',
      mobile: '8791762374',
    },
    {
      id: 3,
      name: 'Shivam Kumar',
      tag: 'Other',
      address:
        'Room no 222 , Chitagni Hostel IIIT Una, Saloh, Saloh, Una, Himachal Pradesh, 177209',
      mobile: '8791762374',
    },
  ]);

  const navigate = useNavigate();

  const handleRemove = (id) => {
    const updatedAddresses = addresses.filter((addr) => addr.id !== id);
    setAddresses(updatedAddresses);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">My Addresses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="border border-gray-300 rounded-md p-4 shadow-sm relative bg-white"
          >
            <div className="flex items-start gap-2">
              <span className="text-gray-600 mt-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13 21.314 8.343 16.657A8 8 0 1117.657 16.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <div>
                <p className="font-semibold capitalize">{addr.name}</p>
                <p className="text-sm text-gray-700 mt-1">{addr.address}</p>
                <p className="text-sm text-gray-700 mt-1">
                  Mobile: {addr.mobile}
                </p>
              </div>
            </div>

            <div className="absolute top-3 right-3">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  addr.tag === 'Home'
                    ? 'bg-orange-100 text-orange-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {addr.tag}
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                className="border border-gray-300 text-gray-700 rounded px-4 py-1 hover:bg-gray-100 text-sm"
                disabled
              >
                Edit
              </button>
              <button
                onClick={() => handleRemove(addr.id)}
                className="border border-gray-300 text-red-600 rounded px-4 py-1 hover:bg-red-100 text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Centered button at bottom */}
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => navigate('/adress')}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded font-semibold shadow"
        >
          ADD NEW ADDRESS
        </button>
      </div>
    </div>
  );
};

export default MyAddresses;
