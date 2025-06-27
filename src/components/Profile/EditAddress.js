import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditAddress = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-md shadow transition-colors duration-300">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 dark:text-blue-400 hover:underline flex items-center"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Add New Address</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Country *</label>
          <input
            defaultValue="India"
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent disabled:opacity-70 disabled:cursor-not-allowed"
            disabled
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">First Name *</label>
          <input 
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Last Name</label>
          <input 
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Mobile Number *</label>
          <div className="flex">
            <span className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-l">
              +91
            </span>
            <input 
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-r px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">PIN Code/Postal Code/ZIP Code *</label>
          <input 
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">City *</label>
            <input 
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">State *</label>
            <input 
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Flat no/Building, Street name *</label>
          <input 
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Area/Locality *</label>
          <input 
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Landmark</label>
          <input 
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {['Home', 'Office', 'Other'].map((tag) => (
            <button
              type="button"
              key={tag}
              className="border border-yellow-400 dark:border-yellow-500 px-3 sm:px-4 py-1 sm:py-2 rounded text-sm hover:bg-yellow-100 dark:hover:bg-yellow-900/30 text-gray-800 dark:text-white transition-colors duration-200"
            >
              {tag}
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-700 text-white w-full py-2 rounded font-semibold transition-colors duration-200"
        >
          SAVE ADDRESS
        </button>
      </form>
    </div>
  );
};

export default EditAddress;