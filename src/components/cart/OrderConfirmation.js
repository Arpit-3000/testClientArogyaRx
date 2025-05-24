import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { order, orderDetails } = location.state || {};
  const user = JSON.parse(localStorage.getItem('user'));

  if (!order) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Order Not Found</h1>
        <p className="mt-4 text-gray-600">We couldn't find your order details.</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
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
    <div className="container mx-auto py-10 px-4 md:px-0 font-sans text-sm text-gray-700">
      <div className="max-w-3xl mx-auto bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-100 p-6 flex items-center justify-between border-b border-gray-300">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Order Invoice</h1>
            <p className="text-gray-600 text-sm">Thank you for your purchase!</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-gray-800">Order ID: <span className="text-gray-600">{order._id || 'N/A'}</span></p>
            <p className="text-sm text-gray-500">Date: {formatDate(order.createdAt)}</p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-gray-300">
          <div>
            <h2 className="text-gray-800 font-semibold mb-1">Billed To:</h2>
            <p>{order.name || user?.name || 'Customer'}</p>
            <p>{order.email || user?.email || 'Not provided'}</p>
            <p>{order.contact || user?.contact || 'Not provided'}</p>
            <p>{order.address || 'Not provided'}</p>
          </div>
          <div>
            <h2 className="text-gray-800 font-semibold mb-1">Payment Method:</h2>
            <p>Cash on Delivery</p>
            <p className="mt-4 font-semibold text-green-600">Status: {order.status || 'Processing'}</p>
          </div>
        </div>

        {/* Items Table */}
        <div className="p-6">
          <h2 className="text-gray-800 font-semibold mb-4">Items</h2>
          <table className="w-full text-left border border-gray-300">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="p-3 font-medium">Item</th>
                <th className="p-3 font-medium text-right">Qty</th>
                <th className="p-3 font-medium text-right">Price</th>
                <th className="p-3 font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items?.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="p-3">
                    {item.medicineId?.productName || item.medicineDetails?.productName || item.productName || 'Medicine'}
                  </td>
                  <td className="p-3 text-right">{item.quantity}</td>
                  <td className="p-3 text-right">₹{item.price?.toFixed(2)}</td>
                  <td className="p-3 text-right">₹{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Amount */}
        <div className="px-6 pb-6 flex justify-end">
          <div className="w-full sm:w-1/2">
            <div className="flex justify-between py-2 text-gray-700">
              <span>Subtotal:</span>
              <span>₹{order.totalAmount?.toFixed(2) || orderDetails?.total?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 font-semibold text-gray-900 border-t border-gray-300">
              <span>Total Amount:</span>
              <span>₹{order.totalAmount?.toFixed(2) || orderDetails?.total?.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-sm text-gray-500 border-t border-gray-300">
          This is a system generated invoice. For any queries, contact our support.
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
