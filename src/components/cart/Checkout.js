import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import API from '../../services/api';

function Checkout() {
  const { state } = useLocation();
  const cartItems = state?.cartItems || [];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    street: '', city: '', state: '', zip: '', country: '', phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.email) {
      setFormData((prev) => ({ ...prev, email: user.email }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const requiredFields = ['street', 'city', 'state', 'zip', 'country', 'phone'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`Please fill in the ${field} field`);
        return false;
      }
    }
    if (formData.phone.length < 10) {
      setError('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const address = `${formData.street}, ${formData.city}, ${formData.state}, ${formData.zip}, ${formData.country}`;

      const orderData = {
        address,
        contact: formData.phone,
        cartItems: cartItems.map(item => ({
          medicineId: item._id,
          quantity: item.quantity,
          price: item.price
        }))
      };

      const token = localStorage.getItem('accessToken');
      const response = await API.post('/orders/place', orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const confirmationData = {
        order: {
          ...response.data.order,
          _id: response.data.order._id,
          name: user?.name || 'Customer',
          email: user?.email || 'Not provided',
          contact: formData.phone,
          address,
          totalAmount: total,
          status: 'Processing',
          createdAt: new Date().toISOString(),
          cartItems: response.data.order.items.map(item => ({
            ...item,
            medicineId: item.medicineDetails || {
              _id: item.medicineId,
              productName: item.productName || 'Medicine'
            },
            price: item.price
          }))
        },
        orderDetails: { subtotal, deliveryFee, total }
      };

      localStorage.removeItem('cartItems');
      navigate('/order-confirmation', { state: confirmationData });

    } catch (err) {
      setError(err.response?.data?.message || 'Failed to place order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-10 font-sans animate-fadeIn bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Checkout</h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700 rounded-lg shadow">
          {error}
        </div>
      )}

      <form onSubmit={handlePlaceOrder}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Delivery Information */}
          <div className="flex-1 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <InputField 
                  label="Street" 
                  name="street" 
                  value={formData.street} 
                  onChange={handleInputChange} 
                />
              </div>
              <InputField label="City" name="city" value={formData.city} onChange={handleInputChange} />
              <InputField label="State" name="state" value={formData.state} onChange={handleInputChange} />
              <InputField label="Zip Code" name="zip" value={formData.zip} onChange={handleInputChange} />
              <InputField label="Country" name="country" value={formData.country} onChange={handleInputChange} />
              <div className="md:col-span-2">
                <InputField 
                  label="Phone Number" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  type="tel" 
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="flex-1 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-fit">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <SummaryLine label="Subtotal:" value={`₹${subtotal.toFixed(2)}`} />
              <SummaryLine label="Delivery Fee:" value={`₹${deliveryFee.toFixed(2)}`} />
              <hr className="border-gray-200 dark:border-gray-700" />
              <SummaryLine label="Total:" value={`₹${total.toFixed(2)}`} bold />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`mt-6 w-full py-3 rounded-xl font-medium transition duration-300 text-white ${
                isLoading 
                  ? 'bg-orange-300 dark:bg-orange-600 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800'
              }`}
            >
              {isLoading ? 'Placing Order...' : 'Place Order'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const InputField = ({ label, name, value, onChange, type = 'text' }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-500 bg-white dark:bg-gray-700 dark:text-white"
    />
  </div>
);

const SummaryLine = ({ label, value, bold }) => (
  <div className="flex justify-between">
    <span className={bold ? "font-semibold text-gray-800 dark:text-white" : ""}>
      {label}
    </span>
    <span className={bold ? "font-semibold text-gray-800 dark:text-white" : ""}>
      {value}
    </span>
  </div>
);

export default Checkout;