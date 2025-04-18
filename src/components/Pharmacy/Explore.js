import React from 'react';

const Explore = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Text Section (Left on larger screens) */}
                <div className="text-left">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">SPECIAL SERVICE</h2>
                    <h3 className="text-3xl font-bold text-green-600 mb-4">Feel better And Rest Assured</h3>
                    <p className="text-gray-700 mb-6">
                        With our commitment to providing safe and effective medical and healthcare products, you can rest assured when you buy from HealthSaathi Pharmacy.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                        Explore Now
                    </button>
                </div>

                {/* Image Section (Right on larger screens) */}
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                    {/* Replace with your actual image path */}
                    <img
                        src="/path/to/your/explore-image.jpg"
                        alt="Mother and Child"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Explore;
