import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Navbar from '../components/home/Navbar';
import Searchbar from '../components/medicines/Searchbar';
import Product from '../components/medicines/Product';
import Offers from '../components/medicines/Offers';
import Services from '../components/medicines/Services';
import Middle from '../components/medicines/Middle';
import Lastcomp from '../components/medicines/Lastcomp';
import Border from '../components/home/Border';
import SignupPopup from '../components/home/SignupPopup';
import MedicineList from '../components/medicines/MedicineList';

const Medicines = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="">
      <Navbar onSignUpClick={() => setShowPopup(true)} />
      <Searchbar />
      <Product />
      <Offers />
      <MedicineList />
      <Services />
      <Middle />
      <Lastcomp />
      <Border />
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Medicines;

