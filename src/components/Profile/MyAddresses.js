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
    <div className="max-w-5xl mx-auto p-4 sm:p-6 transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">My Addresses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="border border-gray-300 dark:border-gray-600 rounded-md p-4 shadow-sm relative bg-white dark:bg-gray-800 transition-colors duration-300"
          >
            <div className="flex items-start gap-3">
              <span className="text-gray-600 dark:text-gray-400 mt-1">
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
              <div className="flex-1">
                <p className="font-semibold capitalize text-gray-800 dark:text-white">{addr.name}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{addr.address}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Mobile: {addr.mobile}
                </p>
              </div>
            </div>

            <div className="absolute top-3 right-3">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded ${
                  addr.tag === 'Home'
                    ? 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-200'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                {addr.tag}
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm transition-colors duration-200"
                disabled
              >
                Edit
              </button>
              <button
                onClick={() => handleRemove(addr.id)}
                className="border border-gray-300 dark:border-gray-600 text-red-600 dark:text-red-400 rounded px-4 py-1 hover:bg-red-100 dark:hover:bg-red-900/30 text-sm transition-colors duration-200"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Centered button at bottom */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => navigate('/adress')}
          className="bg-yellow-500 dark:bg-yellow-600 hover:bg-yellow-600 dark:hover:bg-yellow-700 text-white px-6 py-2 rounded font-semibold shadow transition-colors duration-200 w-full sm:w-auto text-center"
        >
          ADD NEW ADDRESS
        </button>
      </div>
    </div>
  );
};

export default MyAddresses;