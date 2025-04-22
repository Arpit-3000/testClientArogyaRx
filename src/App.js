// App.js
import React, {useState} from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pharmacy from './pages/Pharmacy';
import Contact from './pages/Contact';
import Medicines from './pages/Medicines';
import Labtest from './pages/Labtest';
// import Hospitals from './components/Hospitals';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';

function App() {

  return (
    <>
    <Toaster/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/labtest" element={<Labtest />} />
        {/*
  
       
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </Router>
    
    </>
   
  );
}

export default App;
