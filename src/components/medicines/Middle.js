import React from 'react';
import { motion } from 'framer-motion'; // Adding some subtle animation
import { useTranslation } from 'react-i18next';

const Middle = () => {
    const { t } = useTranslation();
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
                        {t('middleSection.title')}
                    </h2>
                    <p className="text-white text-lg leading-relaxed">
                        {t('middleSection.description1')} <span className="font-bold text-yellow-200">{t('app.title')}</span> {t('middleSection.description2')}
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Middle;
