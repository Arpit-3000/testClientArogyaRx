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

  // Format date properly
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return new Date().toLocaleDateString();
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="text-center mb-6">
          <svg
            className="mx-auto h-12 w-12 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">Order Placed Successfully!</h1>
          <p className="mt-2 text-gray-600">Thank you for your purchase, {order.name || user?.name || 'Customer'}.</p>
        </div>

        {/* Order Summary */}
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Order ID</span>
              <span className="text-gray-900">{order._id || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date</span>
              <span className="text-gray-900">{formatDate(order.createdAt)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total</span>
              <span className="text-gray-900">₹{order.totalAmount?.toFixed(2) || orderDetails?.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="text-gray-900">Cash on Delivery</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status</span>
              <span className="text-green-600 font-medium capitalize">{order.status || 'Processing'}</span>
            </div>
          </div>
        </div>

        {/* Cart Items */}
     {/* Cart Items */}
<div className="mt-8 border-t border-gray-200 pt-6">
  <h2 className="text-lg font-medium text-gray-900">Items Ordered</h2>
  <div className="mt-4 space-y-4">
    {order.items?.map((item, index) => (
      <div key={index} className="flex justify-between items-center border-b pb-2">
        <div>
          <p className="font-medium">
            {item.medicineId?.productName || 
             item.medicineDetails?.productName || 
             item.productName || 
             'Medicine'}
          </p>
          <p className="text-sm text-gray-500">
            {item.quantity} × ₹{item.price?.toFixed(2)}
          </p>
        </div>
        <span className="font-medium">
          ₹{(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    ))}
  </div>
</div>

        {/* Delivery Info */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="text-lg font-medium text-gray-900">Delivery Information</h2>
          <div className="mt-4 space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span className="font-medium">Recipient:</span>
              <span>{order.name || user?.name || 'Customer'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>{order.email || user?.email || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Contact:</span>
              <span>{order.contact || user?.contact || 'Not provided'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Address:</span>
              <span className="text-right">{order.address || 'Not provided'}</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;