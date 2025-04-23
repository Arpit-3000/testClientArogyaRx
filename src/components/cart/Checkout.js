import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../services/api';
import { useLocation } from 'react-router-dom';

function Checkout() {
  const { state } = useLocation();
  const cartItems = state?.cartItems || [];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Calculate totals from cart items
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 50; // Fixed delivery fee
  const total = subtotal + deliveryFee;

  // Set email from localStorage if user is logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.email) {
      setFormData((prev) => ({
        ...prev,
        email: user.email, // Automatically fill email
      }));
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['street', 'city', 'state', 'zip', 'country', 'phone'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`Please fill in the ${field} field`);
        return false;
      }
    }

    // Phone validation
    if (formData.phone.length < 10) {
      setError('Please enter a valid phone number');
      return false;
    }
    
    return true;
  };

 // In your handlePlaceOrder function in Checkout.js
 const handlePlaceOrder = async (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

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
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // Prepare confirmation data with proper structure
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
          medicineId: item.medicineDetails || { // Use medicineDetails from backend
            _id: item.medicineId,
            productName: item.productName || 'Medicine'
          },
          price: item.price
        }))
      },
      orderDetails: {
        subtotal,
        deliveryFee,
        total
      }
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
    <div className="container mx-auto p-4 md:p-8 font-sans">
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <form onSubmit={handlePlaceOrder}>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Delivery Information Section */}
          <div className="flex-1 lg:w-2/3">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Street</label>
                <input 
                  type="text" 
                  id="street" 
                  name="street" 
                  value={formData.street}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  value={formData.city}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input 
                  type="text" 
                  id="state" 
                  name="state" 
                  value={formData.state}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                <input 
                  type="text" 
                  id="zip" 
                  name="zip" 
                  value={formData.zip}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input 
                  type="text" 
                  id="country" 
                  name="country" 
                  value={formData.country}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" 
                />
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="flex-1 lg:w-1/3 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
            <div className="bg-white shadow-md p-4 rounded-md">
              <div className="flex justify-between mb-4">
                <span className="text-gray-700">Subtotal:</span>
                <span className="font-semibold">{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-700">Delivery Fee:</span>
                <span className="font-semibold">{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 font-semibold">
                <span>Total:</span>
                <span>{total.toFixed(2)}</span>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 bg-orange-500 text-white rounded-md ${isLoading ? 'opacity-50' : 'hover:bg-orange-600'}`}
              >
                {isLoading ? 'Placing Order...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
