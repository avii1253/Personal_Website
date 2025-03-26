
import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"></div>
      </div>
      
      <div className="text-center mb-12">
        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium border border-primary/10 inline-block mb-4 shadow-md">
          Get In Touch
        </span>
        
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Contact Me
        </h2>
        
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out and I'll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-2xl border border-border shadow-xl bg-gradient-to-br from-white to-blue-50">
          <h3 className="text-xl font-medium mb-6 text-gradient">Send a Message</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center transition-all hover:opacity-90 disabled:opacity-70 shadow-md"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
            
            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-center animate-fade-in-fast shadow-sm">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-medium mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium">Email</h4>
                  <a href="mailto:anandavinash1253@gmail.com" className="text-muted-foreground hover:text-blue-600 transition-colors">
                    anandavinash1253@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-md">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium">GitHub</h4>
                  <a 
                    href="https://github.com/avii1253" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-purple-600 transition-colors"
                  >
                    github.com/avii1253
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-md">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="text-base font-medium">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/avinash-anand-2941372b1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    linkedin.com/in/avinash-anand-2941372b1
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 shadow-lg">
            <h4 className="text-lg font-medium mb-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Available for Opportunities</h4>
            <p className="text-muted-foreground">
              I'm currently open to new freelance opportunities and interesting projects. Let's collaborate and build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
