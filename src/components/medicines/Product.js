import React from 'react';
import productData from '../../data/productData';

const Product = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {productData.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Image */}
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-32 object-contain mb-2"
                            />
                            {/* Title */}
                            <h3 className="text-md font-semibold text-gray-900 mb-1">{product.title}</h3>
                            {/* Discount */}
                            {product.discount && <p className="text-xs text-red-500">{product.discount}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
