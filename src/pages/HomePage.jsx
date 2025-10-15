import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white text-center overflow-hidden px-6">
      
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <section className="z-10 max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Discover the Best Deals in <span className="text-yellow-300">Style</span> & Technology
        </h1>
        <p className="text-lg text-white/90 mb-8">
          Shop smarter with exclusive offers, premium quality, and fast delivery — 
          all in one place.
        </p>

        <Link
          to="/products"
          className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition transform hover:scale-105"
        >
          🛍️ Start Shopping
        </Link>
      </section>
    </main>
  );
}

export default HomePage;