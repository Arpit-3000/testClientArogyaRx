import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="relative py-24 sm:py-28 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto text-center px-4 sm:px-6 z-10 relative"
            >
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-600 dark:text-green-500 mb-4 sm:mb-6 tracking-tight"
                >
                    Arogya RX
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-green-200/50 dark:bg-green-900/30 backdrop-blur-sm shadow-md rounded-2xl sm:rounded-3xl py-4 sm:py-6 px-6 sm:px-8 mb-8 sm:mb-10 max-w-2xl mx-auto"
                >
                    <h2 className="text-xl sm:text-2xl font-semibold text-green-800 dark:text-green-300 mb-2">
                        Order Now!
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        Experience the ease of accessing quality healthcare and medications without the need to navigate through aisles. <br className="hidden sm:block" />
                        <span className="text-green-800 dark:text-green-400 font-medium">HealthSaathi</span> brings the convenience of top-notch healthcare directly to your doorstep.
                    </p>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 dark:from-green-600 dark:to-teal-600 dark:hover:from-green-700 dark:hover:to-teal-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Start Scrolling
                </motion.button>
            </motion.div>
        </header>
    );
};

export default Header;