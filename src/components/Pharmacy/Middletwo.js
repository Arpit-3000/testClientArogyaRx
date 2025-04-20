import React from 'react';
import { motion } from 'framer-motion'; // Optional: Add motion if desired

// --- IMPORT YOUR LOCAL IMAGES HERE ---
// Adjust the paths and filenames to match your actual files
import easyOrderImage from '../../assets/pharmacyimages/eo.png';
import trackOrderImage from '../../assets/pharmacyimages/trackpharmacy.jpg';
import support247Image from '../../assets/pharmacyimages/24.png';
import discountsImage from '../../assets/pharmacyimages/discountspharmacy.jpg';

const Middletwo = () => {

    // Define data for the card rows
    const cardRowsData = [
        // Row 1
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
        // Row 2
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
                description2: "Up to ₹350 cashback On all Medicine / healthcare needs", // Optional second line
                imgSrc: discountsImage,
                alt: "Medicines and healthcare products with discount graphic",
                widthClass: "md:w-2/3"
            }
        ]
    ];

    // --- Optional: Framer Motion Variants ---
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };


    return (
        <section className="py-16 md:py-20 bg-gray-100"> {/* Slightly increased padding */}
            <div className="container mx-auto px-4">
                <div className="space-y-8 md:space-y-10"> {/* Increased vertical space */}

                    {/* Map over the rows */}
                    {cardRowsData.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col md:flex-row gap-8 md:gap-10"> {/* Increased gap */}

                            {/* Map over the cards in the current row */}
                            {row.map((card, cardIndex) => (
                                <motion.div // Optional: Wrap card in motion.div
                                    key={cardIndex}
                                    className={`bg-white rounded-2xl p-6 ${card.widthClass}`} // Updated: rounded-2xl, no shadow
                                    variants={cardVariants} // Optional: apply variants
                                    initial="hidden" // Optional: initial state
                                    whileInView="visible" // Optional: trigger animation
                                    viewport={{ once: true, amount: 0.3 }} // Optional: viewport settings
                                >
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{card.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                                    {/* Conditionally render second description line if it exists */}
                                    {card.description2 && (
                                        <p className="text-gray-600 text-sm mb-4">{card.description2}</p>
                                    )}
                                    <img
                                        src={card.imgSrc}
                                        alt={card.alt}
                                        className="w-full h-48 md:h-52 lg:h-60 object-cover rounded-xl" // Updated: rounded-xl, removed mb-4, adjusted height
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Middletwo;