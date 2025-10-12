import React from "react";
import NewArrivals from "./new-arrival";
import ShopByCategory from "./shopbycat";
import CustomerTestimonial from "./costomer_review";
import Footer from "./footer";

const products = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Max 270",
    price: 150,
    oldPrice: 180,
    rating: 4,
    reviews: 128,
    colors: ["black", "white", "red"],
    image:
      "/image/red-shoe.png",
    isNew: true,
  },
  {
    id: 2,
    brand: "Converse",
    name: "Chuck Taylor All Star",
    price: 65,
    rating: 4,
    reviews: 89,
    colors: ["black", "white", "red"],
    image:
      "/image/yellow-shoe.png",
  },
  {
    id: 3,
    brand: "Timberland",
    name: "Timberland 6-Inch Boot",
    price: 200,
    rating: 4,
    reviews: 156,
    colors: ["brown", "black"],
    image:
      "https://images.asos-media.com/products/timberland-premium-6-inch-boots-in-wheat-tan-nubuck/204464479-1-beige?$n_750w$&wid=750&hei=750&fit=crop",
  },
  {
    id: 4,
    brand: "Cole Haan",
    name: "Oxford Dress Shoe",
    price: 180,
    oldPrice: 220,
    rating: 4,
    reviews: 73,
    colors: ["black", "brown"],
    image:
      "/public/image/man-watch.jpg",
    isNew: true,
  },
];




const StepForwardNavbar = () => {
  return (
    <div>
      <nav className="relative flex w-full flex-nowrap items-center justify-between bg-white py-4 shadow-sm">
        <div className="flex w-full items-center justify-between px-6">
          {/* Logo and Nav Links Group */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="text-3xl font-bold">
              <span className="text-black">Step</span>
              <span className="text-blue-600">Forward</span>
            </div>

            {/* Navigation Links (Visible on Large Screens) */}
            <div className="hidden lg:flex space-x-8 text-lg">
              <a href="#" className="text-black font-semibold pb-2 text-sm">
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-150 pb-2 text-sm"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-150 pb-2 text-sm"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-150 pb-2 text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Search and Icons Group */}
          <div className="flex items-center space-x-6">
            {/* Large Search Bar */}
            <div className="relative hidden md:block w-[400px]">
              <img
                src="/image/search.png"
                alt="Search"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-60"
              />
              <input
                type="search"
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-4 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                placeholder="Search for shoes, brands, styles..."
                aria-label="Search"
              />
            </div>

            {/* Icon Buttons */}
            <div className="flex items-center space-x-4">
              <button
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition duration-150"
                aria-label="Wishlist"
              >
                <img src="/image/love.png" alt="Wishlist" className="h-6 w-6" />
              </button>
              <button
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition duration-150 relative"
                aria-label="Cart"
              >
                <img src="/image/order.png" alt="Cart" className="h-6 w-6" />
                {/* Optional: Cart item count badge */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                  2
                </span>
              </button>
              <button
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition duration-150"
                aria-label="Profile"
              >
                <img src="/image/person.png" alt="Profile" className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 lg:hidden"
            type="button"
            aria-label="Toggle navigation"
          >
            {/* Burger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* homefirstpart */}
      <div>
        <div className=" bg-gray-100 flex items-center justify-center  font-['Inter']">
          {/* Main Card Container (Two Columns on desktop, stacked on mobile) */}
          <div className="bg-white shadow-2xl overflow-hidden max-w-7xl w-full flex flex-col lg:flex-row">

            {/* Left Content Section: Text and Buttons */}
            <div className="lg:w-3/5 p-8 sm:p-12 lg:p-20 flex flex-col justify-center
                        bg-gradient-to-br from-indigo-700 to-purple-800 text-white">

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                Step Into Your
                <br />
                <span className="text-yellow-400">Perfect Style</span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-xl">
                Discover premium footwear that combines comfort, style, and quality.
                From casual sneakers to formal shoes, find your next favorite pair today.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Primary Button */}
                <button className="flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl
                               bg-white text-indigo-900 shadow-xl hover:bg-gray-200 transition duration-300 transform hover:scale-[1.02]">
                  Shop Now
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>

                {/* Secondary Button */}
                <button className="flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl
                               border-2 border-white text-white hover:bg-white hover:text-indigo-900 transition duration-300">
                  View Sale
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="lg:w-2/5 min-h-[400px] relative bg-yellow-600 flex items-center justify-center">
              <img
                src="/image/shoe.png"
                alt="Premium brown sneaker on a mustard yellow cloth backdrop"
                className="object-contain w-[90%] h-[90%] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "";
                }}
              />
              <div className="absolute inset-0 bg-yellow-700 mix-blend-overlay opacity-25 pointer-events-none"></div>
            </div>

          </div>
        </div>
      </div>
      {/* homeupperpart02 */}
      <div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-full mb-4
                          bg-blue-100 text-blue-600 shadow-md text-4xl">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 max-w-xs">
                Get your order delivered quickly and safely to your doorstep.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-full mb-4
                          bg-green-100 text-green-600 shadow-md text-4xl">
                <i class="fa-solid fa-shield"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 max-w-xs">
                We ensure top quality materials and craftsmanship.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-full mb-4 bg-purple-100 shadow-md">
                <img src="/image/start.png" alt="Easy Returns" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600 max-w-xs">30-day return policy. No questions asked.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Products */}
      <div>
        <section className="bg-white py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
        <p className="text-gray-600 mb-12">Handpicked favorites from our collection</p>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-2xl overflow-hidden  hover:shadow-lg transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover transform transition duration-300 hover:scale-105"
                />

                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </span>
                )}

                {/* ❤️ Heart button */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition">
                  <span className="text-gray-600 text-lg">♡</span>
                </button>
              </div>

              <div className="p-4 text-left">
                <h3 className="text-sm text-gray-500">{product.brand}</h3>
                <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>

                {/* Inline Star Rating */}
                <div className="flex items-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      {i < Math.round(product.rating) ? "★" : "☆"}
                    </span>
                  ))}
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>

                <div className="mt-2">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">${product.oldPrice}</span>
                  )}
                </div>

                <div className="flex space-x-2 mt-3">
                  {product.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
          View All Products →
        </button>
      </div>
    </section>
        
        
        
      </div>
      {/* New Arrivals */}
      <div>
        <NewArrivals />
        
      </div>
      {/* Shop by Category */}
      <div>
        <ShopByCategory />
      </div>
      {/* Customer Testimonials */}
      <div>
        <CustomerTestimonial />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default StepForwardNavbar;
