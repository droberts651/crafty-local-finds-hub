
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-craft-background">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-craft-terracotta rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-craft-navy text-xl font-bold">Crafty Local</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Connecting local artisans with people who appreciate handcrafted quality and unique items.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-craft-navy hover:text-craft-terracotta transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-craft-navy hover:text-craft-terracotta transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-craft-navy hover:text-craft-terracotta transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-craft-navy">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Browse Categories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Featured Artists</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-craft-navy">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* For Artists */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-craft-navy">For Artists</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Sell on Crafty Local</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Artist Resources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-craft-terracotta transition-colors">Artist Login</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Crafty Local Finds Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
