import React from 'react';
import { useNavigate } from 'react-router-dom';
import medicineImg from '../../assets/labtestimages/labshero.svg';

const Header = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                {/* Text Section */}
                <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-500 leading-tight">
                        Order Medicines & Get
                    </h2>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-red-600 dark:text-red-500 mb-2 sm:mb-4">
                        Up to 50% Off
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
                        Save big on health essentials. Shop from home and enjoy fast delivery with huge discounts.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button
                            onClick={() => navigate('/medicines')}
                            className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold px-6 py-2.5 sm:px-8 sm:py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        >
                            Shop Now
                        </button>
                        <button
                            onClick={() => navigate('/upload-prescription')}
                            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold px-6 py-2.5 sm:px-8 sm:py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        >
                            Upload Prescription
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative group order-1 lg:order-2">
                    <img
                        src={medicineImg}
                        alt="Order Medicines"
                        className="rounded-2xl shadow-xl w-full h-auto max-w-lg mx-auto transform group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                    />
                </div>
            </div>

            {/* Prescription Upload Info */}
            <div className="container mx-auto mt-8 sm:mt-12 px-4 sm:px-6">
                <div className="bg-blue-600 dark:bg-blue-800 bg-opacity-90 p-4 sm:p-6 rounded-xl shadow-md text-center backdrop-blur-sm">
                    <p className="text-white text-base sm:text-lg font-medium">
                        Need help with booking your test?{' '}
                        <button 
                            onClick={() => navigate('/upload-prescription')}
                            className="text-green-300 dark:text-green-400 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 rounded"
                        >
                            Upload a Prescription
                        </button>{' '}
                        to book a test.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Header;