import React from 'react';
import { Search, Upload } from "lucide-react";

const Searchbar = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    What are you looking for?
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto bg-white/60 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200">
                    {/* Search Input */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search for Medicines"
                            className="w-full px-5 py-3 rounded-lg border border-gray-300 bg-white/80 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
                    </div>

                    {/* Upload Button */}
                    <button className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md whitespace-nowrap">
                        <span>Upload Prescription</span>
                        <Upload className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
