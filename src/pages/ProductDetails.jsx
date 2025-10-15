import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams(); // obtenemos el id del producto de la url
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // usamos el custom hook useCart para obtener la funcion addToCart


  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]); // se ejecuta cada vez que cambia el id

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 text-gray-700">
        <p className="text-xl font-medium animate-pulse">Loading product...</p>
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        <p>Product not found 😢</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 mt-20 py-12 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Product Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-60 h-60 object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-700 transition-all duration-300"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>

          <div className="mt-8">
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-800 transition-colors underline"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
