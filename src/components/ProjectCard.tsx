
import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  index: number;
}

const ProjectCard = ({ title, description, image, link, technologies, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group card-hover rounded-2xl border border-border overflow-hidden h-full flex flex-col transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 flex items-center gap-1.5 flex-wrap">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center text-sm font-medium transition-colors"
        >
          View Project
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
