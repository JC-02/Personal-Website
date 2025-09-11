import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const projects = [
    {
      title: 'AI-Powered Data Analysis Platform',
      tech: 'Python, TensorFlow, AWS',
      description: 'Developed a machine learning pipeline for analyzing large datasets, implementing advanced data mining techniques and visualization tools. The system processes complex data patterns and provides actionable insights through an intuitive interface.',
      link: '#',
      github: 'https://github.com/jcowan'
    },
    {
      title: 'Real-time Graphics Rendering Engine',
      tech: 'C++, OpenGL, GLSL',
      description: 'Built a high-performance graphics rendering engine with advanced visual computing techniques. Features include real-time lighting, particle systems, and procedural content generation for immersive visual experiences.',
      link: '#',
      github: 'https://github.com/jcowan'
    },
    {
      title: 'Cloud-Based ML Model Deployment',
      tech: 'Docker, Kubernetes, Python',
      description: 'Created a scalable cloud infrastructure for deploying and managing machine learning models. The system automatically scales based on demand and provides real-time model inference with monitoring and analytics.',
      link: '#',
      github: 'https://github.com/jcowan'
    },
  ];

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 relative z-10 transition-all duration-1000 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className={`text-white text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-1000 ease-out delay-200 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          MY PROJECTS
        </h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`text-white transition-all duration-1000 ease-out group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${400 + index * 300}ms`
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 font-medium mb-4">{project.tech}</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white border border-white/30 backdrop-blur-sm bg-white/10 px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Code
                </a>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-300 border border-gray-300/30 backdrop-blur-sm bg-gray-300/10 px-6 py-2 hover:bg-gray-300 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
