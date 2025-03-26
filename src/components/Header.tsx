
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-display font-medium">
          <span className="text-gradient">Avinash</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#about" className="link-item">About</a>
          <a href="#projects" className="link-item">Projects</a>
          <a href="#contact" className="link-item">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-6 px-6 animate-fade-in-fast">
          <nav className="flex flex-col space-y-6">
            <a 
              href="#about" 
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
