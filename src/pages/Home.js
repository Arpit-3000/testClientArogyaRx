// components/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Midcard from '../components/Midcard';
import Midi from '../components/Midi';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Midcard/>
            <Midi/>
        </div>
    )
}

export default Home;
