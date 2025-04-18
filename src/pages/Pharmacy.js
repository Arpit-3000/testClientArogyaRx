import React from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import Headerp from '../components/Pharmacy/Headerp';
import Frequentlybooked from '../components/Pharmacy/Frequentlybooked';
import Midi from '../components/Pharmacy/Midi';
import Middileone from '../components/Pharmacy/Middileone';
import Middletwo from '../components/Pharmacy/Middletwo';


const Pharmacy = () => {



  return (
    <div>
      <Navbar/>
      <Headerp/>
      <Frequentlybooked/>
      <Midi/>
      <Middileone/>
      <Middletwo/>
    </div>
  );
};

export default Pharmacy;
