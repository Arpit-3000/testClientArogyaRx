import React from 'react';
import { Search, Upload } from "lucide-react";

const Searchbar = () => {
    return (
        <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
            <div className="container mx-auto text-center px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                    What are you looking for?
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto bg-white/80 dark:bg-gray-700/80 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-lg border border-gray-200 dark:border-gray-600">
                    {/* Search Input */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search for Medicines"
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-all placeholder-gray-500 dark:placeholder-gray-400"
                            aria-label="Search for medicines"
                        />
                        <Search className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500 dark:text-gray-400 pointer-events-none" />
                    </div>

                    {/* Upload Button */}
                    <button 
                        className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg whitespace-nowrap w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        aria-label="Upload prescription"
                    >
                        <span className="text-sm sm:text-base">Upload Prescription</span>
                        <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>

                {/* Popular Searches */}
                <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Popular:</span>
                    {['Paracetamol', 'Vitamin C', 'Dolo 650', 'Azithromycin'].map((item, index) => (
                        <button 
                            key={index}
                            className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Searchbar;