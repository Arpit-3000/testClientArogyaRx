import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function OrderConfirmation() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { order, orderDetails } = location.state || {};
  const user = JSON.parse(localStorage.getItem('user'));

  if (!order) {
    return (
      <div className="container mx-auto p-8 text-center bg-white dark:bg-gray-900 min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {t('orderConfirmation.orderNotFound')}
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {t('orderConfirmation.orderNotFoundMessage')}
        </p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 dark:hover:bg-orange-600 transition-colors"
        >
          {t('orderConfirmation.goToHome')}
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleString(t('locale'), {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return new Date().toLocaleDateString(t('locale'));
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'text-green-600 dark:text-green-400';
      case 'cancelled':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-orange-600 dark:text-orange-400';
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-0 font-sans text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 flex items-center justify-between border-b border-gray-300 dark:border-gray-600">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t('orderConfirmation.invoiceTitle')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {t('orderConfirmation.thankYouMessage')}
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-800 dark:text-white">
              {t('orderConfirmation.orderId')}: <span className="text-gray-600 dark:text-gray-300">{order._id || t('orderConfirmation.notAvailable')}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('orderConfirmation.date')}: {formatDate(order.createdAt)}
            </p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-gray-300 dark:border-gray-700">
          <div>
            <h2 className="text-gray-800 dark:text-white font-semibold mb-1">
              {t('orderConfirmation.billedTo')}:
            </h2>
            <p className="dark:text-gray-300">{order.name || user?.name || t('orderConfirmation.customer')}</p>
            <p className="dark:text-gray-300">{order.email || user?.email || t('orderConfirmation.notProvided')}</p>
            <p className="dark:text-gray-300">{order.contact || user?.contact || t('orderConfirmation.notProvided')}</p>
            <p className="dark:text-gray-300">{order.address || t('orderConfirmation.notProvided')}</p>
          </div>
          <div>
            <h2 className="text-gray-800 dark:text-white font-semibold mb-1">
              {t('orderConfirmation.paymentMethod')}:
            </h2>
            <p className="dark:text-gray-300">{t('orderConfirmation.cashOnDelivery')}</p>
            <p className={`mt-4 font-semibold ${getStatusColor(order.status)}`}>
              {t('orderConfirmation.status')}: {t(`orderConfirmation.statuses.${order.status?.toLowerCase()}`) || t('orderConfirmation.statuses.processing')}
            </p>
          </div>
        </div>

        {/* Items Table */}
        <div className="p-6">
          <h2 className="text-gray-800 dark:text-white font-semibold mb-4">
            {t('orderConfirmation.items')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
                <tr>
                  <th className="p-3 font-medium text-gray-800 dark:text-white">
                    {t('orderConfirmation.item')}
                  </th>
                  <th className="p-3 font-medium text-right text-gray-800 dark:text-white">
                    {t('orderConfirmation.quantity')}
                  </th>
                  <th className="p-3 font-medium text-right text-gray-800 dark:text-white">
                    {t('orderConfirmation.price')}
                  </th>
                  <th className="p-3 font-medium text-right text-gray-800 dark:text-white">
                    {t('orderConfirmation.total')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.items?.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3 dark:text-gray-300">
                      {item.medicineId?.productName || item.medicineDetails?.productName || item.productName || t('orderConfirmation.medicine')}
                    </td>
                    <td className="p-3 text-right dark:text-gray-300">{item.quantity}</td>
                    <td className="p-3 text-right dark:text-gray-300">₹{item.price?.toFixed(2)}</td>
                    <td className="p-3 text-right dark:text-gray-300">₹{(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total Amount */}
        <div className="px-6 pb-6 flex justify-end">
          <div className="w-full sm:w-1/2">
            <div className="flex justify-between py-2 text-gray-700 dark:text-gray-300">
              <span>{t('orderConfirmation.subtotal')}:</span>
              <span>₹{order.totalAmount?.toFixed(2) || orderDetails?.subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700 dark:text-gray-300">
              <span>{t('orderConfirmation.deliveryFee')}:</span>
              <span>₹{orderDetails?.deliveryFee?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between py-2 font-semibold text-gray-900 dark:text-white border-t border-gray-300 dark:border-gray-700">
              <span>{t('orderConfirmation.totalAmount')}:</span>
              <span>₹{order.totalAmount?.toFixed(2) || orderDetails?.total?.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-600">
          {t('orderConfirmation.footerNote')}
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 dark:hover:bg-green-600 transition-colors"
        >
          {t('orderConfirmation.goToHome')}
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;