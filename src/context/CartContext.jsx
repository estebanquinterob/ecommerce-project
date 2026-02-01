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

   // Eliminar un producto por ID
   const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Valor compartido para toda la app
  const value = { cart, addToCart, removeFromCart, clearCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook para usar el contexto fácilmente -- esto debo moverlo a otro archivo separado
export function useCart() {
  return useContext(CartContext);
}
