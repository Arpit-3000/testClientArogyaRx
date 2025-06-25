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
        // Reset the added state after 2 seconds
        setTimeout(() => setAddedToCart(false), 2000);
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  };



  return (
    <div 
      className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer h-full flex flex-col"
      onClick={onSeeMore}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-2 right-2">
          <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
            {discountPercentage}% OFF
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative bg-gray-50 p-4 flex items-center justify-center h-48">
        <img
          src={medicine.images?.[0] || '/medicine-placeholder.jpg'}
          alt={medicine.productName}
          className={`h-full w-auto object-contain transition-transform duration-200 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
      </div>

      {/* Details */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Prescription Badge */}
        {medicine.prescriptionRequired && (
          <span className="text-xs text-red-600 font-medium mb-1">
            Prescription required
          </span>
        )}

        {/* Product Name */}
        <h3 className="text-gray-900 font-medium text-sm mb-1 line-clamp-2 h-10">
          {medicine.productName}
        </h3>

        {/* Manufacturer */}
        <p className="text-xs text-gray-500 mb-2">By {medicine.brandName || 'Generic'}</p>

        {/* Price Section */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-lg font-bold text-gray-900">₹{finalPrice?.toFixed(2)}</span>
            {discountPercentage > 0 && (
              <span className="text-xs text-gray-500 line-through">
                ₹{medicine.pricing?.mrp?.toFixed(2)}
              </span>
            )}
          </div>
          
          {discountPercentage > 0 && (
            <div className="text-xs text-green-600 font-medium mb-3">
              Save ₹{medicine.pricing?.discount?.toFixed(2)} ({discountPercentage}%)
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={(e) => handleAddToCart(e)}
            className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              addedToCart
                ? 'bg-green-100 text-green-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {addedToCart ? (
              <>
                <Check size={16} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
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
