import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C4473] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Max & Oli</h3>
            <p className="text-sm">
              Supporting neurodivergent kids, parents, and teachers with fun, accessible resources.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#FFCD00] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#FFCD00] transition-colors">About Us</Link></li>
              <li><Link to="/resources" className="hover:text-[#FFCD00] transition-colors">Resources</Link></li>
              <li><Link to="/scientific-repository" className="hover:text-[#FFCD00] transition-colors">Scientific Repository</Link></li>
            </ul>
          </div>
          
          {/* External Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.youtube.com/@ADDAutismAppreciation" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCD00] transition-colors">YouTube</a></li>
              <li><a href="https://maxandoli.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCD00] transition-colors">Newsletter</a></li>
              <li><a href="https://shop.mm4all.com/max-oli/shop/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCD00] transition-colors">Shop</a></li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-sm mb-2">Join our newsletter for tips and resources.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
                aria-label="Email for newsletter"
              />
              <button 
                className="bg-[#FFCD00] text-[#1C4473] px-4 py-2 rounded-r font-medium hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-blue-400">
          <p className="text-xs leading-relaxed">
            <strong>Disclaimer:</strong> The content provided on this website, including all articles, videos, illustrations, and characters, is intended for general informational and educational purposes only. It is not intended to serve as medical advice, diagnosis, or treatment for any condition, including Autism Spectrum Disorder (ASD) or Attention Deficit Disorder (ADD/ADHD). None of the information presented has been reviewed or verified by licensed medical professionals. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition or treatment. Never disregard professional medical advice or delay seeking it because of something you have read or seen on this website. All characters featured on this website are entirely fictional and AI-generated. Any resemblance to real persons, living or dead, is purely coincidental. By using this website, you acknowledge and agree to these terms.
          </p>
          <p className="text-xs mt-4">
            &copy; Max & Oli, 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
