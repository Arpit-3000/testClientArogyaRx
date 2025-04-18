import React from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import Headerp from '../components/Pharmacy/Headerp';
import Frequentlybooked from '../components/Pharmacy/Frequentlybooked';
import Midi from '../components/Pharmacy/Midi';
import Middileone from '../components/Pharmacy/Middileone';
import Middletwo from '../components/Pharmacy/Middletwo';
import Midilethree from '../components/Pharmacy/Midilethree';
import Explore from '../components/Pharmacy/Explore';
import Prescription from '../components/Pharmacy/Prescription';
import Question from '../components/Pharmacy/Question';
import Border from '../components/home/Border';


const Pharmacy = () => {
  return (
    <div>
      <Navbar/>
      <Headerp/>
      <Frequentlybooked/>
      <Midi/>
      <Middileone/>
      <Middletwo/>
      <Midilethree/>
      <Explore/>
      <Prescription/>
      <Question/>
      <Border/>
    </div>
  );
};

export default Pharmacy;
