// components/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Midcard from '../components/Midcard';
import Midi from '../components/Midi';
import Midinext from '../components/Midinext';
import Middileone from '../components/Middileone';
import Middletwo from '../components/Middletwo';
import Email from '../components/Email';
import Customer from '../components/Customer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Midcard/>
            <Midi/>
            <Midinext/>
            <Middileone/>
            <Middletwo />
            <Email/>
            <Customer/>
        </div>
    )
}

export default Home;
