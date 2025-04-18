// components/Midcard.js
import React from 'react';
import midcardData from '../../data/midcardData'; // adjust path based on your structure

const Midcard = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {midcardData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl overflow-hidden"
                    >
                        <div className="p-4">
                            <div className="relative rounded-md overflow-hidden mb-4">
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-40 object-cover rounded-md"
                                />
                            </div>
                            <h2 className="text-lg font-semibold text-white mb-2">{item.title}</h2>
                            <p className="text-gray-300 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Midcard;
