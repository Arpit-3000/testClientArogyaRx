import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="relative py-32 overflow-hidden">


            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto text-center px-4 z-10 relative"
            >
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl md:text-6xl font-extrabold text-green-600 mb-6 tracking-tight"
                >
                    Arogya RX
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="bg-green-200/50 backdrop-blur-sm shadow-md rounded-3xl py-6 px-8 mb-10 max-w-2xl mx-auto"
                >
                    <h2 className="text-2xl font-semibold text-green-800 mb-2">Order Now!</h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Experience the ease of accessing quality healthcare and medications without the need to navigate through aisles. <br />
                        <span className="text-green-800 font-medium">HealthSaathi</span> brings the convenience of top-notch healthcare directly to your doorstep.
                    </p>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Start Scrolling
                </motion.button>
            </motion.div>
        </header>
    );
};

export default Header;
