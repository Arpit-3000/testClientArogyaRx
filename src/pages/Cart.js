import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import Cartcomponent from '../components/cart/Cartcomponent';
import Border from '../components/home/Border';
import SignupPopup from '../components/home/SignupPopup';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
       <Navbar onSignUpClick={() => setShowPopup(true)} />
      <Cartcomponent/>
      <Border/>
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Contact;
