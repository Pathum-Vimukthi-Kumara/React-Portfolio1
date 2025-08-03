import React from 'react';

const GetInTouch = () => (
  <div className="min-h-screen bg-purple-gradient pt-20 py-8 sm:py-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="animate-fadeInUp">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text-enhanced">
          Let's Connect
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl text-purple-accent mb-6 sm:mb-8">REACH OUT ANYTIME</h3>
        <p className="text-sm sm:text-base lg:text-lg text-purple-light leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto">
          I'm always interested in connecting with fellow developers, potential collaborators, and anyone passionate about technology. Whether you have a project idea, job opportunity, or just want to say hello, feel free to reach out through any of these platforms!
        </p>
        <p className="text-sm sm:text-base text-purple-accent mb-8 sm:mb-12 max-w-3xl mx-auto">
          You can contact me directly via email or phone for professional inquiries, or connect with me on GitHub and LinkedIn to follow my work and network. I look forward to hearing from you!
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        <a 
          href="mailto:kpathum616@gmail.com" 
          className="glass-card p-4 sm:p-6 rounded-xl hover:shadow-glow transition-all duration-500 hover:scale-105 text-left group animate-fadeInUp touch-target"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block group-hover:animate-pulse">📧</span>
          <div className="text-purple-secondary font-semibold text-base sm:text-lg mb-2 group-hover:text-purple-accent transition-colors duration-300">Email</div>
          <div className="text-purple-accent font-medium mb-2 text-sm sm:text-base">kpathum616@gmail.com</div>
          <div className="text-purple-light text-xs sm:text-sm">For professional inquiries and collaboration opportunities</div>
        </a>

        <a 
          href="https://github.com/Pathum-Vimukthi-Kumara" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="glass-card p-4 sm:p-6 rounded-xl hover:shadow-glow transition-all duration-500 hover:scale-105 text-left group animate-fadeInUp touch-target"
          style={{ animationDelay: '0.2s' }}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 fill-purple-secondary group-hover:fill-purple-accent transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.17c-3.338.727-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.333-5.466-5.933 0-1.312.469-2.382 1.235-3.22-.123-.303-.535-1.526.117-3.176 0 0 1.008-.322 3.301 1.23a11.474 11.474 0 0 1 3.003-.404 11.474 11.474 0 0 1 3.003.404c2.292-1.552 3.299-1.23 3.299-1.23.653 1.65.241 2.873.118 3.176.768.838 1.235 1.908 1.235 3.22 0 4.61-2.804 5.625-5.475 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.577 4.77-1.587 8.207-6.084 8.207-11.387 0-6.627-5.373-12-12-12z"/>
          </svg>
          <div className="text-purple-secondary font-semibold text-base sm:text-lg mb-2 group-hover:text-purple-accent transition-colors duration-300">GitHub</div>
          <div className="text-purple-accent font-medium mb-2 text-sm sm:text-base break-all">Pathum-Vimukthi-Kumara</div>
          <div className="text-purple-light text-xs sm:text-sm">Check out my code repositories and projects</div>
        </a>

        <a 
          href="https://www.linkedin.com/in/pathum-vimukthi-635740277" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="glass-card p-4 sm:p-6 rounded-xl hover:shadow-glow transition-all duration-500 hover:scale-105 text-left group animate-fadeInUp touch-target"
          style={{ animationDelay: '0.3s' }}
        >
          <img className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="LinkedIn" />
          <div className="text-purple-secondary font-semibold text-base sm:text-lg mb-2 group-hover:text-purple-accent transition-colors duration-300">LinkedIn</div>
          <div className="text-purple-accent font-medium mb-2 text-sm sm:text-base break-all">pathum-vimukthi-635740277</div>
          <div className="text-purple-light text-xs sm:text-sm">Professional network and career updates</div>
        </a>

        <a 
          href="tel:0740516990" 
          className="glass-card p-4 sm:p-6 rounded-xl hover:shadow-glow transition-all duration-500 hover:scale-105 text-left group animate-fadeInUp touch-target"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block group-hover:animate-pulse">📞</span>
          <div className="text-purple-secondary font-semibold text-base sm:text-lg mb-2 group-hover:text-purple-accent transition-colors duration-300">Phone</div>
          <div className="text-purple-accent font-medium mb-2 text-sm sm:text-base">0740516990</div>
          <div className="text-purple-light text-xs sm:text-sm">Direct contact for urgent matters and inquiries</div>
        </a>
      </div>
    </div>
  </div>
);

export default GetInTouch;
