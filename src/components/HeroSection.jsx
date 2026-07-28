import React from 'react';
import { MapPin, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { restaurantInfo } from '../data/mockData';

const HeroSection = () => {
  const handleWhatsAppOrder = () => {
    window.open(restaurantInfo.whatsappUrl, '_blank');
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.base44.com/images/public/6a3cae59a80828031d68218c/76737ad96_generated_2a44c821.png"
          alt="Signature Hyderabadi Biryani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Location Badge */}
        <div className="inline-flex items-center space-x-2 text-amber-400 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm tracking-widest uppercase">
            Karmanghat, Hyderabad
          </span>
          <Sparkles className="w-4 h-4" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-amber-500 mb-4 animate-fade-in-up">
          Sri Abhiruchi
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-amber-100 mb-6 animate-fade-in-up animation-delay-200">
          Biryani & Curries
        </h2>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
          Authentic Taste, Freshly Prepared Every Day
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-10 text-gray-300 animate-fade-in-up animation-delay-600">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-amber-500" />
            <span>{restaurantInfo.location}</span>
          </div>
          <div className="hidden sm:block text-amber-500">|</div>
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="flex items-center space-x-2 hover:text-amber-500 transition-colors"
          >
            <Phone className="w-5 h-5 text-amber-500" />
            <span>{restaurantInfo.phone}</span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-800">
          <Button
            onClick={scrollToMenu}
            className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8 py-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50 group"
          >
            Order Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={scrollToMenu}
            variant="outline"
            className="border-2 border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-black font-semibold px-8 py-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            View Menu
          </Button>
          <Button
            onClick={handleWhatsAppOrder}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50"
          >
            Book on WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-amber-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;