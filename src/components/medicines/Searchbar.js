import React from 'react';
// import { Input } from "@/components/ui/input"  <-- Removed
// import { Button } from "@/components/ui/button"  <-- Removed
import { Search, Upload } from "lucide-react"

const Searchbar = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What are you looking for?</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search for Medicines"
                            className="w-full sm:w-[300px] px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center whitespace-nowrap">
                        Order with prescription.
                        <Upload className="ml-2 h-4 w-4" />
                        UPLOAD NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
