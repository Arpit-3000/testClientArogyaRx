// components/Midi.js
import React from 'react';

const Midi = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto">
                {/* First Section: Image on the Right, Text on the Left */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-12">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">High-End Technology Meets Healthcare</h2>
                        <p className="text-gray-700 mb-6">
                            Leveraging cutting-edge medical technology, we offer virtual consultations with accomplished medical professionals.
                        </p>
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                        {/* Important: Replace with your actual image path */}
                        <img
                            src="/path/to/your/tech-healthcare-image.jpg"
                            alt="High-Tech Healthcare"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>

                {/* Second Section: Image on the Left, Text on the Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                        {/* Important: Replace with your actual image path */}
                        <img
                            src="/path/to/your/easy-access-image.jpg"
                            alt="Easy Access Healthcare"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="text-left">
                        <h2 className="text-2xl font-semibold text-green-600 mb-4">Easy Accessibility. Anytime, Anywhere.</h2>
                        <p className="text-gray-700">
                            No more geographical constraints. Get the best healthcare in your hand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Midi;
