import { useState } from 'react';
import { ShoppingCart, Plus, Check } from 'lucide-react';

const MedicineCard = ({ medicine, onSeeMore, onAddToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage =
    medicine.pricing?.mrp && medicine.pricing?.discount
      ? Math.round((medicine.pricing.discount / medicine.pricing.mrp) * 100)
      : 0;

  const finalPrice = medicine.pricing?.mrp && medicine.pricing?.discount
    ? medicine.pricing.mrp - medicine.pricing.discount
    : medicine.pricing?.mrp;
    
  const handleAddToCart = async (e) => {
    e.stopPropagation();
    if (!addedToCart) {
      try {
        await onAddToCart(medicine, 1);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md dark:hover:shadow-gray-700/50 transition-all duration-200 cursor-pointer h-full flex flex-col"
      onClick={onSeeMore}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative bg-gray-50 dark:bg-gray-700 p-4 flex items-center justify-center h-40 sm:h-48">
        <img
          src={medicine.images?.[0] || '/medicine-placeholder.jpg'}
          alt={medicine.productName}
          className={`h-full w-auto object-contain transition-transform duration-200 ${isHovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
      </div>

      {/* Details */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        {/* Prescription Badge */}
        {medicine.prescriptionRequired && (
          <span className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">
            Prescription required
          </span>
        )}

        {/* Product Name */}
        <h3 className="text-gray-900 dark:text-white font-medium text-sm mb-1 line-clamp-2 h-10">
          {medicine.productName}
        </h3>

        {/* Manufacturer */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          By {medicine.brandName || 'Generic'}
        </p>

        {/* Price Section */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              ₹{finalPrice?.toFixed(2)}
            </span>
            {discountPercentage > 0 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 line-through">
                ₹{medicine.pricing?.mrp?.toFixed(2)}
              </span>
            )}
          </div>
          
          {discountPercentage > 0 && (
            <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-2 sm:mb-3">
              Save ₹{medicine.pricing?.discount?.toFixed(2)} ({discountPercentage}%)
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={(e) => handleAddToCart(e)}
            className={`w-full flex items-center justify-center gap-2 py-1.5 sm:py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
              addedToCart
                ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400'
                : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white'
            }`}
          >
            {addedToCart ? (
              <>
                <Check size={14} className="shrink-0" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart size={14} className="shrink-0" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;