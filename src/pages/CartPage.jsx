import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty 🛒</p>
      ) : (
        <>
          {/* Lista de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition-all"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 object-contain mx-auto mb-3"
                />
                <h3 className="font-medium text-lg mb-1">{product.title}</h3>
                <p className="text-gray-700 mb-2">${product.price}</p>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total + Clear */}
          <div className="mt-8 flex justify-between items-center">
            <h3 className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </h3>
            <button
              onClick={clearCart}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default CartPage;
