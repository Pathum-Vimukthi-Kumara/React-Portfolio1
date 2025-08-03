// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Budget Tracker',
    image: `${process.env.PUBLIC_URL}/assets/BudgetTracker.png`,
    description: ' It features a GUI interface for monitoring active connections, logging requests, and viewing connection Developed a comprehensive budget management application for both desktop and web platforms, featuring robust CRUD operations, an integrated calendar for tracking expenses, and dynamic graphs for visualizing financial data. This project enhances user experience by providing intuitive tools for effective budget planning and management..',
    tech: ['React','Express js ',' MySql'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Budget_Tracker',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Budget_Tracker',
  },
  {
    title: 'Complaint Management System (Group Project)',
    image: `${process.env.PUBLIC_URL}/assets/image.png`,
    description: 'We developed and deployed a full-stack web application to digitize and streamline the complaint and maintenance request process within the Faculty of Engineering.:  Role-based dashboards for users and admins ,Complaint submission with automatic timestamping , Full complaint detail view with status history  ,Admin-controlled custom status updates (immutable once submitted) , Admin activity tracking for transparenc● Invitation-based login system (with public registration for low level uesr roles) , Real-time user feedback on complaint progression',
    tech: ['React','Nest js','MySql'],
    github: 'https://co-re-test-front.vercel.app/',
    demo: 'https://co-re-test-front.vercel.app/',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-purple-gradient pt-20 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text-enhanced">
            Projects
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-purple-accent">Featured Work</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fadeInUp group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-purple-accent mb-3 group-hover:text-purple-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-purple-light mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-purple-secondary/20 text-purple-secondary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-purple-secondary/30 hover:bg-purple-secondary/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary flex-1 text-center touch-target"
                  >
                    View Project
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-secondary flex-1 text-center touch-target"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
