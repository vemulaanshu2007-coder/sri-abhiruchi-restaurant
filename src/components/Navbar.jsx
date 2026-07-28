import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = ({ cartCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-serif text-amber-500">
              Sri Abhiruchi Biryani & Curries
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              MENU
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-200 font-medium"
            >
              CONTACT
            </button>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative text-gray-300 hover:text-amber-500 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-amber-500 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm">Login</span>
            </button>
            <button
              className="md:hidden text-gray-300 hover:text-amber-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-amber-900/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-amber-500 hover:bg-amber-900/10 rounded transition-colors"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-amber-500 hover:bg-amber-900/10 rounded transition-colors"
            >
              MENU
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-amber-500 hover:bg-amber-900/10 rounded transition-colors"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-amber-500 hover:bg-amber-900/10 rounded transition-colors"
            >
              CONTACT
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-amber-500 hover:bg-amber-900/10 rounded transition-colors w-full">
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;