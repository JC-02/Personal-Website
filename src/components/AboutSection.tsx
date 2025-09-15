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
      <div className="container mx-auto max-w-7xl">
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
            <p className="text-gray-300 leading-relaxed mb-6 font-normal text-lg max-w-none">
              Hello! My name is Jordan Cowan, I am a Software Engineer living and working in Victoria, British Columbia.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 font-normal text-lg max-w-none">
              I love tackling tough problems and turning them into something useful and easy to use. Whether I'm working on embedded systems, building full-stack applications, or creating machine learning models, I want to create software that people can actually use in a practical way. There's something really satisfying about taking a complex challenge and making it simple.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 font-normal text-lg max-w-none">
              What drives me is finding that sweet spot where great code meets great user experience. I think the best software is the kind that works perfectly behind the scenes while feeling completely natural to use. That's what I aim for in everything I build, from low-level optimizations to the interfaces people interact with every day.
            </p>
            <p className="text-gray-300 leading-relaxed font-normal text-lg max-w-none">
              I'm really interested in AI-influenced design and development. Right now, I'm diving deep into prompt engineering and AI product management, exploring how we can use AI to create smarter, more responsive solutions that actually understand what users need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
