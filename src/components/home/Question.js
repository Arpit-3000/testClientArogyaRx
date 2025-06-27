import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import questionData from '../../data/questionData';
import sideDoc1 from '../../assets/sideDoc1.png';

const Question = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-12">
                {/* Image Section */}
                <div className="w-full rounded-xl overflow-hidden shadow-lg dark:shadow-gray-700/50 order-1 md:order-none">
                    <img
                        src={sideDoc1}
                        alt="Frequently Asked Questions"
                        className="w-full h-auto object-cover rounded-xl"
                        loading="lazy"
                    />
                </div>

                {/* FAQ Section */}
                <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-500 mb-4 sm:mb-6 leading-tight">
                        Most Questions by Our <span className="text-indigo-600 dark:text-indigo-400">Beloved Customers</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                        Here are some of the most common questions we get. We've got you covered!
                    </p>

                    <div className="space-y-4">
                        {questionData.map((item, index) => {
                            const isOpen = activeIndex === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md dark:hover:bg-gray-700/50"
                                >
                                    <div
                                        className="flex justify-between items-center p-4 sm:p-5 cursor-pointer group"
                                        onClick={() => toggleAnswer(index)}
                                    >
                                        <span className="text-gray-800 dark:text-gray-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-200">
                                            {item.question}
                                        </span>
                                        <span className="transition-transform duration-300">
                                            {isOpen ? (
                                                <MinusCircle className="text-blue-500 dark:text-blue-400 h-5 w-5 sm:h-6 sm:w-6" />
                                            ) : (
                                                <PlusCircle className="text-blue-500 dark:text-blue-400 h-5 w-5 sm:h-6 sm:w-6" />
                                            )}
                                        </span>
                                    </div>
                                    <div
                                        className={`px-4 sm:px-5 pb-0 transition-all duration-300 overflow-hidden text-gray-600 dark:text-gray-300 text-sm ${
                                            isOpen ? 'max-h-[500px] opacity-100 pb-4 sm:pb-5' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        {item.answer}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;