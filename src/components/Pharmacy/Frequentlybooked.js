import React from 'react';
import bookedData from '../../data/bookedData';

const Frequentlybooked = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-center">Frequently Booked Lab Tests</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {bookedData.map((test, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
                            style={{
                                backgroundImage: `url(${test.backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="p-4 bg-white/80 backdrop-blur-md">
                                <div className="text-sm text-red-500 mb-2">{test.discount}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{test.description}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-gray-900 font-bold text-xl">₹{test.price}</p>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        ADD
                                    </button>
                                </div>
                                <p className="text-gray-400 text-sm">₹{test.originalPrice}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Frequentlybooked;
