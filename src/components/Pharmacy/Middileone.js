import React from 'react';
// Removed Framer Motion import
import { FaArrowRight, FaShoppingCart, FaFlask } from 'react-icons/fa';
import medicinesImage from '../../assets/pharmacyimages/medicinespharmacy.jpg';
import healthcareImage from '../../assets/pharmacyimages/healthcarepharmacy.jpg';
import labTestsImage from '../../assets/pharmacyimages/labtestpharmacy.jpg';


const Middileone = () => {

    // Removed Framer Motion variants declarations

    const cardData = [
        {
            title: "Order Medicines",
            discount: "FLAT 15% OFF",
            imgSrc: medicinesImage,
            alt: "Order Medicines",
            buttonText: "Order Now",
            buttonIcon: FaShoppingCart,
            badgeColor: "bg-red-500/90",
            buttonColor: "bg-emerald-600 hover:bg-emerald-700"
        },
        {
            title: "Healthcare Products",
            discount: "UPTO 60% OFF",
            imgSrc: healthcareImage,
            alt: "Healthcare Products",
            buttonText: "Explore Now",
            buttonIcon: FaArrowRight,
            badgeColor: "bg-orange-500/90",
            buttonColor: "bg-emerald-600 hover:bg-emerald-700"
        },
        {
            title: "Lab Tests",
            discount: "UPTO 70% OFF",
            imgSrc: labTestsImage ,
            alt: "Lab Tests",
            buttonText: "Book Now",
            buttonIcon: FaFlask,
            badgeColor: "bg-pink-500/90",
            buttonColor: "bg-blue-600 hover:bg-blue-700"
        }
    ];


    return (
        // Changed motion.section back to section, removed animation props
        <section className="py-16 md:py-20"> {/* Example padding, adjust if needed */}
            <div className="container mx-auto px-4 mt-8">
                {/* Changed motion.div back to div, removed animation props */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
                 >
                    {cardData.map((card, index) => (
                        // Changed motion.div back to div, removed animation props
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                            // Keep existing layout and styling classes
                        >
                            <div className="relative overflow-hidden">
                                <div className={`absolute top-3 left-3 ${card.badgeColor} text-white px-2.5 py-1 rounded-md text-xs font-medium z-10 backdrop-blur-sm`}>
                                    {card.discount}
                                </div>
                                <img
                                    loading="lazy" // Keep lazy loading for performance
                                    src={card.imgSrc}
                                    alt={card.alt}
                                    // Kept hover scale effect and other image classes
                                    className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">{card.title}</h3>
                                <div className="mt-auto pt-3">
                                    <button className={`${card.buttonColor} text-white px-6 py-3 rounded-lg hover:shadow-md transition-all duration-300 w-full inline-flex items-center justify-center gap-2 font-medium`}>
                                        <card.buttonIcon />
                                        {card.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Consider wrapping in React.memo if performance requires it due to parent re-renders
// const MemoizedMiddileone = React.memo(Middileone);
// export default MemoizedMiddileone;

export default Middileone;