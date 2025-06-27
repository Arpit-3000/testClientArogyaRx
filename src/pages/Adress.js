import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'; 
import EditAddress from '../components/Profile/EditAddress';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const Adress = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> 
    <div>
      <EditAddress/>
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
        </CartProvider>
  );
};

export default Adress;
