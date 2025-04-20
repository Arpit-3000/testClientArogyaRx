import React from 'react';
import { motion } from 'framer-motion';

import medicalCareImage from '../../assets/pharmacyimages/medicalboxpharmacy.jpg';
import healthCareImage from '../../assets/pharmacyimages/healthcareimg.jpg';
import instantDeliveryImage from '../../assets/pharmacyimages/instantpharmacy.jpg';

const Midilethree = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    // Use the imported image variables in cardData
    const cardData = [
        {
            imgSrc: medicalCareImage, // Use imported image variable
            alt: "Medical Care Interface",
            title: "Medicine Box",
            description: "All your medications, packed and shipped directly to your doorstep. Convenient, right?",
        },
        {
            imgSrc: healthCareImage, // Use imported image variable
            alt: "Health Care Box",
            title: "Health Care",
            description: "Get the best health care products and boost your well-being. Awesome!",
        },
        {
            imgSrc: instantDeliveryImage, // Use imported image variable
            alt: "Instant Delivery Package",
            title: "Instant Delivery",
            description: "Experience our lightning-fast Instant Delivery option. Sounds like fiction, but it's a fact.",
        },
    ];

    return (
        <motion.section
            className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
                >
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03]"
                            variants={itemVariants}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={card.imgSrc} // src now uses the imported variable
                                    alt={card.alt}
                                    className="w-full h-48 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 md:p-6 flex-grow flex flex-col">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                                <p className="text-gray-500 text-sm flex-grow">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Midilethree;