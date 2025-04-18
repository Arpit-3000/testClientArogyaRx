import React from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import Headerp from '../components/Pharmacy/Headerp';
import Frequentlybooked from '../components/Pharmacy/Frequentlybooked';



const Pharmacy = () => {



  return (
    <div>
      <Navbar/>
      <Headerp/>
      <Frequentlybooked/>
    </div>
  );
};

export default Pharmacy;
