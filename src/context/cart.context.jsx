import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIscartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIscartOpen] = useState(false);
  const value = { isCartOpen, setIscartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
