import React, { useState, useEffect } from 'react';

/**
 * Cart Component
 * Displays an interactive shopping cart UI.
 * Allows users to adjust item quantities, remove items, and view updated totals.
 */
function Cartcomponent() {
  // Initial hardcoded cart items data (will be managed by state)
  const initialCartItems = [
    {
      id: 1,
      image: 'https://placehold.co/60x60/e2e8f0/64748b?text=Food', // Placeholder image URL
      title: 'Greek Salad',
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      image: 'https://placehold.co/60x60/e2e8f0/64748b?text=Food', // Placeholder image URL
      title: 'Lasagna Rolls',
      price: 160,
      quantity: 1,
    },
  ];

  // State for managing cart items
  const [cartItems, setCartItems] = useState(initialCartItems.map(item => ({
    ...item,
    total: item.price * item.quantity // Calculate initial total for each item
  })));

  // State for totals (calculated dynamically)
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  // Hardcoded delivery fee (can be made dynamic if needed)
  const deliveryFee = 50;

  // Effect to recalculate totals whenever cartItems change
  useEffect(() => {
    // Calculate subtotal by summing up the total of each item
    const newSubtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
    setSubtotal(newSubtotal);
    // Calculate total including delivery fee
    setTotal(newSubtotal + deliveryFee);
  }, [cartItems, deliveryFee]); // Dependency array includes cartItems and deliveryFee

  /**
   * Handles changing the quantity of an item.
   * @param {number} itemId - The ID of the item to update.
   * @param {number} change - The amount to change the quantity by (+1 or -1).
   */
  const handleQuantityChange = (itemId, change) => {
    setCartItems(currentItems => {
      // Find the item index
      const itemIndex = currentItems.findIndex(item => item.id === itemId);
      if (itemIndex === -1) return currentItems; // Item not found

      const updatedItems = [...currentItems];
      const item = updatedItems[itemIndex];
      const newQuantity = item.quantity + change;

      if (newQuantity <= 0) {
        // Remove item if quantity drops to 0 or below
        return updatedItems.filter(i => i.id !== itemId);
      } else {
        // Update quantity and total for the item
        updatedItems[itemIndex] = {
          ...item,
          quantity: newQuantity,
          total: item.price * newQuantity,
        };
        return updatedItems;
      }
    });
  };

  /**
   * Handles removing an item from the cart directly.
   * @param {number} itemId - The ID of the item to remove.
   */
  const handleRemoveItem = (itemId) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };


  return (
    // Main container for the cart page with padding
    <div className="container mx-auto p-4 md:p-8 font-sans">
      {/* Cart items table section */}
      <div className="mb-12 overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-2 text-gray-600 font-medium text-sm">Items</th>
              <th className="text-left py-3 px-2 text-gray-600 font-medium text-sm">Title</th>
              <th className="text-left py-3 px-2 text-gray-600 font-medium text-sm">Price</th>
              <th className="text-center py-3 px-2 text-gray-600 font-medium text-sm">Quantity</th>
              <th className="text-left py-3 px-2 text-gray-600 font-medium text-sm">Total</th>
              <th className="text-center py-3 px-2 text-gray-600 font-medium text-sm">Remove</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Check if cart is empty */}
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">Your cart is empty.</td>
              </tr>
            ) : (
              /* Map through cart items */
              cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 align-middle">
                  {/* Item Image */}
                  <td className="py-4 px-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                      // Basic fallback in case image fails to load
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/60x60/fecaca/991b1b?text=Error"; }}
                    />
                  </td>
                  {/* Item Title */}
                  <td className="py-4 px-2 text-gray-700">{item.title}</td>
                  {/* Item Price */}
                  <td className="py-4 px-2 text-gray-700">₹{item.price.toFixed(2)}</td>
                  {/* Item Quantity (Interactive) */}
                  <td className="py-4 px-2 text-center">
                     <div className="flex items-center justify-center space-x-2">
                       {/* Decrease Quantity Button */}
                       <button
                         onClick={() => handleQuantityChange(item.id, -1)}
                         className="px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                         aria-label={`Decrease quantity of ${item.title}`}
                       >
                         -
                       </button>
                       {/* Quantity Display */}
                       <span className="inline-block min-w-[30px] text-center text-gray-700">
                         {item.quantity}
                       </span>
                       {/* Increase Quantity Button */}
                       <button
                         onClick={() => handleQuantityChange(item.id, 1)}
                         className="px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                         aria-label={`Increase quantity of ${item.title}`}
                       >
                         +
                       </button>
                     </div>
                  </td>
                  {/* Item Total */}
                  <td className="py-4 px-2 text-gray-700">₹{item.total.toFixed(2)}</td>
                  {/* Remove Button */}
                  <td className="py-4 px-2 text-center">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      x {/* Simple 'x' for remove */}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Cart Totals and Promo Code Section */}
      {/* Using flex layout for responsiveness */}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Cart Totals */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Cart Totals</h2>
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
          {/* Checkout Button */}
          {/* Disable checkout if cart is empty */}
          <button
            className={`mt-8 w-full md:w-auto bg-orange-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition duration-300 ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={cartItems.length === 0}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code Section */}
        <div className="flex-1 md:max-w-sm">
           <p className="text-gray-600 mb-2">If you have a promo code, Enter it here</p>
           <div className="flex">
             <input
               type="text"
               placeholder="promo code"
               className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400"
             />
             <button className="bg-gray-800 text-white py-3 px-6 rounded-r-md hover:bg-gray-900 transition duration-300">
               Submit
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}

// Export the component for use in other parts of the application
export default Cartcomponent;
