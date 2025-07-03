import React, { useState } from 'react';
import Cartcomponent from '../components/cart/Cartcomponent';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const CartPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> {/* Wrap the components that need cart context */}
      <div className="pt-0"> {/* Add padding to push content below navbar */}
        <Cartcomponent />
        {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
      </div>
    </CartProvider>
  );
};

export default CartPage;