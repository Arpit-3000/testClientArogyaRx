import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';
import doctorIllustration from '../../assets/icon01.png';
import appointmentIllustration from '../../assets/icon02.png'; 
import locationIllustration from '../../assets/icon03.png'; 

const Middileone = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const { t } = useTranslation();

    const itemsData = [
        {
            id: 1,
            title: t('middleone.cards.doctor.title'),
            description: t('middleone.cards.doctor.description'),
            imageUrl: doctorIllustration, 
            linkUrl: "/find-doctor" 
        },
        {
            id: 2,
            title: t('middleone.cards.appointment.title'),
            description: t('middleone.cards.appointment.description'), 
            imageUrl: appointmentIllustration, 
            linkUrl: "/appointments" 
        },
        {
            id: 3,
            title: t('middleone.cards.prescription.title'),
            description: t('middleone.cards.prescription.description'), 
            imageUrl: locationIllustration,
            linkUrl: "/locations" 
        },
    ];

    return (
        <section 
            ref={sectionRef} 
            className="bg-white dark:bg-gray-900 py-16 sm:py-20 lg:py-24 transition-colors duration-300"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
                    {itemsData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`
                                flex flex-col items-center text-center p-6 sm:p-8
                                transition-all duration-700 ease-out
                                ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl
                            `}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-auto h-32 sm:h-40 mb-4 sm:mb-6 object-contain"
                                loading="lazy"
                            />
                            
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                                {item.title}
                            </h3>
                             
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed max-w-xs mx-auto">
                                {item.description}
                            </p>
                             
                            <a
                                href={item.linkUrl || '#'}
                                className="mt-auto flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-teal-500 hover:text-teal-500 dark:hover:border-teal-400 dark:hover:text-teal-400 transition-colors duration-300"
                                aria-label={item.title}
                            >
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Middileone;