import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Lastcomp = () => {
    const { t } = useTranslation();
    return (
        <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto text-center px-4 sm:px-6">
                
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-blue-500 mb-4 sm:mb-6 leading-tight"
                >
                    {t('lastComp.title')}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    {t('lastComp.description')}
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-green-400/40 dark:hover:shadow-green-600/40 transition-all duration-300 text-sm sm:text-base"
                >
                    {t('lastComp.buttonText')}
                </motion.button>
            </div>
        </section>
    );
};

export default Lastcomp;