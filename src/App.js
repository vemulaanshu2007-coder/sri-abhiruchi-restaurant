import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuCategories from './components/MenuCategories';
import FeaturedDishes from './components/FeaturedDishes';
import Bestsellers from './components/Bestsellers';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App bg-black min-h-screen">
      <Navbar cartCount={cartCount} />
      <HeroSection />
      <MenuCategories />
      <FeaturedDishes />
      <Bestsellers />
      <Testimonials />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;