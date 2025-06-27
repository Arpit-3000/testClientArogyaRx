import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Header from '../components/contact/Header';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> 
    <div>
      <Header/>
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
        </CartProvider>
  );
};

export default Contact;
