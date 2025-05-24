import React from 'react';
import { useNavigate } from 'react-router-dom';
import medicineImg from '../../assets/labtestimages/labshero.svg';

const Header = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 text-white">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Text Section */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-extrabold text-blue-600 leading-tight">
                        Order Medicines & Get
                    </h2>
                    <h3 className="text-5xl font-black text-red-600">Up to 50% Off</h3>
                    <p className="text-lg text-gray-700 max-w-md">
                        Save big on health essentials. Shop from home and enjoy fast delivery with huge discounts.
                    </p>

                    <button
                        onClick={() => navigate('/medicines')}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        Shop Now
                    </button>
                </div>

                {/* Image Section */}
                <div className="relative group">
                    <img
                        src={medicineImg}
                        alt="Order Medicines"
                        className="rounded-2xl shadow-xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Prescription Upload Info */}
            <div className="container mx-auto mt-12 px-6">
                <div className="bg-[#1e293b] bg-opacity-70 p-6 rounded-xl shadow-md text-center">
                    <p className="text-gray-200 text-lg font-medium">
                        Need help with booking your test? <span className="text-green-400 font-semibold">Upload a Prescription</span> to book a test.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Header;
