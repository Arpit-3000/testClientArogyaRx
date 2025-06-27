import React from 'react';
import easyOrderImage from '../../assets/pharmacyimages/image2.png';
import trackOrderImage from '../../assets/pharmacyimages/s3.png';
import support247Image from '../../assets/pharmacyimages/24.png';
import discountsImage from '../../assets/pharmacyimages/image3.png';

const cardRowsData = [
    [
        {
            title: "Easy-order",
            description: "Order medicines with few simple clicks",
            imgSrc: easyOrderImage,
            alt: "Man ordering medicines on phone",
            widthClass: "md:w-2/3"
        },
        {
            title: "Track",
            description: "Track your medicine dispatch",
            imgSrc: trackOrderImage,
            alt: "Tracking order on phone map",
            widthClass: "md:w-1/3"
        }
    ],
    [
        {
            title: "24X7",
            description: "We are available 24x7 for you",
            imgSrc: support247Image,
            alt: "24x7 support graphic",
            widthClass: "md:w-1/3"
        },
        {
            title: "Discounts",
            description: "Amazing discounts on all products",
            description2: "Up to ₹350 cashback On all Medicine / healthcare needs",
            imgSrc: discountsImage,
            alt: "Medicines and healthcare products with discount graphic",
            widthClass: "md:w-2/3"
        }
    ]
];

const Middletwo = React.memo(() => {
    return (
        <section className="mt-8 sm:mt-10 py-14 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="space-y-6 sm:space-y-8 md:space-y-10">
                    {cardRowsData.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10">
                            {row.map((card, cardIndex) => (
                                <div
                                    key={cardIndex}
                                    className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 ${card.widthClass} flex flex-col shadow-sm hover:shadow-md dark:hover:shadow-gray-700/50 transition-shadow duration-300`}
                                >
                                    <div className="flex-grow">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                                            {card.description}
                                        </p>
                                        {card.description2 && (
                                            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                                                {card.description2}
                                            </p>
                                        )}
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={card.imgSrc}
                                        alt={card.alt}
                                        className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-contain rounded-lg sm:rounded-xl mt-auto bg-gray-50 dark:bg-gray-700/50 p-2"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Middletwo;