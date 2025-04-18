import React from 'react';

const Middileone = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Order Medicines Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                         <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                            FLAT 15% OFF
                        </div>
                       {/* Replace with your actual medicines image path */}
                        <img src="/path/to/medicines-image.jpg" alt="Order Medicines" className="w-full h-48 object-cover" />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Order Medicines</h3>
                        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors w-full">
                            Order Now
                        </button>
                    </div>
                </div>

                {/* Healthcare Products Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                         <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-md text-xs">
                            UPTO 60% OFF
                        </div>
                    {/* Replace with your actual healthcare products image path */}
                    <img src="/path/to/healthcare-products-image.jpg" alt="Healthcare Products" className="w-full h-48 object-cover" />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Healthcare Products</h3>
                        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors w-full">
                            Order Now
                        </button>
                    </div>
                </div>

                {/* Lab Tests Card */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                     <div className="relative">
                         <div className="absolute top-2 left-2 bg-pink-500 text-white px-2 py-1 rounded-md text-xs">
                            UPTO 70% OFF
                        </div>
                    {/* Replace with your actual lab tests image path */}
                    <img src="/path/to/lab-tests-image.jpg" alt="Lab Tests" className="w-full h-48 object-cover" />
                     </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Lab Tests</h3>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors w-full">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Middileone;
