import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 ${isScrolled ? 'bg-white/30 backdrop-blur-md shadow-md' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-10 w-10" src="/logo.png" alt="Logo" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to ="/" className="text-gray-800 hover:text-gray-600">Accueil</Link>
            <Link to="comment" className="text-gray-800 hover:text-gray-600">Comment ça marche?</Link>
            <Link to="/comment" className="text-gray-800 hover:text-gray-600">À propos de nous</Link>
            <button className="bg-pink-300 text-white px-4 py-2 rounded-md hover:bg-[#FF5E95]">Testez</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuToggle} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="bg-white shadow-md rounded-lg mt-2 p-4">
          <Link to ="/" className="block text-gray-800 hover:text-gray-600 py-2" onClick={handleMenuToggle}>Accueil</Link>
          <Link to="/comment" className="block text-gray-800 hover:text-gray-600 py-2" onClick={handleMenuToggle}>Comment ça marche?</Link>
          <Link to="/comment" className="block text-gray-800 hover:text-gray-600 py-2" onClick={handleMenuToggle}>À propos de nous</Link>
          <button className="w-full bg-pink-300 text-white px-4 py-2 rounded-md hover:bg-[#FF5E95] mt-2" onClick={handleMenuToggle}>Testez</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
