import React from 'react';
// Removed Framer Motion import
import { FaShoppingBasket } from 'react-icons/fa'; // Example Icon

const Midi = () => {

  // Removed animation variants definitions

  return (
    // Changed motion.section to section, removed animation props
    <section
      className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-16 sm:py-24 text-gray-900 overflow-hidden"
      // Removed variants, initial, whileInView, viewport
    >
      <div className="container mx-auto text-center px-4">
        {/* Changed motion.h2 to h2, removed animation props */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 mb-5"
          // Removed variants
        >
          Shop. Benefit. Evolve.
        </h2>

        {/* Changed motion.p to p, removed animation props */}
        <p
          className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto"
          // Removed variants
        >
          Welcome! We bring the pharmacy to your fingertips. Hover over the wellness horizons with our quality healthcare every step of the way!
        </p>

        {/* Changed motion.button to button, removed animation props */}
        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out inline-flex items-center gap-2 group"
          // Removed variants, whileHover, whileTap
        >
          {/* Kept icon and CSS hover effect on icon */}
          <FaShoppingBasket className="transition-transform duration-300 group-hover:rotate-[-5deg]" />
          Shop Medicines
        </button>
      </div>
    </section>
  );
};

export default Midi;