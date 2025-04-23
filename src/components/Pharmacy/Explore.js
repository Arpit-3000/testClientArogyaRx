import React from 'react';
import exploreImage from '../../assets/pharmacyimages/feel.png';

const Explore = React.memo(() => {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-8">

                {/* Left Content */}
                <div className="text-left md:pr-8">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        SPECIAL SERVICE
                    </h2>
                    <h3 className="text-3xl lg:text-4xl font-bold text-teal-800 mb-4 leading-tight">
                        Feel better <br /> And Rest Assured
                    </h3>
                    <p className="text-gray-600 mb-8 text-base">
                        With our commitment to providing safe and effective medical and healthcare products, you can rest assured when you buy from HealthSaathi Pharmacy.
                    </p>
                    <button className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-200 border border-gray-200 transition-colors duration-300 ease-in-out text-sm shadow-sm">
                        Explore Now
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center items-center min-h-[350px] md:min-h-[450px]">
                    {/* Circles - moved to background for better rendering */}
                    <div className="absolute inset-0 z-0 flex justify-center items-center">
                        <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-teal-600 rounded-full rotate-[-12deg] opacity-20"></div>
                        <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-cyan-600 rounded-full rotate-[12deg] opacity-15 -ml-10 -mt-10"></div>
                    </div>

                    {/* Image */}
                    <img
                        loading="lazy"
                        src={exploreImage}
                        alt="Mother and child taking medicine"
                        decoding="async"
                        className="relative z-10 w-4/5 md:w-11/12 max-w-md h-auto rounded-lg object-cover shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
});

export default Explore;
