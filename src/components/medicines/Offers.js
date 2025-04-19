import React, { useState } from 'react';
import offersData from '../../data/offersData';

const Offers = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;

    const totalPages = Math.ceil(offersData.length / cardsPerPage);

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

    const currentOffers = getCurrentOffers();

    return (
        <section className="py-16">
            <div className="container mx-auto">
                {/* Animated Cards Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 transition-all duration-500 ease-in-out transform opacity-100 translate-y-0"
                    key={currentPage} // key forces re-render on page change for animation
                >
                    {currentOffers.map((offer, index) => (
                        <div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                src={offer.imageUrl}
                                alt={offer.title}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Smaller Pagination Dots */}
                <div className="flex justify-center space-x-2">
                   {[...Array(totalPages)].map((_, index) => (
                       <button
                            key={index}
                           onClick={() => setCurrentPage(index)}
                           className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            index === currentPage ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-blue-400'
                          }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Offers;
