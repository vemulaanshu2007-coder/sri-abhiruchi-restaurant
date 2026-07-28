import React from 'react';
import { bestsellers } from '../data/mockData';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';

const Bestsellers = () => {
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
    <section className="py-20 bg-gradient-to-b from-zinc-950 to-black relative">
      {/* Background Decorative Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://media.base44.com/images/public/6a3cae59a80828031d68218c/62f3ca73d_generated_9d9a6e38.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">
            Most Loved
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">
            Bestsellers
          </h2>
        </div>

        {/* Bestsellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestsellers.map((dish) => (
            <div
              key={dish.id}
              className="group bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                {dish.badge && (
                  <Badge className="absolute top-4 left-4 bg-amber-600 text-black font-semibold px-3 py-1">
                    {dish.badge}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
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

export default Bestsellers;