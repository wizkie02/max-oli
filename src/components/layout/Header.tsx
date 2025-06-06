import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/max.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Max and Oli Logo" className="h-16" />
          <span className="ml-3 text-2xl font-bold text-[#1C4473]">Max & Oli</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-[#1C4473] hover:text-[#67AAF9] font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-[#1C4473] hover:text-[#67AAF9] font-medium transition-colors">
            About Us
          </Link>
          <Link to="/resources" className="text-[#1C4473] hover:text-[#67AAF9] font-medium transition-colors">
            Resources
          </Link>
          <Link to="/scientific-repository" className="text-[#1C4473] hover:text-[#67AAF9] font-medium transition-colors">
            Scientific Repository
          </Link>
          <a 
            href="https://www.shop.mm4all.com/max-oli" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#1C4473] hover:text-[#67AAF9] font-medium transition-colors"
          >
            Shop
          </a>
          <a 
            href="https://maxandoli.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#1C4473] hover:text-[#67AAF9] font-medium transition-colors"
          >
            Blog
          </a>
        </nav>
        
        <div className="md:hidden">
          <button className="text-[#1C4473] focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Accessibility Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            aria-label="Increase font size"
            className="p-2 rounded-full bg-gray-100 text-[#1C4473] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            aria-label="Decrease font size"
            className="p-2 rounded-full bg-gray-100 text-[#1C4473] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            aria-label="Toggle high contrast mode"
            className="p-2 rounded-full bg-gray-100 text-[#1C4473] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
          </button>
          <button 
            aria-label="Toggle reduced motion"
            className="p-2 rounded-full bg-gray-100 text-[#1C4473] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
