import React from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import Searchbar from '../components/medicines/Searchbar';
import Product from '../components/medicines/Product';
import Offers from '../components/medicines/Offers';
import Services from '../components/medicines/Services';
import Middle from '../components/medicines/Middle';
import Lastcomp from '../components/medicines/Lastcomp';
import Border from '../components/home/Border';


const Medicines = () => {
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Product/>
      <Offers/>
      <Services/>
      <Middle/>
      <Lastcomp/>
      <Border/>

    </div>
  );
};

export default Medicines;
