import React from 'react';
import { ShieldCheck, Syringe, FileText, UserCheck } from 'lucide-react';

const Middleone = () => {
    const steps = [
        {
            icon: <UserCheck className="text-blue-600 w-5 h-5" />,
            title: "Vaccinated Phlebotomists",
            description: "Only phlebotomists who have been vaccinated are assigned tasks.",
        },
        {
            icon: <ShieldCheck className="text-green-600 w-5 h-5" />,
            title: "Maintains Safety Protocols",
            description: "Follows safety protocols: mask, shield, gloves, and sanitization.",
        },
        {
            icon: <Syringe className="text-red-600 w-5 h-5" />,
            title: "Sample Collection",
            description: "Samples are collected using barcoded vials for identification.",
        },
        {
            icon: <FileText className="text-purple-600 w-5 h-5" />,
            title: "Accurate Digital Reports",
            description: "Digital reports are precise and securely identified via barcodes.",
        },
    ];

    return (
        <section className="py-20 px-4 lg:px-24 ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Benefits with Arogya RX</h2>
                <p className="text-sm text-blue-600 mb-12 text-center">Get 10% Health Cashback* T&C</p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left side: How it works */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">How does it work?</h3>
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-4 items-start mb-6 bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-shadow duration-300">
                                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                                    {step.icon}
                                </div>
                                <div>
                                    <h4 className="text-md font-semibold text-gray-800">{step.title}</h4>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side: Why book lab tests */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Why book lab tests with Arogya RX?</h3>
                        <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                                <p className="font-semibold text-blue-700">Fast &<br />Hassle-Free</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                                <p className="font-semibold text-blue-700">Book Test<br />with One Click</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                                <p className="font-semibold text-blue-700">At Home<br />Collection</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                                <p className="font-semibold text-blue-700">100% Safe<br />& Secure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Middleone;
