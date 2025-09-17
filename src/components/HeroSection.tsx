import type React from 'react';
import { useEffect, useState } from 'react';
import headshotImage from '../assets/portfolio-headshot.jpeg';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Track scroll position for arrow fade out
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 lg:pt-16">
      <div className="container mx-auto max-w-7xl">
        <div className={`grid lg:grid-cols-[auto_minmax(0,600px)] gap-8 sm:gap-6 lg:gap-12 items-center justify-center transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Headshot */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Enhanced glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-white/30 via-white/20 to-white/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-75 group-hover:opacity-100" />
              
              {/* Shadow layer */}
              <div className="absolute -inset-1 bg-black/20 rounded-xl blur-md" />
              
              {/* Main image container with improved styling */}
              <div className="relative bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-3 shadow-2xl hover:bg-white/20 hover:border-white/40 hover:shadow-white/10 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <img
                  src={headshotImage}
                  alt="Jordan Cowan - Software Engineer and AI Enthusiast"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-84 lg:h-84 object-cover rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Name - Largest, most prominent with responsive sizing, kept on one line */}
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none whitespace-nowrap">
              Jordan Cowan
            </h1>
            
            {/* Concise, professional introduction */}
            <p className="text-gray-200 text-lg sm:text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
              Software Engineer based in Victoria, BC.
            </p>

            {/* Additional context - smaller, less prominent */}
            <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Creative innovator and problem solver focused on designing and developing intuitive software, and solving complex challenges with forward-thinking solutions.
            </p>
          </div>
        </div>
        
        {/* Enhanced Call to Action Buttons with responsive design */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-12 sm:pt-16 lg:pt-20">
          <a
            href="#projects"
            className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-white text-black font-bold text-base sm:text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-4 focus:ring-offset-transparent overflow-hidden"
            aria-label="View my portfolio projects"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold text-base sm:text-lg rounded-lg shadow-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-4 focus:ring-offset-transparent overflow-hidden"
            aria-label="Get in touch with me"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Get In Touch</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>

        {/* Scroll Down Indicator with fade out */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
          style={{
            animation: 'slowBounce 2s infinite',
            opacity: Math.max(0, 1 - (scrollY / (window.innerHeight * 0.5)))
          }}
        >
          <div className="flex flex-col items-center gap-2 group cursor-pointer" 
               onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
              Scroll Down
            </span>
            <svg 
              className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-label="Scroll down arrow"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
