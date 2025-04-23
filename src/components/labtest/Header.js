import React from 'react';

const Header = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Text Section (Left on larger screens) */}
                <div>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Order Medicines and get Upto</h2>
                    <h3 className="text-3xl font-bold text-red-600 mb-4">Discount 50%</h3>
                     {/* Replace with your actual image path */}
                    <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">Shop Now</button>
                </div>

                {/* Image Section (Right on larger screens) */}
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                    {/* Replace with your actual image path */}
                    <img
                        src="/path/to/your/order-medicine-image.jpg"
                        alt="Doctor and Patient"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
             <div className="container mx-auto mt-8 py-4 bg-green-100 rounded-md">
             <p className="text-gray-700 text-center">Need help with booking your test? Upload a Prescription to book a test</p>
             </div>
        </section>
    );
};

export default Header;
