import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const skills = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Passionate about AI/ML applications, data mining, and analysis. Experienced with modern frameworks and cloud-based AI solutions.',
    },
    {
      title: 'Software Engineering',
      description: 'Strong foundation in software development with expertise in building scalable, maintainable systems using best practices.',
    },
    {
      title: 'Visual Computing & Graphics',
      description: 'Specialized knowledge in visual computing, computer graphics, and creating engaging visual experiences.',
    },
    {
      title: 'Cloud Computing',
      description: 'Enthusiastic about cloud technologies and their intersection with AI to build innovative, efficient systems.',
    },
  ];

  return (
    <section
      id="about"
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
          ABOUT ME
        </h2>
        
        <div className={`mb-16 text-center transition-all duration-1000 ease-out delay-400 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi! I'm Jordan Cowan, a Software Engineer who recently graduated from the University of Victoria 
            with specializations in <strong className="text-white">Data Mining and Analysis, AI, and ML</strong> as well as 
            <strong className="text-white"> Visual Computing and Graphics</strong>.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm passionate about leveraging AI in cloud computing to improve existing systems and create innovative solutions. 
            I love working with companies that are pushing the boundaries of what's possible with technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`text-white transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${600 + index * 200}ms`
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-white transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
