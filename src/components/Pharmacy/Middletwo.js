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
        <section className="mt-10 py-16 md:py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="space-y-8 md:space-y-10">
                    {cardRowsData.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col md:flex-row gap-8 md:gap-10">
                            {row.map((card, cardIndex) => (
                                <div
                                    key={cardIndex}
                                    className={`bg-white rounded-2xl p-6 ${card.widthClass} flex flex-col`}
                                >
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{card.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                                        {card.description2 && (
                                            <p className="text-gray-600 text-sm mb-4">{card.description2}</p>
                                        )}
                                    </div>
                                    <img
                                        loading="lazy"
                                        src={card.imgSrc}
                                        alt={card.alt}
                                        className="w-full h-48 md:h-52 lg:h-60 object-cover rounded-xl mt-auto"
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