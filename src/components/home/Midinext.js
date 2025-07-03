import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Midinext = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    return (
        <section
            ref={ref}
            className={`
                bg-white dark:bg-gray-900 py-16 sm:py-20 lg:py-24
                transition-all duration-700 ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
                <ShieldCheckIcon 
                    className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-teal-500 dark:text-teal-400" 
                    aria-hidden="true"
                />

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight sm:leading-snug lg:leading-snug bg-gradient-to-r from-teal-500 to-green-500 dark:from-teal-400 dark:to-green-400 bg-clip-text text-transparent">
  {t('midinext.title')}
</h2>


                <div className="w-20 sm:w-24 h-1 bg-teal-500 dark:bg-teal-400 mx-auto mb-6 sm:mb-8"></div>

                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t('midinext.description')}
                </p>

                <div className="mt-8 sm:mt-10">
                    <button className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base">
                        {t('midinext.buttonText')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Midinext;