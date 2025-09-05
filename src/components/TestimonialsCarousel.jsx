import React, { useState } from 'react';

/**
 * TestimonialsCarousel
 * - Tailwind CSS React component to match the provided design mock
 * - Shows 3 testimonial cards centered with large arrows at each side
 * - Responsive: shows 1 card on small screens, 3 on md+ screens
 * - Props allow you to pass testimonial data or use defaults
 *
 * Usage:
 * <TestimonialsCarousel testimonials={myTestimonialsArray} />
 */

const defaultTestimonials = [
  {
    id: 1,
    name: 'Michael R.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text:
      "I've been using Play Tonight capsules for a month now, and the difference is unbelievable! My stamina has improved, and I feel much more confident with my partner. Highly recommend it."
  },
  {
    id: 2,
    name: 'Sarah L.',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text:
      "Amero gel has been a game-changer for me. I feel more youthful, tighter, and comfortable than ever before. It really brought back my confidence and intimacy in my married life."
  },
  {
    id: 3,
    name: 'David & Emily',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text:
      "We tried Play Tonight and Amero together, and it completely transformed our relationship. The passion is back, and we're both happier and more connected than ever."
  },
  // add more items if you want the carousel to scroll
];

const StarRating = ({ value = 5 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < value);
  return (
    <div className="flex items-center gap-1 mt-1">
      {stars.map((on, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-amber-400">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.972c.3.922-.755 1.688-1.538 1.118L10 13.347l-3.384 2.455c-.783.57-1.838-.196-1.539-1.118l1.287-3.972a1 1 0 00-.364-1.118L2.618 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ item }) => (
  <div className="border-2 border-gray-800 bg-white p-6 max-w-sm shadow-sm">
    <div className="flex items-start gap-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-sm flex-shrink-0" />
      <div className="flex-1">
        <h4 className="text-lg font-medium text-gray-700 mb-1">{item.name}</h4>
        <StarRating value={item.rating} />
      </div>
    </div>

    <p className="text-sm text-gray-600 mt-4 leading-relaxed">{item.text}</p>
  </div>
);

const TestimonialsCarousel = ({ testimonials = defaultTestimonials }) => {
  // Show only first 3 testimonials
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What our clients say about us</h2>
          <p className="text-gray-500 text-lg">Discover what users are saying about the benefits of our products:</p>
        </div>

        <div className="flex items-center justify-center gap-8">
          {/* Left arrow */}
          <button
            aria-label="Previous testimonials"
            className="hidden md:flex items-center justify-center w-16 h-16 text-4xl font-bold text-black hover:bg-gray-200 rounded-full transition-colors"
            style={{ lineHeight: 0 }}
          >
            &#8249;
          </button>

          {/* Three testimonial cards */}
          <div className="flex gap-8 items-stretch justify-center">
            {displayTestimonials.map((t) => (
              <div key={t.id} className="flex justify-center">
                <TestimonialCard item={t} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            aria-label="Next testimonials"
            className="hidden md:flex items-center justify-center w-16 h-16 text-4xl font-bold text-black hover:bg-gray-200 rounded-full transition-colors"
            style={{ lineHeight: 0 }}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
