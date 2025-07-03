import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cartContext';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

function CartComponent() {
  const { t } = useTranslation();
  const {
    cartItems,
    subtotal,
    total,
    deliveryFee,
    loading,
    handleQuantityChange,
    handleRemoveItem,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            {t('carts.cart.loading')}
          </span>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{t('carts.cart.loadingMessage')}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8 font-sans">
      {/* Page Header */}
      <div className="mb-4 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {t('carts.cart.title')}
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          {t('carts.cart.subtitle')}
        </p>
      </div>

      {/* Empty Cart State */}
      {cartItems.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center">
          <svg className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
            {t('carts.cart.emptyTitle')}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t('carts.cart.emptyMessage')}
          </p>
          <div className="mt-6">
            <button
              onClick={() => navigate('/medicines')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800"
            >
              {t('carts.cart.browseMedicines')}
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Mobile Cart Items */}
          <div className="sm:hidden space-y-3 mb-6">
            {cartItems.map((item) => (
              <div key={item.medicineId._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                <div className="flex gap-3">
                  <img
                    src={item.medicineId.images?.[0] || 'https://placehold.co/80x80/e2e8f0/64748b?text=Medicine'}
                    alt={item.medicineId.productName}
                    className="w-20 h-20 object-cover rounded-md"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/fecaca/991b1b?text=Error"; }}
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">{item.medicineId.productName}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">₹{item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.medicineId._id, -1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                          aria-label={t('carts.cart.decreaseQuantity')}
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm dark:text-white">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.medicineId._id, 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                          aria-label={t('carts.cart.increaseQuantity')}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.medicineId._id)}
                        className="text-xs text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500 font-medium"
                      >
                        {t('carts.cart.remove')}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{t('carts.cart.total')}</span>
                  <span className="text-sm font-medium dark:text-white">₹{item.total.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Cart Table */}
          <div className="hidden sm:block bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold text-sm">{t('carts.cart.tableHeaders.item')}</th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold text-sm">{t('carts.cart.tableHeaders.title')}</th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold text-sm">{t('carts.cart.tableHeaders.price')}</th>
                    <th className="text-center py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold text-sm">{t('carts.cart.tableHeaders.quantity')}</th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold text-sm">{t('carts.cart.tableHeaders.total')}</th>
                    <th className="text-center py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold text-sm">{t('carts.cart.tableHeaders.remove')}</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.medicineId._id} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-4 px-4">
                        <img
                          src={item.medicineId.images?.[0] || 'https://placehold.co/60x60/e2e8f0/64748b?text=Medicine'}
                          alt={item.medicineId.productName}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                      </td>
                      <td className="py-4 px-4 text-gray-800 dark:text-white">{item.medicineId.productName}</td>
                      <td className="py-4 px-4 text-gray-800 dark:text-white">₹{item.price.toFixed(2)}</td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(item.medicineId._id, -1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                            aria-label={t('carts.cart.decreaseQuantity')}
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-gray-700 dark:text-white">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.medicineId._id, 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                            aria-label={t('carts.cart.increaseQuantity')}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-800 dark:text-white">₹{item.total.toFixed(2)}</td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => handleRemoveItem(item.medicineId._id)}
                          className="text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500"
                        >
                          {t('carts.cart.remove')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {t('carts.cart.orderSummary')}
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {t('carts.cart.subtotal')}
                    </span>
                    <span className="text-sm sm:text-base font-medium dark:text-white">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {t('carts.cart.deliveryFee')}
                    </span>
                    <span className="text-sm sm:text-base font-medium dark:text-white">₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-100 dark:border-gray-700 mt-3">
                    <span className="text-base sm:text-lg font-semibold dark:text-white">
                      {t('carts.cart.total')}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">₹{total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className={`mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center ${
                    cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={cartItems.length === 0}
                >
                  <span>{t('carts.cart.proceedToCheckout')}</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6">
                <h3 className="text-base font-semibold mb-3 text-gray-900 dark:text-white">
                  {t('carts.cart.promoCode')}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {t('carts.cart.promoCodeMessage')}
                </p>
                <div className="flex">
                  <input
                    type="text"
                    placeholder={t('carts.cart.enterCode')}
                    className="flex-grow p-2 sm:p-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white dark:bg-gray-700 dark:text-white"
                  />
                  <button 
                    className="bg-gray-800 dark:bg-gray-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-r-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition duration-300 text-sm font-medium"
                    onClick={() => toast.success(t('carts.cart.promoApplied'))}
                  >
                    {t('carts.cart.apply')}
                  </button>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-6">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1 sm:mb-2 text-sm sm:text-base">
                  {t('carts.cart.freeDelivery')}
                </h4>
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-400">
                  {t('carts.cart.freeDeliveryMessage')}
                </p>
              </div>
            </div>
          </div>

          {/* Continue Shopping */}
          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate('/medicines')}
              className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500 font-medium text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('carts.cart.continueShopping')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartComponent;