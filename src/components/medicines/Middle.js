import React from 'react';

const Middle = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Text Section (Left on larger screens) */}
                <div className="text-left bg-green-500 p-6 rounded-lg">
                    <h2 className="text-3xl font-bold text-white mb-4">Your health, made affordable</h2>
                    <p className="text-white">
                        At HealthSaathi, we believe everyone deserves access to quality medication at fair prices. We cut out unnecessary costs and partner directly with manufacturers to bring you the savings you need. So whether you're refilling a prescription or trying a new supplement, you can feel confident knowing you're getting the best value for your health. With HealthSaathi, staying healthy is always within reach.
                    </p>
                </div>

                {/* Image Section (Right on larger screens) */}
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                    {/* Replace with your actual image path */}
                    <img
                        src="/path/to/your/health-affordable-image.jpg"
                        alt="Couple smiling"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Middle;
