import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';

// Wrap component in React.memo
const Midi = React.memo(() => {

  return (
    <section
      className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-16 sm:py-24 text-gray-900 overflow-hidden"
    >
      <div className="container mx-auto text-center px-4">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 mb-5"
        >
          Shop. Benefit. Evolve.
        </h2>

        <p
          className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto"
        >
          Welcome! We bring the pharmacy to your fingertips. Hover over the wellness horizons with our quality healthcare every step of the way!
        </p>

        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out inline-flex items-center gap-2 group"
        >
          <FaShoppingBasket className="transition-transform duration-300 group-hover:rotate-[-5deg]" />
          Shop Medicines
        </button>
      </div>
    </section>
  );
}); // End of React.memo wrapping

export default Midi;