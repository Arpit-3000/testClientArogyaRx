import React from 'react';

// Local image imports
import FeverImg from '../../assets/labtestimages/f5.png';
import DiabetesImg from '../../assets/labtestimages/f4.png';
import SkinImg from '../../assets/labtestimages/f3.png';
import KidneyImg from '../../assets/labtestimages/f2.png';
import DigestionImg from '../../assets/labtestimages/f1.png';

const healthConcerns = [
  { name: 'Fever', image: FeverImg, tests: 42 },
  { name: 'Diabetes', image: DiabetesImg, tests: 36 },
  { name: 'Skin', image: SkinImg, tests: 28 },
  { name: 'Kidney', image: KidneyImg, tests: 31 },
  { name: 'Digestion', image: DigestionImg, tests: 45 },
];

const Health = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center lg:text-left mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-500 mb-2">
            Find Tests by Health Concern
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Get the right diagnostic tests for your specific health needs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {healthConcerns.map((item, index) => (
            <div
              key={index}
              className="group w-full max-w-[180px] sm:max-w-[200px] bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl dark:hover:shadow-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <div className="rounded-full border-4 border-transparent bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 p-1 group-hover:rotate-3 transition-transform duration-500">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-white dark:border-gray-800"
                    loading="lazy"
                  />
                </div>
                {item.tests && (
                  <div className="absolute -bottom-2 -right-2 bg-green-500 dark:bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.tests}+ Tests
                  </div>
                )}
              </div>
              <div className="mt-4 text-center">
                <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </p>
                <button className="mt-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none">
                  View All
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
            View All Health Concerns
          </button>
        </div>
      </div>
    </section>
  );
};

export default Health;