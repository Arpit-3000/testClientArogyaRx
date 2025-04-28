import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import offersData from '../../data/offersData';

const Offers = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;
    const totalPages = Math.ceil(offersData.length / cardsPerPage);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

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
        <section className="py-20 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Exclusive Offers</h2>

                <div
                    className="relative"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-blue-100 transition z-10"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-blue-100 transition z-10"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>

                    {/* Cards Grid */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 transition-all duration-500 ease-in-out"
                        key={currentPage}
                    >
                        {currentOffers.map((offer, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <img
                                    src={offer.imageUrl}
                                    alt={offer.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{offer.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center mt-10 space-x-2">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentPage
                                    ? 'bg-blue-600 scale-110'
                                    : 'bg-gray-300 hover:bg-blue-400'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
