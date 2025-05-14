import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // 🛜 Import useNavigate
import midcardData from '../../data/midcardData'; // adjust path

const Midcard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const navigate = useNavigate(); // 🛜 Hook to navigate programmatically

    // 🔥 Function to handle card click
    const handleCardClick = (index) => {
        if (index === 0) {
            navigate('/medicines');
        } else if (index === 1) {
            navigate('/labtest');
        }
        // For other cards, you can add more conditions if needed
    };

    return (
        <div
            ref={ref}
            className={`
                container mx-auto py-12 px-4 sm:px-6 lg:px-8
                transition-all duration-1000 ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {midcardData.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(index)} // 🛜 Add onClick here
                        className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={item.imageUrl}
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
