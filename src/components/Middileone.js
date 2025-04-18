// components/Middileone.js
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Middileone = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Find a Doctor Card */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    {/* Replace with your actual doctor image path */}
                    <img src="/path/to/doctor-image.jpg" alt="Find a Doctor" className="w-32 h-32 rounded-full mb-4 object-cover" />
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Find a Doctor</h3>
                    <p className="text-gray-600 text-sm text-center mb-4">
                        World-class care for everyone. Our health system offers unmatched, expert healthcare.
                    </p>
                    <button className="flex items-center text-blue-500 hover:text-blue-700 transition-colors">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>

                {/* Book Appointments Card */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    {/* Replace with your actual appointment image path */}
                    <img src="/path/to/appointment-image.jpg" alt="Book Appointments" className="w-32 h-32 rounded-full mb-4 object-cover" />
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Book Appointments</h3>
                    <p className="text-gray-600 text-sm text-center mb-4">
                        World-class care for everyone. Our health system offers unmatched, expert healthcare.
                    </p>
                    <button className="flex items-center text-blue-500 hover:text-blue-700 transition-colors">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>

                {/* Find a Location Card */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                    {/* Replace with your actual location image path */}
                    <img src="/path/to/location-image.jpg" alt="Find a Location" className="w-32 h-32 rounded-full mb-4 object-cover" />
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Find a Location</h3>
                    <p className="text-gray-600 text-sm text-center mb-4">
                        World-class care for everyone. Our health system offers unmatched, expert healthcare.
                    </p>
                    <button className="flex items-center text-blue-500 hover:text-blue-700 transition-colors">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Middileone;
