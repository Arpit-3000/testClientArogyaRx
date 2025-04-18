import React, { useState } from 'react';
import { Star } from 'lucide-react';
import customerData from '../../data/customerData';

const CARDS_PER_PAGE = 3;

const Customer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [fade, setFade] = useState(true);

    const totalPages = Math.ceil(customerData.length / CARDS_PER_PAGE);

    const getPaginatedCustomers = () => {
        const start = currentPage * CARDS_PER_PAGE;
        const end = start + CARDS_PER_PAGE;

        let selected = customerData.slice(start, end);

        // If not enough cards, prepend from previous
        if (selected.length < CARDS_PER_PAGE) {
            const shortage = CARDS_PER_PAGE - selected.length;
            const extra = customerData.slice(
                Math.max(0, start - shortage),
                start
            );
            selected = [...extra, ...selected];
        }

        return selected;
    };

    const handlePageChange = (index) => {
        setFade(false);
        setTimeout(() => {
            setCurrentPage(index);
            setFade(true);
        }, 200);
    };

    const paginatedCustomers = getPaginatedCustomers();

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">What our Customers say</h2>
                <p className="text-gray-600 mb-8">
                    World-class care for everyone. Our health system offers unmatched, expert healthcare.
                </p>

                {/* Cards */}
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 mb-6 transition-opacity duration-500 ${
                        fade ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {paginatedCustomers.map((customer, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold text-white">
                                    {customer.name[0]}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{customer.name}</h3>
                            </div>
                            <div className="mb-2 flex">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${
                                                i < customer.rating ? 'text-yellow-400' : 'text-gray-300'
                                            }`}
                                        />
                                    ))}
                            </div>
                            <p className="text-gray-700 text-sm">{customer.review}</p>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                currentPage === index ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customer;
