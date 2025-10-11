/**
 * ProductCard.jsx - Milestone 2
 * This component is responsible for rendering individual product cards.
 * It receives product data as props and displays the product image, title, price, and an "Add to Cart" button.
 */

import { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (

    <div className="flex flex-col justify-evenly items-center gap-3 p-6 bg-white shadow-md rounded-lg min-h-[250px]">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-50 h-50 object-contain mb-4"
      />

      {/* Product Title */}
      <h3 className="text-lg text-center font-bold text-gray-800">{product.title}</h3>

      {/* Product Price */}
      <p className="text-gray-600">${product.price.toFixed(2)}</p>

      <div className='flex gap-4'>
        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)} // Toggle state
          className={`mt-2 py-1 px-3 rounded ${
            isFavorite ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          Favorite
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
