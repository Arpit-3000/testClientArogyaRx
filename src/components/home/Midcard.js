import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import midcardData from '../../data/midcardData';
import { useTranslation } from 'react-i18next';

const Midcard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleCardClick = (index) => {
        if (index === 0) {
            navigate('/medicines');
        } else if (index === 1) {
            navigate('/labtest');
        }
    };

    return (
        <div
            ref={ref}
            className={`
                container mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8
                transition-all duration-1000 ease-out
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {midcardData.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(index)}
                        className="group bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:shadow-gray-700/50 
                                  transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 
                                  rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                            <img
                                src={item.imageUrl}
                                alt={t(`midcard.cards.${index}.title`)}
                                className="w-full h-48 sm:h-52 md:h-60 object-cover rounded-t-2xl 
                                          transition-transform duration-300 ease-in-out group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-4 sm:p-5">
                            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                                {t(`midcard.cards.${index}.title`)}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {t(`midcard.cards.${index}.description`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Midcard;