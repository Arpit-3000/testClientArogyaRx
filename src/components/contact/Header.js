import React from 'react';

const Header = () => {
  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-500 mb-2">
          Contact Us
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-green-600 dark:text-green-500 mb-8 sm:mb-10">
          Request A Call Back!
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 transition duration-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 transition duration-300"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 transition duration-300"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 transition duration-300"
          />
        </div>

        <div className="mt-4 sm:mt-6">
          <textarea
            placeholder="Your Message..."
            className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 resize-none h-32 transition duration-300"
          ></textarea>
        </div>

        <button className="mt-6 sm:mt-8 bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md transition duration-300 transform hover:scale-105 active:scale-95">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Header;