import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import MyProfile from '../components/Profile/MyProfile';
import Border from '../components/home/Border';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const Profilesection = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> 
    <div>
       <Navbar onSignUpClick={() => setShowPopup(true)} />
      <MyProfile/>
      <Border/>
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
        </CartProvider>
  );
};

export default Profilesection;
