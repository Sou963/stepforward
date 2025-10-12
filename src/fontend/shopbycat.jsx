import React from 'react';

const ShopByCategory = () => {
  const categories = [
    {
      name: 'Sneakers',
      description: 'Casual & Athletic',
      image: '/image/red-shoe.png', // Replace with your actual image path or URL
      style: 'bg-red-700 text-white', // Mimicking the red overlay
      imageQuery: 'red sneaker shoe', // Image query for placeholder
    },
    {
      name: 'Boots',
      description: 'Rugged & Stylish',
      image: '/image/color-shoe.png', // Replace with your actual image path or URL
      style: 'bg-gray-900 text-white',
      imageQuery: 'dark mens boots', // Image query for placeholder
    },
    {
      name: 'Formal',
      description: 'Business & Events',
      image: '/image/man-watch.jpg', // Replace with your actual image path or URL
      style: 'bg-gray-800 text-white',
      imageQuery: 'man in formal wear shoe focus', // Image query for placeholder
    },
  ];

  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white sm:text-4xl">
          Shop by Category
        </h2>
        <p className="mt-4 text-1xl text-gray-400">
          Find the perfect shoes for every occasion
        </p>
      </div>

      {/* Category Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`relative overflow-hidden rounded-lg shadow-xl aspect-w-4 aspect-h-3 group ${category.style}`}
            // Using a specific height to match the image aspect for simplicity
            style={{ height: '300px' }}
          >
            {/* The image is used as a background/cover with dark overlay */}
            {/* For the real application, you would use a proper background image/div */}
            {/* This is a placeholder for the visual effect */}
            <div className="absolute inset-0 bg-cover bg-center"
                 style={{
                   backgroundImage: `url(${category.image})`,
                   // Adjust the opacity or overlay for the dark effect on the last two cards
                   opacity: index === 0 ? 1 : 0.6, // Full opacity for the first, partially transparent for others
                 }}
            >
               {/* Conditional overlay for darker effect on cards 2 and 3 */}
              {index > 0 && (
                <div className="absolute inset-0 bg-black opacity-40"></div>
              )}
               {/* Conditional overlay for the first card's deep red */}
               {index === 0 && (
                <div className="absolute inset-0 bg-red-800 opacity-60"></div>
              )}
            </div>


            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              <h3 className="text-2xl font-bold">
                {category.name}
              </h3>
              <p className="mt-1 text-base font-medium">
                {category.description}
              </p>
              {/* Optional: Add an interactive element */}
              <a href={`/shop/${category.name.toLowerCase()}`}
                 className="absolute inset-0"
                 aria-label={`Shop ${category.name}`}
              >
              </a>
            </div>
             {/* Optional: Placeholder for image visualization in this response */}
             {index === 0 && <span className="sr-only"></span>}
             {index === 1 && <span className="sr-only"></span>}
             {index === 2 && <span className="sr-only"></span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;

// NOTE: To use this, you need to have Tailwind CSS configured in your React project.
// The image paths ('path/to/...') must be updated to your actual image locations.
// The aspect-w-4 and aspect-h-3 classes require the @tailwindcss/aspect-ratio plugin.
// I've added a fixed height for visual simplicity if the plugin is not installed.