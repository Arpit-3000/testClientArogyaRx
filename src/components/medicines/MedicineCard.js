const MedicineCard = ({ medicine, onSeeMore, onAddToCart }) => {
    // Calculate discount percentage
    const discountPercentage = medicine.pricing?.mrp && medicine.pricing?.discount 
      ? Math.round((medicine.pricing.discount / medicine.pricing.mrp) * 100)
      : 0;
  
    // Calculate final price
    const finalPrice = medicine.pricing?.mrp && medicine.pricing?.discount 
      ? medicine.pricing.mrp - medicine.pricing.discount
      : medicine.pricing?.mrp;
  
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Medicine Image */}
        <div className="relative">
          <img
            src={medicine.images?.[0] || '/medicine-placeholder.jpg'}
            alt={medicine.productName}
            className="w-full h-48 object-contain bg-gray-100 p-4"
          />
          {discountPercentage > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {discountPercentage}% OFF
            </span>
          )}
        </div>
  
        {/* Medicine Details */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{medicine.productName}</h2>
          <p className="text-sm text-gray-600 mb-2">{medicine.brandName}</p>
          <p className="text-sm text-gray-700 mb-1">
            <span className="font-medium">Generic:</span> {medicine.genericName || 'N/A'}
          </p>
  
          {/* Pricing Section */}
          <div className="mt-3">
            {medicine.pricing?.mrp && (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-blue-600">₹{finalPrice}</span>
                {discountPercentage > 0 && (
                  <>
                    <span className="text-sm text-gray-500 line-through">₹{medicine.pricing.mrp}</span>
                    <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">
                      Save ₹{medicine.pricing.discount}
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
  
          {/* Category & Prescription Badge */}
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {medicine.category || 'OTC'}
            </span>
            {medicine.prescriptionRequired && (
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                Prescription Required
              </span>
            )}
          </div>
  
          {/* Action Buttons */}
          <div className="flex justify-between mt-4 pt-3 border-t border-gray-100">
            <button 
              onClick={onSeeMore} 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
            >
              View Details
            </button>
            <button 
              onClick={onAddToCart}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default MedicineCard;