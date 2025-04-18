import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import questionData from '../data/questionData';

const Question = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Image Section */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="/path/to/your/question-image.jpg"
                        alt="Frequently Asked Questions"
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-left">
                        Most questions by our beloved customers
                    </h2>
                    <div className="space-y-4">
                        {questionData.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg p-4 bg-white shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAnswer(index)}>
                                    <span className="text-gray-800 font-medium">{item.question}</span>
                                    {activeIndex === index ? (
                                        <MinusCircle className="text-blue-500 h-6 w-6" />
                                    ) : (
                                        <PlusCircle className="text-blue-500 h-6 w-6" />
                                    )}
                                </div>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        activeIndex === index ? 'max-h-[500px] mt-3' : 'max-h-0'
                                    }`}
                                >
                                    <p className="text-gray-600 text-sm">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;
