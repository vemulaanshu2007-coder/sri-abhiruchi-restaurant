import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif text-amber-500 mb-4">
              {restaurantInfo.name}
            </h3>
            <p className="text-gray-400 mb-4">
              Authentic Hyderabadi Dum Biryani and traditional curries prepared with love and authentic spices. Experience the true taste of Hyderabad.
            </p>
            <div className="flex space-x-4">
              <a
                href={restaurantInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div id="about">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-start space-x-3 text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{restaurantInfo.phone}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{restaurantInfo.location}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@sriabhiruchi.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Monday - Sunday</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <p className="text-sm text-amber-500 font-medium">
                Order anytime via WhatsApp!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-amber-900/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sri Abhiruchi Biryani & Curries. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;