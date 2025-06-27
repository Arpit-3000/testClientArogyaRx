import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
import Searchbar from '../components/medicines/Searchbar';
import Product from '../components/medicines/Product';
import Offers from '../components/medicines/Offers';
import Services from '../components/medicines/Services';
import Middle from '../components/medicines/Middle';
import Lastcomp from '../components/medicines/Lastcomp';
import SignupPopup from '../components/home/SignupPopup';
import MedicineList from '../components/medicines/MedicineList';
import { CartProvider } from '../context/cartContext'; // Import CartProvider
const Medicines = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    
    <CartProvider> 
    <div className="pt-12 sm:pt-10">
      <Searchbar />
      <Product />
      <Offers />
      <MedicineList />
      <Services />
      <Middle />
      <Lastcomp />
      {showPopup && <SignupPopup onClose={() => setShowPopup(false)} />}
    </div>
        </CartProvider>
  );
};

export default Medicines;

