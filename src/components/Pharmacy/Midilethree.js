import React from 'react';
import { useTranslation } from 'react-i18next';
import medicalCareImage from '../../assets/pharmacyimages/e2.png';
import healthCareImage from '../../assets/pharmacyimages/l4.png';
import instantDeliveryImage from '../../assets/pharmacyimages/e3.png';

const Midilethree = React.memo(() => {
  const { t } = useTranslation();

  const cardData = t('middle3.midilethree.cards', { returnObjects: true });

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700/50 overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-gray-600/50 hover:scale-[1.02] md:hover:scale-[1.03]"
            >
              <div className="overflow-hidden">
                <img
                  loading="lazy"
                  src={index === 0 ? medicalCareImage : index === 1 ? healthCareImage : instantDeliveryImage}
                  alt={card.alt}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm flex-grow">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Midilethree;