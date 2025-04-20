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
        <section className="py-20 bg-gradient-to-b from-white to-gray-100">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Image Section */}
                <div className="w-full rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={sideDoc1}
                        alt="Frequently Asked Questions"
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>

                {/* Text Section */}
                <div>
                    <h2 className="text-4xl font-bold text-blue-700 mb-6 leading-tight">
                        Most Questions by Our <span className="text-indigo-600">Beloved Customers</span>
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Here are some of the most common questions we get. We’ve got you covered!
                    </p>

                    <div className="space-y-5">
                        {questionData.map((item, index) => {
                            const isOpen = activeIndex === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md"
                                >
                                    <div
                                        className="flex justify-between items-center p-5 cursor-pointer group"
                                        onClick={() => toggleAnswer(index)}
                                    >
                                        <span className="text-gray-800 font-medium group-hover:text-blue-600 transition duration-200">
                                            {item.question}
                                        </span>
                                        <span className="transition-transform duration-300">
                                            {isOpen ? (
                                                <MinusCircle className="text-blue-500 h-6 w-6 transform rotate-180" />
                                            ) : (
                                                <PlusCircle className="text-blue-500 h-6 w-6" />
                                            )}
                                        </span>
                                    </div>
                                    <div
                                        className={`px-5 pb-4 transition-all duration-500 overflow-hidden text-gray-600 text-sm ${
                                            isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
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
