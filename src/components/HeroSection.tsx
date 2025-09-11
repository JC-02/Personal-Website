import type React from 'react';
import { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset - more dramatic separation
  const parallaxOffset = Math.min(scrollY * 0.8, 300);
  const opacity = Math.max(0, 1 - scrollY / 400);
  const scale = Math.max(0.7, 1 - scrollY / 1000);

  return (
    <section className="flex items-center justify-center min-h-screen relative z-10">
      <div
        className="text-center transition-all duration-300 ease-out"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center">
            {/* Jordan Block */}
            <div
              className="bg-white text-black px-8 py-4 transition-transform duration-300 ease-out shadow-lg"
              style={{
                transform: `translateX(-${parallaxOffset}px) rotate(-${parallaxOffset * 0.1}deg)`,
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
                JORDAN
              </h1>
            </div>

            {/* Cowan Block */}
            <div
              className="bg-black text-white px-8 py-4 ml-2 transition-transform duration-300 ease-out shadow-lg"
              style={{
                transform: `translateX(${parallaxOffset}px) rotate(${parallaxOffset * 0.1}deg)`,
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
                COWAN
              </h1>
            </div>
          </div>

          {/* Animated swipe effects */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 pointer-events-none"
            style={{
              transform: `translateX(${parallaxOffset * 2}px)`,
              width: '200%',
              left: '-50%',
            }}
          />
        </div>

        {/* Subtitle that's always visible */}
        <div className="mt-8">
          <p className="text-white text-lg md:text-xl tracking-wide mb-4">
            Software Engineer & AI Enthusiast
          </p>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Welcome! I'm passionate about AI, cloud computing, and building systems that make a difference. 
            Let's create something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
