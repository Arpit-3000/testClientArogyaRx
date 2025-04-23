import React from 'react';
import medicalCareImage from '../../assets/pharmacyimages/e2.png';
import healthCareImage from '../../assets/pharmacyimages/l4.png';
import instantDeliveryImage from '../../assets/pharmacyimages/e3.png';

const cardData = [
    {
        imgSrc: medicalCareImage,
        alt: "Medical Care Interface",
        title: "Medicine Box",
        description: "All your medications, packed and shipped directly to your doorstep. Convenient, right?",
    },
    {
        imgSrc: healthCareImage,
        alt: "Health Care Box",
        title: "Health Care",
        description: "Get the best health care products and boost your well-being. Awesome!",
    },
    {
        imgSrc: instantDeliveryImage,
        alt: "Instant Delivery Package",
        title: "Instant Delivery",
        description: "Experience our lightning-fast Instant Delivery option. Sounds like fiction, but it's a fact.",
    },
];

const Midilethree = React.memo(() => {

    return (
        <section
            className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="container mx-auto px-4">
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
                 >
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03]"
                        >
                            <div className="overflow-hidden">
                                <img
                                    loading="lazy"
                                    src={card.imgSrc}
                                    alt={card.alt}
                                    className="w-full h-48 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 md:p-6 flex-grow flex flex-col">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                                <p className="text-gray-500 text-sm flex-grow">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Midilethree;