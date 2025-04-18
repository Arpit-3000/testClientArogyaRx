// components/Midcard.js
import React from 'react';
// 1. Import the hook
import { useInView } from 'react-intersection-observer';
import midcardData from '../../data/midcardData'; // adjust path

const Midcard = () => {
    // 2. Use the hook for the section container
    const { ref, inView } = useInView({
        triggerOnce: true, // Animate only once
        threshold: 0.1,    // Trigger when 10% is visible
    });

    return (
        // 3. Attach ref and apply conditional classes to the main section container
        <div
            ref={ref}
            className={`
                container mx-auto py-12 px-4 sm:px-6 lg:px-8
                transition-all duration-1000 ease-out /* Animation timing */
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} /* Appear animation */
            `}
        >
            {/* Grid and card content remains the same as the previous static version */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {midcardData.map((item, index) => (
                    <div
                        key={index}
                        // Card styles (no animation needed here as the parent animates)
                        className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <div className="relative overflow-hidden">
                             <img
                                src={item.imageUrl} // Assumes imported local image
                                alt={item.title}
                                className="w-full h-60 object-cover rounded-t-2xl transition-transform duration-300 ease-in-out group-hover:scale-105"
                             />
                        </div>
                        <div className="p-5">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h2>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Midcard;