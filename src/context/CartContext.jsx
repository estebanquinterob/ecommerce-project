import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Crear el provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Función para añadir un producto
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Valor compartido para toda la app
  const value = { cart, addToCart, clearCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook para usar el contexto fácilmente
export function useCart() {
  return useContext(CartContext);
}
