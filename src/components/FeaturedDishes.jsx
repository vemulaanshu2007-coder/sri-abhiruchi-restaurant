import React from 'react';
import { featuredDishes } from '../data/mockData';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';

const FeaturedDishes = () => {
  const { toast } = useToast();

  const handleAddToCart = (dish) => {
    console.log('Added to cart:', dish);
    toast({
      title: "Added to Cart",
      description: `${dish.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">
            Chef's Selection
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">
            Featured Dishes
          </h2>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                {dish.badge && (
                  <Badge
                    className={
                      dish.badge === 'Bestseller'
                        ? 'absolute top-4 left-4 bg-amber-600 text-black font-semibold px-3 py-1'
                        : 'absolute top-4 left-4 bg-green-600 text-white font-semibold px-3 py-1'
                    }
                  >
                    {dish.badge}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {dish.description}
                </p>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-500">₹{dish.price}</span>
                  <Button
                    onClick={() => handleAddToCart(dish)}
                    size="sm"
                    className="bg-amber-600 hover:bg-amber-700 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;