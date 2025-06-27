import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-white dark:bg-gray-900 rounded shadow-md dark:shadow-gray-800/50">
      {/* Back Button */}
      <button
        onClick={() => navigate('/profilesection')}
        className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-2 flex items-center"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to My Orders
      </button>

      {/* Order Number and Date */}
      <div className="flex flex-col sm:flex-row justify-between border border-gray-200 dark:border-gray-700 rounded p-4">
        <div className="mb-3 sm:mb-0">
          <p className="font-semibold text-gray-700 dark:text-gray-300">Order Number</p>
          <p className="mt-1 text-gray-900 dark:text-white font-mono text-lg">70638165</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-semibold text-gray-700 dark:text-gray-300">Order Placed</p>
          <p className="mt-1 text-gray-900 dark:text-white font-mono text-lg">23 May 2025</p>
        </div>
      </div>

      {/* Arriving By and Product */}
      <div className="border border-gray-200 dark:border-gray-700 rounded p-4 space-y-3">
        <p className="font-semibold text-gray-700 dark:text-gray-300">
          Arriving By <span className="font-normal">30 May</span>
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
          <img
            src="https://rukminim1.flixcart.com/image/312/312/xif0q/trouser/t/6/m/32-men-s-black-jogger-pants-beevee-original-imagj68pjhzfyvkp.jpeg?q=70"
            alt="Paracetamo Tablets"
            className="w-full sm:w-24 h-24 object-cover rounded self-start"
          />
          <div className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
            <p className="font-semibold text-gray-900 dark:text-white">IBUACT</p>
            <p>Paracetamo Tablet</p>
            <p>Size: 5 packets</p>
            <p>Price: ₹49</p>
          </div>
        </div>
      </div>

      {/* Order Shipped Section */}
      <div className="border border-gray-200 dark:border-gray-700 rounded p-4 space-y-3">
        <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 font-semibold">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h1l1 2h13l1-2h1M16 16v2a2 2 0 01-2 2H10a2 2 0 01-2-2v-2m8-2H6"
            />
          </svg>
          <span>Order Shipped</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">On 24 May 2025, 05:01 pm</p>
        <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden mt-2 relative">
          <div className="absolute left-0 top-0 h-2 bg-orange-500" style={{ width: '80%' }}></div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-xs text-right mt-1">
          Arriving by <strong className="text-gray-700 dark:text-gray-300">30 May 2025</strong>
        </p>

        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2 sm:gap-4">
          <button
            disabled
            className="flex-1 cursor-not-allowed border border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 rounded py-2 text-center"
          >
            Cancel
          </button>
          <button className="flex-1 border border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded py-2 text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            Track
          </button>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="border border-gray-200 dark:border-gray-700 rounded p-4 space-y-2">
        <p className="font-semibold text-gray-700 dark:text-gray-300">Shipping Address</p>
        <p className="text-gray-800 dark:text-gray-200 text-sm">
          shivam Kumar | 8791456576
          <br />
          Aruna Nagar, District-Etah, Street near baithak hotel,
          Aruna Nagar, baithak hotel Etah, GT road, Etah, Uttar Pradesh, 207120
        </p>
        <button className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3 py-1 rounded float-right">
          Home
        </button>
      </div>

      {/* Payment Summary */}
      <div className="border border-gray-200 dark:border-gray-700 rounded p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-sm">Total Price</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">₹93.00</p>
          <button className="text-blue-600 dark:text-blue-400 text-sm mt-1 hover:underline">View Breakup</button>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-sm text-gray-700 dark:text-gray-300">Paid by</p>
          <p className="text-md font-medium text-gray-900 dark:text-white">UPI</p>
        </div>
      </div>

      {/* Help Section */}
      <div className="border border-gray-200 dark:border-gray-700 rounded p-4 text-center text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer transition-colors">
        Need Help?
      </div>

      {/* Tracking Section with All Events */}
      <div className="border border-gray-200 dark:border-gray-700 rounded p-4 space-y-3">
        <p className="font-semibold text-gray-700 dark:text-gray-300">Track Your Order</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Status:</strong> In Transit
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Courier Partner:</strong> Delhivery
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>AWS/Tracking ID:</strong> 1442979931713
        </p>

        {/* Timeline */}
        <div className="mt-4">
          <p className="font-semibold text-gray-600 dark:text-gray-400">
            Arriving by <span className="text-black dark:text-white">Fri, 30 May, 2025</span>
          </p>
          <ul className="mt-2 space-y-1">
            {[
              { label: 'In Transit On', date: '25 May 2025' },
              { label: 'In Transit On', date: '25 May 2025' },
              { label: 'In Transit On', date: '25 May 2025' },
              { label: 'Picked Up On', date: '24 May 2025' },
              { label: 'Out For Pickup On', date: '24 May 2025' },
              { label: 'Order Placed on', date: '23 May 2025' },
            ].map((event, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-green-700 dark:text-green-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{event.label}</span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">{event.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Order;