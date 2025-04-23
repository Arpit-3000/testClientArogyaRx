import React from 'react';
import { motion } from 'framer-motion';
import bookedData from '../../data/bookedData';

const Frequentlybooked = () => {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="container mx-auto relative z-10 px-4 py-16">
                <h2 className="text-4xl font-bold text-blue-700 mb-14 text-center tracking-tight">
                    Frequently Booked Lab Tests
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bookedData.map(({ backgroundImage, discount, title, description, price, originalPrice }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.04] hover:shadow-2xl"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="p-5 bg-white/80 backdrop-blur-lg rounded-2xl min-h-[300px] flex flex-col justify-between">
                                <div>
                                    <div className="text-sm text-red-500 font-semibold mb-2">{discount}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                                    <p className="text-gray-700 text-sm">{description}</p>
                                </div>

                                <div className="mt-6">
                                    <div className="flex items-center justify-between">
                                        <p className="text-gray-900 font-bold text-xl">₹{price}</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-600 text-white py-2 px-5 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                                        >
                                            ADD
                                        </motion.button>
                                    </div>
                                    <p className="text-gray-500 text-xs mt-1 line-through">₹{originalPrice}</p>
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
