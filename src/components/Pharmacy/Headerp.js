import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-green-100 to-transparent py-32">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-green-600 mb-4">Arogya RX</h1>
                <div className="bg-green-300/50 rounded-full py-4 px-6 mb-8 max-w-xl mx-auto">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Order Now!</h2>
                    <p className="text-gray-700 text-sm">
                        Experience the ease of accessing quality healthcare and medications without the need to navigate through aisles.
                        HealthSaathi brings the convenience of top-notch healthcare directly to your doorstep.
                    </p>
                </div>
                <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
                    Start Scrolling
                </button>
            </div>
        </header>
    );
};

export default Header;
