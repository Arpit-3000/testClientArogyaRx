// components/Home.js
import React, {useState} from 'react';
import Header from '../components/home/Header';
import Midcard from '../components/home/Midcard';
import Midi from '../components/home/Midi';
import Midinext from '../components/home/Midinext';
import Middileone from '../components/home/Middileone';
import Middletwo from '../components/home/Middletwo';
import Customer from '../components/home/Customer';
import Question from '../components/home/Question';
import SignupPopup from '../components/home/SignupPopup';
import { CartProvider } from '../context/cartContext';
import PharmacyMiddileone from '../components/Pharmacy/Middileone';
import PharmacyMiddletwo from '../components/Pharmacy/Middletwo';
import PharmacyMidilethree from '../components/Pharmacy/Midilethree';
import PharmacyExplore from '../components/Pharmacy/Explore';

const Home = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <CartProvider> 
            <div className="space-y-8">
                <Header />
                <Midcard/>
                <Midi/>
                <PharmacyMiddileone/>
                <Midinext/>
                <Middileone/>
                <PharmacyMiddletwo/>
                <PharmacyMidilethree/>
                <PharmacyExplore/>
                <Middletwo />
                <Customer/>
                <Question/>
                {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
            </div>
        </CartProvider>
    )
}

export default Home;
