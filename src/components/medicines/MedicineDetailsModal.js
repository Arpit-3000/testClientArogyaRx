import { useNavigate } from 'react-router-dom';
import API from '../../services/api';

const MedicineDetailsModal = ({ medicine, onClose }) => {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    const isLoggedIn = !!localStorage.getItem('accessToken');
    if (!isLoggedIn) {
      alert('Please login to add items to your cart');
      return;
    }

    try {
      await API.post('/cart/add', {
        medicineId: medicine._id,
        quantity: 1,
      });
      alert(`"${medicine.productName}" added to cart successfully! Redirecting to cart...`);
      navigate('/cart');
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4 overflow-y-auto">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w-4xl relative max-h-[90vh] overflow-y-auto animate-fadeIn">

        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 p-6 rounded-t-2xl text-white">
          <h2 className="text-3xl font-semibold">{medicine.productName}</h2>
          <p className="text-sm mt-1 italic">{medicine.brandName}</p>
        </div>

        <div className="p-6 space-y-6">

          {/* Images Carousel */}
          {medicine.images?.length > 0 && (
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {medicine.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="medicine"
                  className="h-40 w-auto object-contain rounded-lg border shadow-md transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
          )}

          {/* Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-sm leading-relaxed break-words">
            <p><span className="font-semibold">Generic Name:</span> {medicine.genericName}</p>
            <p><span className="font-semibold">Category:</span> {medicine.category}</p>
            <p><span className="font-semibold">Prescription Required:</span> {medicine.prescriptionRequired ? 'Yes' : 'No'}</p>
            <p className="whitespace-pre-wrap"><span className="font-semibold">Composition:</span> {JSON.stringify(medicine.composition)}</p>
            <p className="break-words whitespace-pre-wrap"><span className="font-semibold">Dosage:</span> {typeof medicine.dosage === 'string' ? medicine.dosage : JSON.stringify(medicine.dosage)}</p>
            <p><span className="font-semibold">Price:</span> ₹{medicine.pricing?.mrp} <span className="text-green-600">(₹{medicine.pricing?.discount} off)</span></p>
            <p><span className="font-semibold">Stock:</span> {medicine.stock?.quantity} units (Min: {medicine.stock?.minQuantity})</p>
            <p><span className="font-semibold">Packaging:</span> {medicine.packaging?.packSize} <span className="text-red-500">(Exp: {medicine.packaging?.expiryDate?.split("T")[0]})</span></p>
            <p className="whitespace-pre-wrap"><span className="font-semibold">Regulatory:</span> {JSON.stringify(medicine.regulatory)}</p>
          </div>

          {/* FAQs */}
          {medicine.additionalFeatures?.faqs?.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">FAQs</h3>
              <ul className="list-disc list-inside space-y-1">
                {medicine.additionalFeatures.faqs.map((faq, i) => (
                  <li key={i}>
                    <span className="font-semibold">{faq.question}</span>: {faq.answer}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Doctor Advice */}
          {medicine.additionalFeatures?.doctorAdvice && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg text-blue-700">Doctor's Advice</h3>
              <p className="whitespace-pre-wrap">{medicine.additionalFeatures.doctorAdvice}</p>
            </div>
          )}

          {/* Reviews */}
          {medicine.additionalFeatures?.reviews?.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg text-blue-700 mb-2">User Reviews</h3>
              <ul className="space-y-2">
                {medicine.additionalFeatures.reviews.map((review, i) => (
                  <li key={i} className="border rounded-md p-2 bg-gray-50 shadow-sm">
                    <strong>{review.user}</strong>: {review.comment}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4 border-t mt-6 flex justify-end">
            <button
              onClick={handleAddToCart}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MedicineDetailsModal;
