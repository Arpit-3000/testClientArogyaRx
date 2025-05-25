import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import Order from '../components/Profile/Order';
import Border from '../components/home/Border';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const Orders = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> 
    <div>
       <Navbar onSignUpClick={() => setShowPopup(true)} />
      <Order/>
      <Border/>
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
        </CartProvider>
  );
};

export default Orders;
