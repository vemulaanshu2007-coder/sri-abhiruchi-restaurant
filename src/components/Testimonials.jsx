import React, { useState } from 'react';
import { testimonials } from '../data/mockData';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-zinc-900 rounded-2xl p-8 border border-amber-900/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 transform hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-amber-500 mb-4" />
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-amber-500 text-sm">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            variant="outline"
            size="icon"
            className="border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="text-gray-400">
            {currentIndex + 1} - {Math.min(currentIndex + itemsPerPage, testimonials.length)} of {testimonials.length}
          </div>
          <Button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            variant="outline"
            size="icon"
            className="border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;