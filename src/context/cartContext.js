import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(50);
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider value={{ subtotal, setSubtotal, deliveryFee, total, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
