
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_50%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium border border-primary/10 animate-fade-in shadow-lg">
            Full Stack Web Developer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Avinash Anand</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          I build engaging web experiences with modern technology. 
          Focused on creating clean, efficient, and user-friendly interfaces.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.25s' }}>
          {['React', 'Node', 'Express', 'Next.js', 'TypeScript', 'C++', 'Java', 'Python'].map((skill, index) => (
            <span 
              key={index} 
              className="px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-transform hover:scale-105" 
              style={{ 
                background: `linear-gradient(90deg, ${getGradientColors(index)})`,
                color: 'white'
              }}>
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:opacity-90"
          >
            View My Projects
          </a>
          
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium transition-all duration-300 hover:shadow-md"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section" className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
          <ArrowDown size={24} className="text-foreground" />
        </a>
      </div>
    </section>
  );
};

// Function to generate gradient colors based on index
const getGradientColors = (index) => {
  const gradients = [
    'hsl(210, 100%, 50%), hsl(230, 100%, 50%)', // Blue
    'hsl(280, 100%, 50%), hsl(300, 100%, 45%)', // Purple
    'hsl(320, 100%, 50%), hsl(340, 100%, 50%)', // Pink/Red
    'hsl(20, 100%, 50%), hsl(40, 100%, 50%)',   // Orange
    'hsl(130, 70%, 50%), hsl(150, 70%, 45%)',   // Green
    'hsl(190, 90%, 50%), hsl(210, 90%, 50%)',   // Cyan
    'hsl(260, 90%, 55%), hsl(280, 90%, 50%)',   // Violet
    'hsl(340, 90%, 55%), hsl(360, 90%, 50%)',   // Red
  ];
  
  return gradients[index % gradients.length];
};

export default Hero;
