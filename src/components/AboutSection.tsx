import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

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
        <h2 className={`text-white text-4xl md:text-5xl font-semibold mb-16 text-center transition-all duration-1000 ease-out delay-200 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          ABOUT ME
        </h2>

        <div className={`transition-all duration-1000 ease-out delay-400 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 shadow-lg">
            <p className="text-gray-300 leading-relaxed mb-6 font-normal text-lg">
              Welcome to my portfolio! This section will contain a personal introduction and overview of who I am as a person and professional.
            </p>
            <p className="text-gray-300 leading-relaxed font-normal text-lg">
              Coming soon - a detailed about me section with personal background, interests, and what drives my passion for technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
