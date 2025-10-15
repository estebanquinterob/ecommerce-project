// useLocation es un hook que viene en react router dom y sirve para saber en que ruta estamos, en que pagina estamos
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  // usamos el custom hook useCart para obtener el carrito y asi poder mostrar el numero de productos en el carrito
  const { cart } = useCart();
  // creamos la variable location que usa el hook useLocation
  const location = useLocation();
  // creamos la variable isHome que es true si estamos en la pagina de inicio y false si no lo estamos y asi podemos cambiar el estilo del header segun la pagina en la que estemos
  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHome // se usa el operador ternario para cambiar el estilo del header segun la pagina en la que estemos
          ? "bg-white/10 backdrop-blur-md text-white"
          : "bg-white shadow-md text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-extrabold tracking-tight ${
            isHome ? "text-white" : "text-blue-600"
          }`}
        >
          ShopSmart
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link
            to="/"
            className={`hover:underline ${
              isHome ? "text-white/90 hover:text-yellow-300" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`hover:underline ${
              isHome ? "text-white/90 hover:text-yellow-300" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Products
          </Link>

          <Link
            to="/about"
            className={`hover:underline ${
              isHome ? "text-white/90 hover:text-yellow-300" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            About
          </Link>

          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                stroke={isHome ? "white" : "currentColor"}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 5.4a1 1 0 001 .6h12.2a1 1 0 001-.8L21 13M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            </Link>

            {/* Cart Counter */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                {cart.length}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
