import React from 'react';

const Middletwo = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto space-y-6">
                
                {/* Row 1 - Left wider, right narrower */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Card (Wider) */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:w-2/3">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Easy-order</h3>
                        <p className="text-gray-600 text-sm mb-4">Order medicines with few simple clicks</p>
                        <img src="/path/to/easy-order-image.jpg" alt="Easy Order" className="w-full h-48 object-cover rounded-md mb-4" />
                    </div>

                    {/* Right Card (Narrower) */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:w-1/3">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Track</h3>
                        <p className="text-gray-600 text-sm mb-4">Track your medicine dispatch</p>
                        <img src="/path/to/track-order-image.jpg" alt="Track Order" className="w-full h-48 object-cover rounded-md mb-4" />
                    </div>
                </div>

                {/* Row 2 - Left narrower, right wider */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Card (Narrower) */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:w-1/3">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">24X7</h3>
                        <p className="text-gray-600 text-sm mb-4">We are available 24x7 for you</p>
                        <img src="/path/to/24x7-support.jpg" alt="24X7 Support" className="w-full h-48 object-cover rounded-md mb-4" />
                    </div>

                    {/* Right Card (Wider) */}
                    <div className="bg-white rounded-lg shadow-md p-6 md:w-2/3">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">Discounts</h3>
                        <p className="text-gray-600 text-sm mb-4">Amazing discounts on all products</p>
                        <p className="text-gray-600 text-sm mb-4">Up to ₹350 cashback On all Medicine / healthcare needs</p>
                        <img src="/path/to/discounts-image.jpg" alt="Discounts" className="w-full h-48 object-cover rounded-md mb-4" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Middletwo;
