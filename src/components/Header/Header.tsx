import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';
import Logo from '../Logo/Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 px-4 py-4">
      <div className={`
        max-w-7xl mx-auto rounded-2xl transition-all duration-300
        ${isScrolled 
          ? 'bg-primary-100/20 backdrop-blur-lg shadow-lg shadow-primary-900/10' 
          : 'bg-primary-50/15 backdrop-blur-sm'}
        `}>
        <div className="px-6 h-16 flex items-center justify-between">
          <Logo />

          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          <button
            className="md:hidden p-2 hover:bg-primary-100/20 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-primary-700" /> : <Menu size={24} className="text-primary-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden fixed inset-x-4 top-24 bg-primary-50/25 backdrop-blur-lg rounded-2xl
          shadow-xl shadow-primary-900/10 transform transition-all duration-300
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'}
        `}>
          <div className="p-4">
            <NavLinks mobile onClose={() => setIsMenuOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}