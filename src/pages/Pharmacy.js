import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import Headerp from '../components/Pharmacy/Headerp';
import Frequentlybooked from '../components/Pharmacy/Frequentlybooked';
import Midi from '../components/Pharmacy/Midi';
import Middileone from '../components/Pharmacy/Middileone';
import Middletwo from '../components/Pharmacy/Middletwo';
import Midilethree from '../components/Pharmacy/Midilethree';
import Explore from '../components/Pharmacy/Explore';
import Question from '../components/Pharmacy/Question';
import Border from '../components/home/Border';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const Pharmacy = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> 
    <div>
        <Navbar onSignUpClick={() => setShowPopup(true)} />
      <Headerp/>
      <Frequentlybooked/>
      <Midi/>
      <Middileone/>
      <Middletwo/>
      <Midilethree/>
      <Explore/>
      <Question/>
      <Border/>
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
        </CartProvider>
  );
};

export default Pharmacy;
