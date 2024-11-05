import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
 
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-25"
              />
             
            </Link>
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">
              Contact
            </Link>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Login
            </button>
          </nav>
 
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
 
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-50"
              >
                About
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-50"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-50"
              >
                Contact
              </Link>
              <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
 
export default Header;