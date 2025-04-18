import React from 'react';

const Question = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-left">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start justify-between">
                        <span className="text-gray-700">How does HealthSaathi ensure quality?</span>
                    </div>
                    <div className="flex items-start justify-between">
                        <span className="text-gray-700">What payment methods are accepted?</span>
                    </div>
                    <div className="flex items-start justify-between">
                        <span className="text-gray-700">What about non-prescription drugs?</span>
                    </div>
                    <div className="flex items-start justify-between">
                        <span className="text-gray-700">How to return a product?</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;
