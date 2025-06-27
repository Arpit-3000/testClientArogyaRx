import React from 'react';
import exploreImage from '../../assets/pharmacyimages/feel.png';

const Explore = React.memo(() => {
    return (
        <section className="bg-white dark:bg-gray-900 py-14 sm:py-16 lg:py-20 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-12">

                {/* Left Content */}
                <div className="text-left md:pr-6 lg:pr-8 order-2 md:order-1">
                    <h2 className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 sm:mb-3">
                        SPECIAL SERVICE
                    </h2>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 dark:text-teal-500 mb-3 sm:mb-4 leading-tight">
                        Feel better <br className="hidden sm:block" /> And Rest Assured
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                        With our commitment to providing safe and effective medical and healthcare products, you can rest assured when you buy from HealthSaathi Pharmacy.
                    </p>
                    <button className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-colors duration-300 ease-in-out text-xs sm:text-sm shadow-sm hover:shadow-md">
                        Explore Now
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] order-1 md:order-2">
                    {/* Background Circles */}
                    <div className="absolute inset-0 z-0 flex justify-center items-center">
                        <div className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-teal-600 dark:bg-teal-700 rounded-full rotate-[-12deg] opacity-20 dark:opacity-30"></div>
                        <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] bg-cyan-600 dark:bg-cyan-700 rounded-full rotate-[12deg] opacity-15 dark:opacity-25 -ml-8 sm:-ml-10 -mt-8 sm:-mt-10"></div>
                    </div>

                    {/* Image */}
                    <img
                        loading="lazy"
                        src={exploreImage}
                        alt="Mother and child taking medicine"
                        decoding="async"
                        className="relative z-10 w-4/5 sm:w-3/4 md:w-11/12 max-w-md h-auto rounded-lg object-cover shadow-lg dark:shadow-gray-800/50"
                    />
                </div>

            </div>
        </section>
    );
});

export default Explore;