// components/Home.js
import React, {useState} from 'react';
import Navbar from '../components/home/Navbar';
import Header from '../components/home/Header';
import Midcard from '../components/home/Midcard';
import Midi from '../components/home/Midi';
import Midinext from '../components/home/Midinext';
import Middileone from '../components/home/Middileone';
import Middletwo from '../components/home/Middletwo';
import Email from '../components/home/Email';
import Customer from '../components/home/Customer';
import Question from '../components/home/Question';
import Border from '../components/home/Border';
import SignupPopup from '../components/home/SignupPopup';


const Home = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div>
            <Navbar onSignUpClick={() => setShowPopup(true)} />
            <Header />
            <Midcard/>
            <Midi/>
            <Midinext/>
            <Middileone/>
            <Middletwo />
            <Email/>
            <Customer/>
            <Question/>
            <Border/>
           
            {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
        </div>
    )
}

export default Home;
