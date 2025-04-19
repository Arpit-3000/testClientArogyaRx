// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pharmacy from './pages/Pharmacy';
import Contact from './pages/Contact';
import Medicines from './pages/Medicines';
// import LabTest from './components/LabTest';
// import Hospitals from './components/Hospitals';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/medicines" element={<Medicines />} />
        {/*
        <Route path="/labtest" element={<LabTest />} />
       
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
