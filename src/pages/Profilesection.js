import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'; 
import MyProfile from '../components/Profile/MyProfile';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const Profilesection = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> 
      <div className="pt-0 px-4 md:px-8">
        <MyProfile/>
        {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
      </div>
    </CartProvider>
  );
};

export default Profilesection;
