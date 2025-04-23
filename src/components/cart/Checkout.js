import React, { useState } from 'react';

/**
 * Checkout Component
 * Displays the checkout form including delivery information,
 * order summary, and payment method selection.
 *
 * @param {object} props - Component props.
 * @param {number} props.subtotal - The subtotal passed from the cart.
 * @param {number} props.deliveryFee - The delivery fee.
 * @param {number} props.total - The total amount.
 */
function Checkout({ subtotal = 360, deliveryFee = 50, total = 410 }) { // Default values based on image
  // State to manage the selected payment method
  const [paymentMethod, setPaymentMethod] = useState('cod'); // Default to 'cod'

  // Handle payment method change
  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  // Handle form submission (basic placeholder)
  const handlePlaceOrder = (event) => {
    event.preventDefault(); // Prevent default form submission
    // In a real application, you would collect form data and process the order
    console.log('Placing order with:', {
      paymentMethod,
      // Add other form field values here
    });
    alert('Order Placed (Placeholder)!'); // Replace with actual order logic
  };

  return (
    // Main container for the checkout page
    <div className="container mx-auto p-4 md:p-8 font-sans">
      <form onSubmit={handlePlaceOrder}>
        {/* Flex container for layout */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Delivery Information Section (Left Side) */}
          <div className="flex-1 lg:w-2/3">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Delivery Information</h2>
            {/* Grid for form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input type="text" id="firstName" name="firstName" required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input type="text" id="lastName" name="lastName" required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              {/* Email Address */}
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              {/* Street */}
              <div className="md:col-span-2">
                <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Street</label>
                <input type="text" id="street" name="street" required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input type="text" id="city" name="city" required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input type="text" id="state" name="state" required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              {/* Zip Code */}
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Zip code</label>
                <input type="text" id="zip" name="zip" required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input type="text" id="country" name="country" required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              {/* Phone */}
              <div className="md:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" id="phone" name="phone" required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
          </div>

          {/* Cart Totals & Payment Section (Right Side) */}
          <div className="flex-1 lg:w-1/3">
            {/* Cart Totals */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Cart Totals</h2>
              <div className="space-y-3 text-gray-700">
                {/* Subtotal */}
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                {/* Delivery Fee */}
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                {/* Total */}
                <div className="flex justify-between font-semibold text-lg pt-2">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Method</h2>
              <div className="space-y-3">
                {/* COD Option */}
                <label className="flex items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:border-orange-500 has-[:checked]:border-orange-500 has-[:checked]:ring-1 has-[:checked]:ring-orange-500">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={handlePaymentChange}
                    className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                  />
                  <span className="ml-3 text-gray-700">COD ( Cash on delivery )</span>
                </label>
                {/* Stripe Option */}
                <label className="flex items-center p-4 border border-gray-300 rounded-md cursor-pointer hover:border-orange-500 has-[:checked]:border-orange-500 has-[:checked]:ring-1 has-[:checked]:ring-orange-500">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="stripe"
                    checked={paymentMethod === 'stripe'}
                    onChange={handlePaymentChange}
                    className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                  />
                  <span className="ml-3 text-gray-700">Stripe ( Credit / Debit )</span>
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="mt-8 w-full bg-orange-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
