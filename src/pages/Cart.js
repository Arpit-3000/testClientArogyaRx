import React, { useState } from 'react';
import Navbar from '../components/home/Navbar';
import Cartcomponent from '../components/cart/Cartcomponent';
import Border from '../components/home/Border';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const CartPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> {/* Wrap the components that need cart context */}
      <div>
        <Navbar onSignUpClick={() => setShowPopup(true)} />
        <Cartcomponent />
        <Border />
        {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
      </div>
    </CartProvider>
  );
};

export default CartPage;