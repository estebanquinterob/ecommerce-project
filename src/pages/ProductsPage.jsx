/**
 * Main.jsx - Milestone 2 Final
 * This component fetches products dynamically from the Fake Store API and displays them using the ProductCard component.
 * It uses React hooks (useState, useEffect) for state management and data fetching.
 */

import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";

function ProductsPage({ onAddToCart }) {  // se pueden pasar funciones como props en este caso la funcion es handleAddToCart que se creo en app.jsx y se paso alla en ProductsPage, y aqui se pone como un prop

  // State for storing products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // states for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const { addToCart } = useCart(); usamos el custom hook useCart para obtener la funcion addToCart del contexto **ya no se usa porque solo se llama en productcard

  // Fetch products from the Fake Store API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // aqui setProducts le dice a products que el arraya vacio del inicio ahora tendra los datos de la variable data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []); // Empty dependency array ensures the fetch runs once

  const filteredProducts = products
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => selectedCategory ? p.category === selectedCategory : true);

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-100">
    {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Discover Our Latest Products
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Shop exclusive deals on electronics, fashion, and more — curated just for you.
        </p>

       
        {/* 🔹 Aquí se renderiza el componente Filters */}
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        </section>

      {/* Product Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {loading ? (
          <p className="text-center col-span-full">Loading products...</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default ProductsPage;

// cambiar el nombre a productspage y llevarlo a pages, se le cambia el nombre a la funcion del componente y al archivo
// tambien crear la pagina  de about, es lo que hace moritz el profe. los router se comprueban poniendo la direccion con el slash en el navegador








