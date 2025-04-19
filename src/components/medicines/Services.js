import React from 'react';

const Services = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Healthcare Online Medical Delivery */}
                <div className="flex flex-col items-center">
                    {/* Replace with your actual healthcare online image path */}
                    <img
                        src="/path/to/healthcare-online.jpg"
                        alt="Healthcare Online Medical Delivery"
                        className="w-48 h-48 object-contain rounded-md mb-4"
                    />
           
                </div>

                {/* Order Medicines Discount 50% */}
                <div className="flex flex-col items-center">
                    {/* Replace with your actual order medicines image path */}
                    <img
                        src="/path/to/order-medicines.jpg"
                        alt="Order Medicines"
                        className="w-48 h-48 object-contain rounded-md mb-4"
                    />
                 
                </div>

                {/* Healthcare Online Medical Delivery (Repeat) */}
                <div className="flex flex-col items-center">
                    {/* Replace with your actual healthcare online image path */}
                    <img
                        src="/path/to/healthcare-online.jpg"
                        alt="Healthcare Online Medical Delivery"
                        className="w-48 h-48 object-contain rounded-md mb-4"
                    />
                
                </div>
            </div>
        </section>
    );
};

export default Services;
