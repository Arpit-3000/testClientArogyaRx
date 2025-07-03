import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import offersData from '../../data/offersData';
import { useTranslation } from 'react-i18next';

const Offers = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;
    const totalPages = Math.ceil(offersData.length / cardsPerPage);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const sliderRef = useRef(null);
    const { t } = useTranslation();

    const getCurrentOffers = () => {
        const start = currentPage * cardsPerPage;
        let end = start + cardsPerPage;

        if (end > offersData.length) {
            const remaining = offersData.length - start;
            if (remaining < cardsPerPage) {
                const extraNeeded = cardsPerPage - remaining;
                const newStart = Math.max(0, start - extraNeeded);
                return offersData.slice(newStart, offersData.length);
            }
        }

        return offersData.slice(start, end);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].screenX;
        handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) > 50) {
            diff > 0 ? handleNext() : handlePrev();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    const currentOffers = getCurrentOffers();

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
                    {t('medicines.exclusiveOffers')}
                </h2>

                <div
                    className="relative"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    ref={sliderRef}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="hidden sm:flex absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 shadow-md p-2 sm:p-3 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        aria-label="Previous offers"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="hidden sm:flex absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 shadow-md p-2 sm:p-3 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        aria-label="Next offers"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>

                    {/* Mobile Navigation Buttons */}
                    <div className="sm:hidden flex justify-between w-full absolute top-1/2 -translate-y-1/2 px-2 z-10">
                        <button
                            onClick={handlePrev}
                            className="bg-white/90 dark:bg-gray-700/90 shadow-md p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition"
                            aria-label="Previous offers"
                        >
                            <ChevronLeft className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-white/90 dark:bg-gray-700/90 shadow-md p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition"
                            aria-label="Next offers"
                        >
                            <ChevronRight className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </button>
                    </div>

                    {/* Cards Grid */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500 ease-in-out"
                        key={currentPage}
                    >
                        {currentOffers.map((offer, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg dark:hover:shadow-gray-700/50 transform hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="relative overflow-hidden h-48 sm:h-56">
                                    <img
                                        src={offer.imageUrl}
                                        alt={offer.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    {offer.discount && (
                                        <div className="absolute top-4 right-4 bg-red-500 dark:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                            {offer.discount}% OFF
                                        </div>
                                    )}
                                </div>
                                <div className="p-4 sm:p-5">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                        {offer.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
                                        {offer.description}
                                    </p>
                                    {offer.validUntil && (
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                                            Valid until: {offer.validUntil}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center mt-8 sm:mt-10 space-x-2">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none ${
                                index === currentPage
                                    ? 'bg-blue-600 dark:bg-blue-500 scale-110'
                                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-400'
                            }`}
                            aria-label={`Go to offer page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;