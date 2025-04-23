import { useNavigate } from 'react-router-dom';
import API from '../../services/api'; // Make sure API is imported

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
        quantity: 1, // Default quantity
      });
      alert(`"${medicine.productName}" added to cart successfully! Redirecting to cart...`);
      navigate('/cart');
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-2">{medicine.productName}</h2>
        <p className="text-sm text-gray-600 mb-4">{medicine.brandName}</p>

        {medicine.images?.length > 0 && (
          <div className="flex space-x-2 mb-4 overflow-x-auto">
            {medicine.images.map((img, index) => (
              <img key={index} src={img} alt="medicine" className="h-40 object-contain rounded" />
            ))}
          </div>
        )}

        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Generic Name:</strong> {medicine.genericName}</p>
          <p><strong>Category:</strong> {medicine.category}</p>
          <p><strong>Prescription Required:</strong> {medicine.prescriptionRequired ? 'Yes' : 'No'}</p>
          <p><strong>Composition:</strong> {JSON.stringify(medicine.composition)}</p>
          <p><strong>Dosage:</strong> {JSON.stringify(medicine.dosage)}</p>
          <p><strong>Pricing:</strong> MRP ₹{medicine.pricing?.mrp}, Discount ₹{medicine.pricing?.discount}</p>
          <p><strong>Stock:</strong> {medicine.stock?.quantity} units, Min Qty: {medicine.stock?.minQuantity}</p>
          <p><strong>Packaging:</strong> {medicine.packaging?.packSize} (Exp: {medicine.packaging?.expiryDate?.split("T")[0]})</p>
          <p><strong>Regulatory Info:</strong> {JSON.stringify(medicine.regulatory)}</p>

          {medicine.additionalFeatures?.faqs?.length > 0 && (
            <div>
              <strong>FAQs:</strong>
              <ul className="list-disc list-inside">
                {medicine.additionalFeatures.faqs.map((faq, i) => (
                  <li key={i}><strong>{faq.question}</strong>: {faq.answer}</li>
                ))}
              </ul>
            </div>
          )}

          {medicine.additionalFeatures?.doctorAdvice && (
            <p><strong>Doctor Advice:</strong> {medicine.additionalFeatures.doctorAdvice}</p>
          )}

          {medicine.additionalFeatures?.reviews?.length > 0 && (
            <div>
              <strong>Reviews:</strong>
              <ul className="list-disc list-inside">
                {medicine.additionalFeatures.reviews.map((review, i) => (
                  <li key={i}><strong>{review.user}</strong>: {review.comment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetailsModal;
