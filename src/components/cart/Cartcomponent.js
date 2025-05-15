// components/cart/CartComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cartContext';

function CartComponent() {
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
    return <div className="container mx-auto p-8 text-center">Loading cart...</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8 font-sans">
      <div className="mb-12 overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse">
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
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">Your cart is empty.</td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <tr key={item.medicineId._id} className="border-b border-gray-200 align-middle">
                  <td className="py-4 px-2">
                    <img
                      src={item.medicineId.images?.[0] || 'https://placehold.co/60x60/e2e8f0/64748b?text=Medicine'}
                      alt={item.medicineId.productName}
                      className="w-16 h-16 object-cover rounded"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/60x60/fecaca/991b1b?text=Error"; }}
                    />
                  </td>
                  <td className="py-4 px-2 text-gray-700">{item.medicineId.productName}</td>
                  <td className="py-4 px-2 text-gray-700">₹{item.price.toFixed(2)}</td>
                  <td className="py-4 px-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.medicineId._id, -1)}
                        className="px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="inline-block min-w-[30px] text-center text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.medicineId._id, 1)}
                        className="px-2 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-gray-700">₹{item.total.toFixed(2)}</td>
                  <td className="py-4 px-2 text-center">
                    <button
                      onClick={() => handleRemoveItem(item.medicineId._id)}
                      className="inline-flex items-center px-3 py-1 text-sm font-medium text-red-600 border border-red-300 rounded hover:bg-red-50 transition duration-200"
                    >
                      <span className="block sm:hidden">🗑️</span>
                      <span className="hidden sm:block">Remove</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Cart Totals</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className={`mt-8 w-full md:w-auto bg-orange-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition duration-300 ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={cartItems.length === 0}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

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

export default CartComponent;