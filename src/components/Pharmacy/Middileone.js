import React from 'react';
import { FaArrowRight, FaShoppingCart, FaFlask } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import medicinesImage from '../../assets/pharmacyimages/d4.png';
import healthcareImage from '../../assets/pharmacyimages/listimage3.png';
import labTestsImage from '../../assets/pharmacyimages/l4.png';

const cardData = [
    {
        title: "Order Medicines",
        discount: "FLAT 15% OFF",
        imgSrc: medicinesImage,
        alt: "Order Medicines",
        buttonText: "Order Now",
        buttonIcon: FaShoppingCart,
        badgeColor: "bg-red-500/90 dark:bg-red-600/90",
        buttonColor: "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-800"
    },
    {
        title: "Healthcare Products",
        discount: "UPTO 60% OFF",
        imgSrc: healthcareImage,
        alt: "Healthcare Products",
        buttonText: "Explore Now",
        buttonIcon: FaArrowRight,
        badgeColor: "bg-orange-500/90 dark:bg-orange-600/90",
        buttonColor: "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-800"
    },
    {
        title: "Lab Tests",
        discount: "UPTO 70% OFF",
        imgSrc: labTestsImage,
        alt: "Lab Tests",
        buttonText: "Book Now",
        buttonIcon: FaFlask,
        badgeColor: "bg-pink-500/90 dark:bg-pink-600/90",
        buttonColor: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
    }
];

const Middileone = React.memo(() => {
    const navigate = useNavigate();

    const handleButtonClick = (title) => {
        if (title === "Order Medicines" || title === "Healthcare Products") {
            navigate('/medicines');
        } else if (title === "Lab Tests") {
            navigate('/labtest');
        }
    };

    return (
        <section className="py-14 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {cardData.map(({ title, discount, imgSrc, alt, buttonText, buttonIcon: Icon, badgeColor, buttonColor }, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-700/50 dark:hover:shadow-gray-600/50 transition-all duration-300 ease-in-out overflow-hidden flex flex-col"
                        >
                            <div className="relative">
                                <span className={`absolute top-3 left-3 ${badgeColor} text-white px-3 py-1 rounded-md text-xs font-semibold z-10`}>
                                    {discount}
                                </span>
                                <img
                                    src={imgSrc}
                                    alt={alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-48 sm:h-56 object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                                />
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col flex-grow">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3">
                                    {title}
                                </h3>
                                <div className="mt-auto">
                                    <button
                                        onClick={() => handleButtonClick(title)}
                                        className={`${buttonColor} text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg w-full flex items-center justify-center gap-2 font-medium transition duration-300 ease-in-out text-sm sm:text-base`}
                                    >
                                        <Icon className="text-sm sm:text-base" />
                                        {buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Middileone;