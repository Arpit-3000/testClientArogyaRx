import React from 'react';
import { useTranslation } from 'react-i18next';
import productData from '../../data/productData';

const Product = () => {
    const { t } = useTranslation();
    
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">
                    {t('products.title')}
                </h2>
                
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                    {productData.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg dark:hover:shadow-gray-700/50 transition-all duration-300 group hover:-translate-y-1"
                        >
                            {/* Image container */}
                            <div className="w-full h-24 sm:h-28 md:h-32 flex items-center justify-center overflow-hidden mb-2 sm:mb-3 relative">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-contain h-full transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                                
                                {/* Badges */}
                                {product.discount && (
                                    <span className="absolute top-2 right-2 bg-red-500 dark:bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {t('products.discount', { discount: product.discount })}
                                    </span>
                                )}
                                {product.isNew && (
                                    <span className="absolute top-2 left-2 bg-blue-500 dark:bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {t('products.new')}
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-2">
                                {product.title}
                            </h3>

                     

                            {/* Rating */}
                            {product.rating && (
                                <div className="flex items-center justify-center mt-1">
                                    <div className="flex text-amber-400">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg
                                                key={star}
                                                className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= product.rating ? 'fill-current' : 'fill-none'}`}
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                                        ({product.reviewCount || 0})
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-10 sm:mt-12">
                    <button 
                        className="px-6 py-2.5 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                        aria-label={t('products.viewAll')}
                    >
                        {t('products.viewAll')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Product;