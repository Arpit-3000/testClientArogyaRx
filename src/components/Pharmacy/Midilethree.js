import React from 'react';

const Midilethree = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Medicine Box */}
                <div className="flex flex-col items-center">
                    {/* Replace with your actual medicine box image path */}
                    <img src="/path/to/medicine-box.jpg" alt="Medicine Box" className="w-48 h-48 object-contain rounded-md mb-4" />
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Medicine Box</h3>
                    <p className="text-gray-600 text-sm text-center">
                        All your medications, packed and shipped directly to your doorstep. Convenient, right?
                    </p>
                </div>

                {/* Health Care */}
                <div className="flex flex-col items-center">
                    {/* Replace with your actual health care image path */}
                    <img src="/path/to/health-care.jpg" alt="Health Care" className="w-48 h-48 object-contain rounded-md mb-4" />
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Health Care</h3>
                    <p className="text-gray-600 text-sm text-center">
                        Get the best health care products and boost your well-being. Awesome!
                    </p>
                </div>

                {/* Instant Delivery */}
                <div className="flex flex-col items-center">
                    {/* Replace with your actual instant delivery image path */}
                    <img src="/path/to/instant-delivery.jpg" alt="Instant Delivery" className="w-48 h-48 object-contain rounded-md mb-4" />
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Instant Delivery</h3>
                    <p className="text-gray-600 text-sm text-center">
                        Experience our lightning-fast Instant Delivery option. Sounds like fiction, but it&apos;s a fact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Midilethree;
