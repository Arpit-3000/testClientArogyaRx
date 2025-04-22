import React from 'react';

const Health = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <h2 className="text-2xl font-semibold text-blue-700 mb-8 text-left">Find Tests by Health Concern</h2>
                <div className="flex flex-wrap justify-between gap-4">
                    {/* Fever */}
                    <div className="flex flex-col items-center">
                        {/* Replace with your actual fever image path */}
                        <img src="/path/to/fever.jpg" alt="Fever" className="w-24 h-24 object-contain rounded-full mb-2" />
                        <p className="text-gray-700">Fever</p>
                    </div>

                    {/* Diabetes */}
                    <div className="flex flex-col items-center">
                         {/* Replace with your actual diabetes image path */}
                        <img src="/path/to/diabetes.jpg" alt="Diabetes" className="w-24 h-24 object-contain rounded-full mb-2" />
                        <p className="text-gray-700">Diabetes</p>
                    </div>

                    {/* Skin */}
                    <div className="flex flex-col items-center">
                         {/* Replace with your actual skin image path */}
                        <img src="/path/to/skin.jpg" alt="Skin" className="w-24 h-24 object-contain rounded-full mb-2" />
                        <p className="text-gray-700">Skin</p>
                    </div>

                    {/* Kidney */}
                    <div className="flex flex-col items-center">
                         {/* Replace with your actual kidney image path */}
                        <img src="/path/to/kidney.jpg" alt="Kidney" className="w-24 h-24 object-contain rounded-full mb-2" />
                        <p className="text-gray-700">Kidney</p>
                    </div>

                    {/* Digestion */}
                    <div className="flex flex-col items-center">
                         {/* Replace with your actual digestion image path */}
                        <img src="/path/to/digestion.jpg" alt="Digestion" className="w-24 h-24 object-contain rounded-full mb-2" />
                        <p className="text-gray-700">Digestion</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Health;
