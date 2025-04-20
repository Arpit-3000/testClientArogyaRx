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
        if (selected.length < CARDS_PER_PAGE) {
            const shortage = CARDS_PER_PAGE - selected.length;
            const extra = customerData.slice(Math.max(0, start - shortage), start);
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
        <section className="py-20 bg-gradient-to-b from-white to-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-blue-700 mb-4 tracking-tight">What Our Customers Say</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
                    World-class care for everyone. Our health system offers unmatched, expert healthcare experiences.
                </p>

                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-opacity duration-500 ${
                        fade ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {paginatedCustomers.map((customer, index) => (
                        <div
                            key={index}
                            className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 border border-gray-200 shadow-md relative group"
                        >
                            <div className="absolute -top-6 left-6 bg-gradient-to-tr from-blue-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                                {customer.name[0]}
                            </div>
                            <div className="mt-8 text-left">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{customer.name}</h3>
                                <div className="mb-3 flex">
                                    {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${
                                                    i < customer.rating
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{customer.review}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index)}
                            className={`w-4 h-4 rounded-full border transition-all duration-300 ${
                                currentPage === index
                                    ? 'bg-blue-600 border-blue-600 scale-110'
                                    : 'bg-gray-300 border-gray-400 hover:scale-105'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customer;
