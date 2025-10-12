import React from 'react';


const CustomerTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '/image/costomer/c-01.png', // Placeholder for Sarah
      rating: 5,
      comment: '“Amazing quality and comfort! These shoes are perfect for my daily walks.”',
    },
    {
      id: 2,
      name: 'Mike Chen',
      avatar: '/image/costomer/c-02.png', // Placeholder for Mike
      rating: 5,
      comment: '“Fast shipping and excellent customer service. Will definitely order again!”',
    },
    {
      id: 3,
      name: 'Emily Davis',
      avatar: '/image/costomer/c-03.png', // Placeholder for Emily
      rating: 5,
      comment: '“Love the style and fit. These boots are both fashionable and functional.”',
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-1xl text-gray-600">
            Real reviews from real customers
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              {/* Customer Info (Avatar, Name, Rating) */}
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 italic flex-grow">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonial;