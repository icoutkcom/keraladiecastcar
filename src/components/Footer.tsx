import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-black border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">KERALA DIECAST CAR</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Your trusted destination for premium diecast models and supercar models, top rated by quality.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">All Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors text-sm">Support</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><Link to="/return-refund-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Return & Refund Policy</Link></li>
              <li><Link to="/shipping-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Shipping Policy</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link to="/warranty-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Warranty Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 TechStore. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;