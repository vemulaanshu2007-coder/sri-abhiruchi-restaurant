import React from 'react';
import { categories } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

const MenuCategories = () => {
  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category);
    // Mock: Show toast or navigate to filtered menu
    alert(`Viewing ${category.name}`);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">
            Our Menu
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">
            Explore Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {category.name}
                </h3>
                <div className="flex items-center text-amber-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;