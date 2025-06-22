import React from 'react';
import { motion } from 'framer-motion'; // Adding some subtle animation

const Middle = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto justify-items-center  ">
                
                {/* Text Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-left p-8 rounded-3xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-2xl"
                >
                    <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                        Your health, made affordable
                    </h2>
                    <p className="text-white text-lg leading-relaxed">
                        At <span className="font-bold text-yellow-200">ArogyaRx</span> , we believe everyone deserves access to quality medication at fair prices.
                        We cut out unnecessary costs and partner directly with manufacturers to bring you the savings you need. 
                        Whether you're refilling a prescription or trying a new supplement, you can feel confident knowing you're getting the best value for your health. 
                        With HealthSaathi, staying healthy is always within reach.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Middle;
