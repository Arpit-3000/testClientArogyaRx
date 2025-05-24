import React from 'react';
import { motion } from 'framer-motion'; // for smooth entry animation

const Lastcomp = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto text-center px-6">
                
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold text-blue-700 mb-6 leading-tight"
                >
                    Ask your pharmacist, not the Internet.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Feeling stressed? Meds a mess? Ditch self-searching, web distress.
                    Visit our site, your Pharm&apos;s right there. Expert advice, healthy care.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-green-400/40 transition-all duration-300"
                >
                    ASK YOUR PHARMACIST
                </motion.button>
            </div>
        </section>
    );
};

export default Lastcomp;
