// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './components/Header';
// import Main from './components/Main';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header />
  
//       <div className="bg-blue-500 text-white p-6 rounded-lg m-5" >
//         <h1 className="text-3xl font-bold">¡Tailwind funciona! 🚀</h1>
//         <h2 className='bg-amber-300 text-amber-950'>Estoy orgulloso de haber llegado a una solucion</h2>
//       </div>
//       <Main />
      
//     </>
//   )
// }

// export default App

import { useState } from "react";
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import ProductCard from "./components/ProductCard";

function App() {
  // State for the cart
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="App">
      {/* Header Component with Cart Count */}
      <Header cartCount={cart.length} />

      {/* Main Content Component */}
      <ProductsPage onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
