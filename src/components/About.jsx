
const About = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
            About Me
          </h2>
          
          <p className="text-muted-foreground mb-4">
            I'm a passionate frontend developer with a strong focus on creating intuitive and efficient user interfaces. My journey in web development began with a curiosity about how digital experiences shape our interactions with technology.
          </p>
          
          <p className="text-muted-foreground mb-4">
            I specialize in JavaScript, React, and modern CSS techniques. I believe in writing clean, maintainable code and creating accessible web applications that work for everyone.
          </p>
          
          <p className="text-muted-foreground mb-6">
            When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or continuously learning to stay updated with the latest web development trends.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-3">Frontend Skills</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  React.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Responsive Design
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Tools & More</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  VS Code
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Figma
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Chrome DevTools
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-foreground/10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
              alt="Developer illustration" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
