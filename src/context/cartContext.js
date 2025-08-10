// context/cartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import API from '../services/api';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const deliveryFee = 50; // Example delivery fee
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const res = await API.get('/cart');
      const items = res.data.items.map(item => ({
        ...item,
        total: item.price * item.quantity,
      }));
      setCartItems(items);
    } catch (err) {
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    const newSubtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal + deliveryFee);
  }, [cartItems, deliveryFee]);

  const updateCart = async () => {
    try {
      const res = await API.get('/cart');
      const items = res.data.items.map(item => ({
        ...item,
        total: item.price * item.quantity,
      }));
      setCartItems(items);
    } catch (err) {
      console.error('Error updating cart:', err);
      alert('Failed to update cart. Please try again.');
    }
  };
  const addToCart = async (medicineId, quantity = 1) => {
    try {
      await API.post('/cart/add', { medicineId, quantity });
      await updateCart(); // refresh the cart
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Failed to add item to cart. Please try again.');
    }
  };
  

  const handleQuantityChange = async (itemId, change) => {
    try {
      const item = cartItems.find(item => item.medicineId._id === itemId);
      const newQuantity = item.quantity + change;

      if (newQuantity <= 0) {
        await API.post('/cart/remove', { medicineId: itemId });
      } else {
        await API.post('/cart/add', {
          medicineId: itemId,
          quantity: change,
        });
      }
      await updateCart();
    } catch (err) {
      console.error('Error updating cart:', err);
      alert('Failed to update cart. Please try again.');
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      await API.post('/cart/remove', { medicineId: itemId });
      await updateCart();
    } catch (err) {
      console.error('Error removing item:', err);
      alert('Failed to remove item. Please try again.');
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        subtotal,
        setSubtotal,
        total,
        setTotal,
        deliveryFee,
        loading,
        handleQuantityChange,
        handleRemoveItem,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};