import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { order, orderDetails } = location.state || {};
  const user = JSON.parse(localStorage.getItem('user'));

  if (!order) {
    return (
      <div className="container mx-auto p-8 text-center bg-white dark:bg-gray-900 min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Order Not Found</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">We couldn't find your order details.</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 dark:hover:bg-orange-600 transition-colors"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return new Date().toLocaleDateString();
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-0 font-sans text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 flex items-center justify-between border-b border-gray-300 dark:border-gray-600">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Order Invoice</h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Thank you for your purchase!</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-800 dark:text-white">Order ID: <span className="text-gray-600 dark:text-gray-300">{order._id || 'N/A'}</span></p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Date: {formatDate(order.createdAt)}</p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-gray-300 dark:border-gray-700">
          <div>
            <h2 className="text-gray-800 dark:text-white font-semibold mb-1">Billed To:</h2>
            <p className="dark:text-gray-300">{order.name || user?.name || 'Customer'}</p>
            <p className="dark:text-gray-300">{order.email || user?.email || 'Not provided'}</p>
            <p className="dark:text-gray-300">{order.contact || user?.contact || 'Not provided'}</p>
            <p className="dark:text-gray-300">{order.address || 'Not provided'}</p>
          </div>
          <div>
            <h2 className="text-gray-800 dark:text-white font-semibold mb-1">Payment Method:</h2>
            <p className="dark:text-gray-300">Cash on Delivery</p>
            <p className={`mt-4 font-semibold ${
              order.status === 'Completed' ? 'text-green-600 dark:text-green-400' : 
              order.status === 'Cancelled' ? 'text-red-600 dark:text-red-400' : 
              'text-orange-600 dark:text-orange-400'
            }`}>
              Status: {order.status || 'Processing'}
            </p>
          </div>
        </div>

        {/* Items Table */}
        <div className="p-6">
          <h2 className="text-gray-800 dark:text-white font-semibold mb-4">Items</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
                <tr>
                  <th className="p-3 font-medium text-gray-800 dark:text-white">Item</th>
                  <th className="p-3 font-medium text-right text-gray-800 dark:text-white">Qty</th>
                  <th className="p-3 font-medium text-right text-gray-800 dark:text-white">Price</th>
                  <th className="p-3 font-medium text-right text-gray-800 dark:text-white">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items?.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3 dark:text-gray-300">
                      {item.medicineId?.productName || item.medicineDetails?.productName || item.productName || 'Medicine'}
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
              <span>Subtotal:</span>
              <span>₹{order.totalAmount?.toFixed(2) || orderDetails?.subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 text-gray-700 dark:text-gray-300">
              <span>Delivery Fee:</span>
              <span>₹{orderDetails?.deliveryFee?.toFixed(2) || '0.00'}</span>
            </div>
            <div className="flex justify-between py-2 font-semibold text-gray-900 dark:text-white border-t border-gray-300 dark:border-gray-700">
              <span>Total Amount:</span>
              <span>₹{order.totalAmount?.toFixed(2) || orderDetails?.total?.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 dark:bg-gray-700 p-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-600">
          This is a system generated invoice. For any queries, contact our support.
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 dark:hover:bg-green-600 transition-colors"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;