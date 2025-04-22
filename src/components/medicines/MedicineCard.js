const MedicineCard = ({ medicine, onSeeMore, onAddToCart }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src={medicine.images?.[0]}
          alt={medicine.productName}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold">{medicine.productName}</h2>
        <p className="text-sm text-gray-600">{medicine.brandName}</p>
        <p className="text-blue-600 font-bold mt-2">₹{medicine.pricing?.mrp}</p>
        <div className="flex justify-between mt-4">
          <button onClick={onSeeMore} className="text-blue-500 hover:underline">See More</button>
          <button onClick={onAddToCart} className="bg-green-600 text-white px-3 py-1 rounded">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default MedicineCard;
  