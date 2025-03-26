
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_50%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-3 py-1 rounded-full bg-primary/5 text-sm font-medium border border-primary/10 animate-fade-in">
            Frontend Developer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Hi, I'm <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Avinash</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          I build engaging web experiences with modern technology. 
          Focused on creating clean, efficient, and user-friendly interfaces.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:bg-primary/90"
          >
            View My Projects
          </a>
          
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-all duration-300 hover:shadow-md"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
