// components/Home.js
import React, {useState} from 'react';
import Navbar from '../components/home/Navbar';
import Header from '../components/home/Header';
import Midcard from '../components/home/Midcard';
import Midi from '../components/home/Midi';
import Midinext from '../components/home/Midinext';
import Middileone from '../components/home/Middileone';
import Middletwo from '../components/home/Middletwo';
import Customer from '../components/home/Customer';
import Question from '../components/home/Question';
import Border from '../components/home/Border';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext'; // Import CartProvider


const Home = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <CartProvider> 
        <div>
            <Navbar onSignUpClick={() => setShowPopup(true)} />
            <Header />
            <Midcard/>
            <Midi/>
            <Midinext/>
            <Middileone/>
            <Middletwo />
            <Customer/>
            <Question/>
            <Border/>
           
            {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
        </div>
            </CartProvider>
    )
}

export default Home;
