// components/Home.js
import React from 'react';
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
            <Customer/>
            <Question/>
            <Border/>
           
        </div>
    )
}

export default Home;
