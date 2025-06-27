import React from 'react';
import { motion } from 'framer-motion';
import bookedData from '../../data/bookedData';

const Frequentlybooked = () => {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 dark:text-blue-500 mb-10 sm:mb-14 text-center tracking-tight">
                    Frequently Booked Lab Tests
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {bookedData.map(({ backgroundImage, discount, title, description, price, originalPrice }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-800/50 transform transition-transform hover:scale-[1.03] sm:hover:scale-[1.04] hover:shadow-xl dark:hover:shadow-gray-700/50"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="p-4 sm:p-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sm:backdrop-blur-md rounded-xl sm:rounded-2xl min-h-[280px] sm:min-h-[300px] flex flex-col justify-between">
                                <div>
                                    <div className="text-xs sm:text-sm text-red-500 dark:text-red-400 font-semibold mb-2">
                                        {discount}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                                        {description}
                                    </p>
                                </div>

                                <div className="mt-4 sm:mt-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl">
                                            ₹{price}
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-600 dark:bg-blue-700 text-white py-1.5 sm:py-2 px-4 sm:px-5 rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 text-xs sm:text-sm"
                                        >
                                            ADD
                                        </motion.button>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 line-through">
                                        ₹{originalPrice}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(Frequentlybooked);