import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Midi = React.memo(() => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate('/medicines');
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 dark:from-emerald-900/20 dark:via-gray-900 dark:to-sky-900/20 py-14 sm:py-20 lg:py-24 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <div className="container mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-blue-700 dark:text-blue-500 mb-4 sm:mb-5">
          Shop. Benefit. Evolve.
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
          Welcome! We bring the pharmacy to your fingertips. Hover over the wellness horizons with our quality healthcare every step of the way!
        </p>

        <button
          onClick={handleShopClick}
          className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl dark:shadow-gray-700/50 dark:hover:shadow-gray-600/50 transition-all duration-300 ease-in-out inline-flex items-center gap-2 group"
        >
          <FaShoppingBasket className="transition-transform duration-300 group-hover:rotate-[-5deg]" />
          Shop Medicines
        </button>
      </div>
    </section>
  );
});

export default Midi;