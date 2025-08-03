import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-purple-gradient pt-20 py-8 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-purple-secondary to-purple-primary bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="max-w-4xl mx-auto text-purple-light text-sm sm:text-base lg:text-lg leading-relaxed space-y-4 sm:space-y-6 text-center">
          <p>
            Hi, I'm Pathum Vimukthi, a passionate full-stack developer and cybersecurity enthusiast. With a strong foundation in both front-end and back-end technologies, I enjoy creating seamless and dynamic web applications. My journey in the tech world started with a fascination for coding, and it has evolved into a full-fledged career that allows me to build innovative solutions and explore the endless possibilities of cybersecurity and software engineering.
          </p>
          <p>
            I believe in continuous learning and staying updated with the latest trends and advancements in the field. When I'm not coding, you can find me exploring new technologies, working on personal projects, or collaborating with like-minded individuals to push the boundaries of what's possible in the digital world.
          </p>
          <p>
            Feel free to browse through my portfolio to see some of the projects I've worked on. If you have any questions or would like to collaborate, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
