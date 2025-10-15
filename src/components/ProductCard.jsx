import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react"; // íconos opcionales si tienes lucide-react instalado
import { useCart } from "../context/CartContext";

function ProductCard({ product, onAddToCart }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart(); // usamos el custom hook useCart para obtener la funcion addToCart

  return (
    <div
      className="flex flex-col justify-between items-center bg-white rounded-2xl shadow-md 
                 hover:shadow-lg transition-all duration-300 p-5 group"
    >
      {/* Product Image */}
      <div className="flex justify-center items-center h-48 w-full mb-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <h3 className="text-center font-semibold text-gray-800 text-md mb-2 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-blue-600 font-bold text-lg mb-4">
        ${product.price.toFixed(2)}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => addToCart(product)} // llamamos a la funcion addToCart del contexto, solo aqui en productcard y ya no se llamara o importara en productspage
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full 
                     hover:bg-blue-700 transition-all duration-300"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 
                      ${isFavorite 
                        ? "bg-pink-500 text-white hover:bg-pink-600" 
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
        >
          <Heart
            size={18}
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
          />
          {isFavorite ? "Saved" : ""}
        </button>

        {/* View Details */}
        <Link
          to={`/product/${product.id}`}
          className="flex items-center gap-2 bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all"
        >
         Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;

