import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Headerp from '../components/Pharmacy/Headerp';
import Frequentlybooked from '../components/Pharmacy/Frequentlybooked';
import Midi from '../components/Pharmacy/Midi';
import Middileone from '../components/Pharmacy/Middileone';
import Middletwo from '../components/Pharmacy/Middletwo';
import Midilethree from '../components/Pharmacy/Midilethree';
import Explore from '../components/Pharmacy/Explore';
import Question from '../components/Pharmacy/Question';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider

const Pharmacy = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <CartProvider> 
    <div>
      <Headerp/>
      <Frequentlybooked/>
      <Midi/>
      <Middileone/>
      <Middletwo/>
      <Midilethree/>
      <Explore/>
      <Question/>
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
        </CartProvider>
  );
};

export default Pharmacy;
