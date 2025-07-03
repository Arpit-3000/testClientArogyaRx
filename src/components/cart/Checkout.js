import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import API from '../../services/api';

function Checkout() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const cartItems = state?.cartItems || [];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    street: '', city: '', state: '', zip: '', country: 'India', phone: '',
    useDefaultAddress: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  useEffect(() => {
    const fetchUserAddress = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await API.get('/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (response.data?.address) {
          setUserAddress(response.data.address);
          if (response.data.address.country === undefined) {
            setUserAddress(prev => ({ ...prev, country: t('checkout.country') }));
          }
        }
      } catch (err) {
        console.error(t('checkout.errors.fetchAddress'), err);
      }
    };

    fetchUserAddress();
  }, [t]);

  useEffect(() => {
    if (formData.useDefaultAddress && userAddress) {
      setFormData(prev => ({
        ...prev,
        street: userAddress.street || '',
        city: userAddress.city || '',
        state: userAddress.state || '',
        zip: userAddress.postalCode || '',
        country: userAddress.country || t('checkout.country')
      }));
    } else if (!formData.useDefaultAddress) {
      setFormData(prev => ({
        ...prev,
        street: '',
        city: '',
        state: '',
        zip: '',
        country: t('checkout.country')
      }));
    }
  }, [formData.useDefaultAddress, userAddress, t]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['street', 'city', 'state', 'zip', 'country', 'phone'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(t('checkout.errors.requiredField', { field: t(`checkout.fields.${field}`) }));
        return false;
      }
    }
    if (formData.phone.length < 10) {
      setError(t('checkout.errors.phoneLength'));
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
      const address = {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        postalCode: formData.zip,
        country: formData.country
      };

      const orderData = {
        address,
        contact: formData.phone,
        cartItems: cartItems.map(item => ({
          medicineId: item._id,
          quantity: item.quantity,
          price: item.price
        }))
      };

      const token = localStorage.getItem('token');
      const response = await API.post('/orders/place', orderData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const confirmationData = {
        order: {
          ...response.data.order,
          _id: response.data.order._id,
          name: user?.name || t('checkout.defaultCustomer'),
          email: user?.email || t('checkout.notProvided'),
          contact: formData.phone,
          address: `${address.street}, ${address.city}, ${address.state}, ${address.postalCode}, ${address.country}`,
          totalAmount: total,
          status: t('checkout.status.processing'),
          createdAt: new Date().toISOString(),
          cartItems: response.data.order.items.map(item => ({
            ...item,
            medicineId: item.medicineDetails || {
              _id: item.medicineId,
              productName: item.productName || t('checkout.defaultProductName')
            },
            price: item.price
          }))
        },
        orderDetails: { subtotal, deliveryFee, total }
      };

      localStorage.removeItem('cartItems');
      navigate('/order-confirmation', { state: confirmationData });

    } catch (err) {
      setError(err.response?.data?.message || t('checkout.errors.placeOrder'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-10 font-sans animate-fadeIn bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        {t('checkout.title')}
      </h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700 rounded-lg shadow">
          {error}
        </div>
      )}

      <form onSubmit={handlePlaceOrder}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Delivery Information */}
          <div className="flex-1 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              {t('checkout.deliveryInfo')}
            </h2>
            
            {userAddress && (
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="useDefaultAddress"
                  name="useDefaultAddress"
                  checked={formData.useDefaultAddress}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="useDefaultAddress" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  {t('checkout.useDefaultAddress')}
                </label>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <InputField 
                  label={t('checkout.fields.street')} 
                  name="street" 
                  value={formData.street} 
                  onChange={handleInputChange}
                  disabled={formData.useDefaultAddress}
                />
              </div>
              <InputField 
                label={t('checkout.fields.city')} 
                name="city" 
                value={formData.city} 
                onChange={handleInputChange}
                disabled={formData.useDefaultAddress}
              />
              <InputField 
                label={t('checkout.fields.state')} 
                name="state" 
                value={formData.state} 
                onChange={handleInputChange}
                disabled={formData.useDefaultAddress}
              />
              <InputField 
                label={t('checkout.fields.zip')} 
                name="zip" 
                value={formData.zip} 
                onChange={handleInputChange}
                disabled={formData.useDefaultAddress}
              />
              <InputField 
                label={t('checkout.fields.country')} 
                name="country" 
                value={formData.country} 
                onChange={handleInputChange}
                disabled={formData.useDefaultAddress}
              />
              <div className="md:col-span-2">
                <InputField 
                  label={t('checkout.fields.phone')} 
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
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              {t('checkout.orderSummary')}
            </h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>
                    {item.productName} × {item.quantity}
                  </span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr className="border-gray-200 dark:border-gray-700" />
              <SummaryLine label={`${t('checkout.subtotal')}:`} value={`₹${subtotal.toFixed(2)}`} />
              <SummaryLine label={`${t('checkout.deliveryFee')}:`} value={`₹${deliveryFee.toFixed(2)}`} />
              <hr className="border-gray-200 dark:border-gray-700" />
              <SummaryLine label={`${t('checkout.total')}:`} value={`₹${total.toFixed(2)}`} bold />
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
              {isLoading ? t('checkout.placingOrder') : t('checkout.placeOrder')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

const InputField = ({ label, name, value, onChange, type = 'text', disabled = false }) => (
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
      disabled={disabled}
      className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 ${
        disabled 
          ? 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600' 
          : 'bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-green-400 dark:focus:ring-green-500'
      }`}
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