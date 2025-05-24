import React from 'react';

const Header = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-2">Contact Us</h2>
        <h3 className="text-2xl font-semibold text-green-600 mb-10">Request A Call Back!</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 bg-white transition duration-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 bg-white transition duration-300"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-5 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 bg-white transition duration-300"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-5 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 bg-white transition duration-300"
          />
        </div>

        <div className="mt-6">
          <textarea
            placeholder="Your Message..."
            className="w-full px-5 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 bg-white resize-none h-32 transition duration-300"
          ></textarea>
        </div>

        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 transform hover:scale-105">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Header;
