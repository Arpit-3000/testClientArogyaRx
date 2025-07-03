import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import a4 from '../../assets/a4.png';
import a5 from '../../assets/a5.png';

const Midi = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    return (
        <section className="bg-white dark:bg-gray-900 py-16 sm:py-20 lg:py-24 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* First Section */}
                <div
                    ref={ref1}
                    className={`
                        grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20
                        transition-all duration-700 ease-out
                        ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                >
                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                            {t('midi.section1.title')}
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                            {t('midi.section1.description')}
                        </p>
                    </div>

                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-800/50">
                        <img
                            src={a4}
                            alt={t('midi.section1.imageAlt')}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Second Section */}
                <div
                    ref={ref2}
                    className={`
                        grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 lg:gap-12
                        transition-all duration-700 ease-out delay-200
                        ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                >
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-800/50 md:order-first">
                        <img
                            src={a5}
                            alt={t('midi.section2.imageAlt')}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>
                    
                    <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                            {t('midi.section2.title')}
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('midi.section2.description')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Midi;