import React from 'react';

// ProductCard Component
const ProductCard = ({ image, brand, name, rating, reviews, price, originalPrice, colors }) => {
  // Dynamic star rendering
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars).fill('★').map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">{'★'}</span>
        ))}
        {halfStar && <span className="text-yellow-400">★</span>}
        {Array(emptyStars).fill('☆').map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">{'☆'}</span>
        ))}
      </>
    );
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <div className="relative">
        <img src={image} alt={name} className="w-70 h-64 object-cover d-block m-auto" />
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">New</span>
        <button className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300" aria-label="Add to wishlist">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-gray-600 text-sm">{brand}</h3>
        <p className="text-lg font-semibold">{name}</p>
        <div className="flex items-center mt-1">
          {renderStars(rating)}
          <span className="text-gray-600 ml-2 text-sm">({reviews})</span>
        </div>
        <div className="mt-2">
          <span className="text-lg font-bold">${price}</span>
          {originalPrice && <span className="text-gray-500 line-through ml-2">${originalPrice}</span>}
        </div>
        <div className="flex space-x-2 mt-2">
          {colors.map((color, index) => (
            <span key={index} className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: color }}></span>
          ))}
        </div>
        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Add to Cart</button>
      </div>
    </div>
  );
};

// NewArrivals Component
const NewArrivals = () => {
  const products = [
    {
      image: "/image/red-shoe.png",
      brand: "Nike",
      name: "Air Max 270",
      rating: 5,
      reviews: 128,
      price: 150,
      originalPrice: 200,
      colors: ["#000000", "#FFFFFF", "#FF0000"],
    },
    {
      image: "/image/man-watch.jpg",
      brand: "Cole Haan",
      name: "Oxford Dress Shoe",
      rating: 4,
      reviews: 73,
      price: 180,
      originalPrice: 220,
      colors: ["#4A2C2A"],
    },
    {
      image: "/image/color-shoe.png",
      brand: "Adidas",
      name: "Running Ultraboost",
      rating: 4.5,
      reviews: 201,
      price: 180,
      colors: ["#FFFFFF", "#000000", "#0000FF"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">New Arrivals</h2>
      <p className="text-gray-600 mb-6 text-center">Latest additions to our collection</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
