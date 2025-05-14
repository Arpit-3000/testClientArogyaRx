// App.js
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pharmacy from './pages/Pharmacy';
import Contact from './pages/Contact';
import Medicines from './pages/Medicines';
import Labtest from './pages/Labtest';
import Cart from './pages/Cart';
import Checkout from './components/cart/Checkout'; // 🔁 Import Checkout
import OrderConfirmation from './components/cart/OrderConfirmation';
import Developer from './pages/Developer';

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/labtest" element={<Labtest />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation/>} />
          <Route path="/devl" element={<Developer/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
