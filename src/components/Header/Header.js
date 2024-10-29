// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Footer/logo.png'; // Replace with the path to your logo

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-white px-8 py-4 shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <img src={logo} alt="CargoLoader3D Logo" className="h-10 w-auto" />
                <span className="text-2xl font-bold text-gray-800"><span className="text-blue-500">Loader</span></span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8 text-gray-600">
                <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
                <Link to="/blog" className="hover:text-blue-500 transition-colors">Blog</Link>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            </nav>

            {/* Login Button */}
            <Link to="/login" className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Log In
            </Link>
        </header>
    );
};

export default Header;
