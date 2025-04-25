import React from 'react';
import productData from '../../data/productData';

const Product = () => {
    return (
        <section className="py-16 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
                    Explore Our Products
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {productData.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Image container */}
                            <div className="w-full h-28 sm:h-32 flex items-center justify-center overflow-hidden mb-3">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-contain h-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-semibold text-gray-800 mb-1">
                                {product.title}
                            </h3>

                            {/* Discount */}
                            {product.discount && (
                                <p className="text-sm text-red-500 font-medium bg-red-100 px-2 py-0.5 rounded mt-1">
                                    {product.discount}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
