
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-display font-medium">
              <span className="text-gradient">Avinash</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Frontend Developer
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <nav className="flex gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
            
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Avinash. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex gap-6">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
