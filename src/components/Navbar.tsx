import React, { useState, useEffect } from 'react';
import { Menu, X, CircuitBoard } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <CircuitBoard className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold gradient-text">
              テックコープ
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">サービス</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">会社概要</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">お問い合わせ</a>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                無料相談
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-blue-400">サービス</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-blue-400">会社概要</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-blue-400">お問い合わせ</a>
            <button className="w-full mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              無料相談
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;