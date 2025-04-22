import React from 'react';

const Middleone = () => {
    const steps = [
        {
            title: "Vaccinated Phlebotomists",
            description: "Only phlebotomists who have been vaccinated are assigned tasks.",
        },
        {
            title: "Maintains Safety Protocols",
            description: "The phlebotomist adheres to safety protocols by wearing a mask, face shield, and gloves. Additionally, they sanitize themselves before going to the designated location.",
        },
        {
            title: "Sample collection",
            description: "Phlebotomists who have received vaccinations collect blood samples using a syringe and transfer them into barcoded vials for proper identification.",
        },
        {
            title: "Accurate Digital Reports",
            description: "Phlebotomists, having been vaccinated, gather blood samples using a syringe and subsequently transfer them into vials with barcodes to ensure accurate identification.",
        },
    ];

    return (
        <section className="py-16 bg-white px-4 lg:px-20">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Benefits with Arogya RX</h2>
            <p className="text-sm text-blue-600 mb-8">Get 10% Health Cashback* T&C</p>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Left side: How it works */}
                <div>
                    <h3 className="text-lg font-semibold mb-6 text-gray-800">How does it work?</h3>
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4 mb-6">
                            <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 font-semibold flex items-center justify-center">
                                {index + 1}
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
                    <h3 className="text-lg font-semibold mb-6 text-gray-800">Why book lab tests with Arogya RX?</h3>
                    <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-700">
                        <div>Fast &<br />Hassle Free</div>
                        <div>Book Test<br />by one click of a button</div>
                        <div>At Home<br />Collection</div>
                        <div>100 % Safe<br />&Secure</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Middleone;
