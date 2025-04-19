// components/Middletwo.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; 
import virtualTreatmentImage from '../../assets/doctorimg.png'; 
// ---

const Middletwo = () => {
    // Hook for the first section
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.3,
    });

    // Hook for the second section
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.3,
    });

    // List items data (optional, keeps JSX cleaner)
    const listItems = [
        "Schedule the appointment directly.",
        "Search for your doctor by name, specialty, or location.",
        "View our physicians who are accepting new patients; use the online searching tool to select an appointment time.",
    ];

    return (
        // Changed background, increased padding
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- First Section: Virtual Treatment (Text Left, Image Right) --- */}
                <div
                    ref={ref1} // Attach ref for scroll animation
                    className={`
                        grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16 mb-16 md:mb-24 // Increased gap & margin
                        transition-all duration-1000 ease-out
                        ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                >
                    {/* Left Column: Text Content */}
                    <div>
                        {/* Heading style updated */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Get virtual treatment anytime.</h2>

                        {/* List style updated with icons */}
                        <ul className="space-y-4 mb-8">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircleIcon className="flex-shrink-0 w-6 h-6 text-teal-500 mr-3 mt-1" aria-hidden="true" />
                                    <span className="text-lg text-gray-600 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button style updated */}
                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-base tracking-wide">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Right Column: Image */}
                    {/* Image container style updated */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={virtualTreatmentImage} // Use imported image
                            alt="Virtual Treatment"
                            className="w-full h-auto" // Removed rounding from img
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Middletwo;