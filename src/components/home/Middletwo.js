// components/Middletwo.js
import React from 'react';

const Middletwo = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto">
                {/* First Section: Virtual Treatment */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-blue-700 mb-4">Get virtual treatment anytime.</h2>
                        <ul className="list-decimal list-inside text-gray-600 mb-6">
                            <li>Schedule the appointment directly.</li>
                            <li>Search for your doctor by name, specialty, or location.</li>
                            <li>View our physicians who are accepting new patients; use the online searching tool to select an appointment time.</li>
                        </ul>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                        {/* Important: Replace with your actual image path */}
                        <img
                            src="/path/to/virtual-treatment-image.jpg"
                            alt="Virtual Treatment"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

                {/* Second Section: Our Top-Rated Doctors */}
                <div className="text-center py-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our top-rated Doctors</h2>
                    <p className="text-gray-600">
                        World-class care for everyone. Our health system offers unmatched, expert healthcare.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Middletwo;
