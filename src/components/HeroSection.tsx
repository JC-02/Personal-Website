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
            {/* Digital Block */}
            <div
              className="bg-white text-black px-8 py-4 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${parallaxOffset}px) rotate(-${parallaxOffset * 0.1}deg)`,
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
                DIGITAL
              </h1>
            </div>

            {/* Space Block */}
            <div
              className="bg-black text-white px-8 py-4 ml-2 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${parallaxOffset}px) rotate(${parallaxOffset * 0.1}deg)`,
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
                SPACE
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

        {/* Subtitle that fades in as logo separates */}
        <div
          className="mt-8 transition-all duration-500 ease-out"
          style={{
            opacity: Math.min(1, scrollY / 200),
            transform: `translateY(${20 - scrollY * 0.1}px)`,
          }}
        >
          <p className="text-white text-lg md:text-xl tracking-wide">
            Software Engineering Solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
