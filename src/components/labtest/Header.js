import React from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 import useNavigate

const Header = () => {
    const navigate = useNavigate(); // 👈 initialize navigate

    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Text Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Order Medicines and get Upto</h2>
                    <h3 className="text-3xl font-bold text-red-600 mb-4">Discount 50%</h3>

                    {/* Updated Button */}
                    <button
                        onClick={() => navigate('/medicines')} // 👈 Navigate to /medicines
                        className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
                    >
                        Shop Now
                    </button>
                </div>

                {/* Image Section */}
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <img
                        src="/path/to/your/order-medicine-image.jpg"
                        alt="Doctor and Patient"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>

            {/* Prescription Upload Info */}
            <div className="container mx-auto mt-8 py-4 bg-green-100 rounded-md">
                <p className="text-gray-700 text-center">
                    Need help with booking your test? Upload a Prescription to book a test
                </p>
            </div>
        </section>
    );
};

export default Header;
