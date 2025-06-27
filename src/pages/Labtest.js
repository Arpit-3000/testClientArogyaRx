// components/Home.js
import React, {useState} from 'react';
import Header from '../components/labtest/Header';
import Bookedtest from '../components/labtest/Bookedtest';
import Health from '../components/labtest/Health';
import Middleone from '../components/labtest/Middleone';
import Middletwo from '../components/labtest/Middletwo';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider



const Labtest = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <CartProvider> 
        <div>
            <Header />
            <Bookedtest/>
            <Health/>
            <Middleone/>
            <Middletwo/>
           
            {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
        </div>
            </CartProvider>
    )
}

export default Labtest;
