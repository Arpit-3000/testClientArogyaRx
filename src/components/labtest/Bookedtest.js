import React from 'react';
import bookedtestData from '../../data/bookedtestData';
import { useTranslation } from 'react-i18next';

const Bookedtest = () => {
    const { t } = useTranslation();
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-500 mb-3">
                        {t('bookedTests.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('bookedTests.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
                    {bookedtestData.map((test, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-gray-700/50 overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="relative h-40 sm:h-48 overflow-hidden">
                                <img
                                    src={test.image}
                                    alt={test.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                {test.discount && (
                                    <div className="absolute top-3 right-3 bg-red-500 dark:bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {test.discount}
                                    </div>
                                )}
                            </div>
                            <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                                        {t(test.title)}
                                    </h3>
                                    {test.isPopular && (
                                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs font-medium px-2 py-0.5 rounded-full ml-2">
                                            Popular
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                    {t(test.description)}
                                </p>
                                <div className="pt-2 flex items-end justify-between">
                                    <div>
                                        <p className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-500">
                                            ₹{test.price}
                                        </p>
                                        {test.originalPrice && (
                                            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 line-through">
                                                ₹{test.originalPrice}
                                            </p>
                                        )}
                                    </div>
                                    <button className="text-sm bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-3 py-1.5 rounded-lg transition-colors">
                                        {t('bookedTests.bookButton')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 sm:mt-16">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
                        {t('bookedTests.viewAllButton')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Bookedtest;