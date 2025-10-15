
// aqui se importa react router dom para las rutas y que se pueda navegar entre paginas sin recargar la pagina
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";

function App() {

  // ** se creo el contexto CartContext para manejar el estado del carrito de compras en toda la aplicacion
  // State for the cart
  // const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  // const handleAddToCart = (product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  // };

  return (
    <Router>
      <div className="App">
        {/* Header Component with Cart Count, aqui deje el header fuera de routes para que siempre aparezca */}
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Main Content Component */}
          {/* Aquí estás pasando la función handleAddToCart como una prop llamada onAddToCart.
            Dentro de ProductsPage, puedes acceder a ella como una variable normal */}
          <Route path="/products" element={ <ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
