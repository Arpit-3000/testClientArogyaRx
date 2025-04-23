import React from 'react';
import bookedtestData from '../../data/bookedtestData';

const Bookedtest = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">Frequently Booked Lab Tests</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {bookedtestData.map((test, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4">
                            <div className="text-sm text-red-500 mb-2">{test.discount}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{test.description}</p>
                            <p className="text-gray-900 font-bold text-xl">₹ {test.price}</p>
                            <p className="text-gray-400 text-sm">₹ {test.originalPrice}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bookedtest;
