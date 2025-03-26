
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Notes App",
    description: "A clean, intuitive notes application built with vanilla JavaScript and CSS, allowing users to create, edit, and organize their notes.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    link: "https://avii1253.github.io/Notes-App/",
    technologies: ["JavaScript", "CSS", "HTML"]
  },
  {
    title: "Form Validation",
    description: "A robust form validation implementation using JavaScript and RegEx, providing real-time feedback and ensuring data integrity.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    link: "https://avii1253.github.io/Form-Validation/",
    technologies: ["JavaScript", "RegEx", "HTML", "CSS"]
  },
  {
    title: "LuxeBuy eCommerce",
    description: "A frontend implementation of an eCommerce platform with sleek UI/UX, product listings, and shopping cart functionality.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    link: "https://avii1253.github.io/LuxeBuy-eCommerce/",
    technologies: ["JavaScript", "CSS", "HTML"]
  },
  {
    title: "React Cart Demo",
    description: "A demonstration of shopping cart functionality built with React, showcasing state management through hooks.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    link: "https://avii1253.github.io/react-demo/",
    technologies: ["React", "State Management", "CSS"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full bg-primary/5 text-sm font-medium border border-primary/10 inline-block mb-4">
            My Work
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a selection of my recent work showcasing my skills and experience.
            Each project reflects my commitment to clean code and intuitive interfaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
