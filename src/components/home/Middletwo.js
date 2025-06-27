import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon } from '@heroicons/react/24/solid'; 
import virtualTreatmentImage from '../../assets/doctorimg.png';

const Middletwo = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const listItems = [
        "Schedule the appointment directly.",
        "Search for your doctor by name, specialty, or location.",
        "View our physicians who are accepting new patients; use the online searching tool to select an appointment time.",
    ];

    return (
        <section className="bg-white dark:bg-gray-900 py-16 sm:py-20 lg:py-24 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={ref1}
                    className={`
                        grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-16
                        transition-all duration-700 ease-out
                        ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                >
                    {/* Left Column: Text Content */}
                    <div className="order-2 md:order-1">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                            Get virtual treatment anytime.
                        </h2>

                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircleIcon className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-teal-500 dark:text-teal-400 mr-3 mt-0.5" />
                                    <span className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-medium sm:font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base tracking-wide">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Right Column: Image */}
                    <div className="order-1 md:order-2 relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-800/50">
                        <img
                            src={virtualTreatmentImage}
                            alt="Virtual Treatment"
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Middletwo;