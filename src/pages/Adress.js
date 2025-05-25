import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import EditAddress from '../components/Profile/EditAddress';
import Border from '../components/home/Border';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const Adress = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> 
    <div>
       <Navbar onSignUpClick={() => setShowPopup(true)} />
      <EditAddress/>
      <Border/>
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
        </CartProvider>
  );
};

export default Adress;
