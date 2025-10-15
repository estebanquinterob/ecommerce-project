import { Link } from "react-router-dom";

function AboutPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-100 flex flex-col items-center justify-center px-6 py-20">
        
        {/* Hero Section */}
        <section className="max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            About <span className="text-blue-600">Our Store</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            Welcome to <span className="font-semibold text-blue-600">ShopEase</span> — your go-to online store for high-quality, affordable products. 
            We believe shopping should be <span className="font-medium">simple, secure, and inspiring</span>. 
            Every item in our catalog is carefully selected to meet your expectations of quality and value.
          </p>
        </section>
  
        {/* Mission Section */}
        <section className="bg-white shadow-lg rounded-2xl p-10 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To make online shopping effortless by providing a curated selection of top products, 
            exceptional customer service, and a seamless user experience.
          </p>
        </section>
  
        {/* CTA Section */}
        <section className="mt-12 text-center">
          <p className="text-gray-700 mb-4 text-lg">
            Ready to discover our latest collections?
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold 
                      shadow hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            Back to Home
          </Link>
        </section>
      </main>
    );
  }
  
  export default AboutPage;
  