import React from 'react';
import bookedtestData from '../../data/bookedtestData';

const Bookedtest = () => {
    return (
        <section className="py-20  text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
                    Frequently Booked Lab Tests
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bookedtestData.map((test, index) => (
                        <div
                            key={index}
                            className="bg-white text-black rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={test.image}
                                alt={test.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4 space-y-2">
                                <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                                    {test.discount}
                                </span>
                                <h3 className="text-lg font-bold">{test.title}</h3>
                                <p className="text-sm text-gray-600">{test.description}</p>
                                <div className="pt-2">
                                    <p className="text-xl font-bold text-green-600">₹ {test.price}</p>
                                    <p className="text-sm text-gray-400 line-through">₹ {test.originalPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bookedtest;
