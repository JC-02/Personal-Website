import type React from 'react';
import { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.min(scrollY * 0.8, 300);
  const opacity = Math.max(0, 1 - scrollY / 400);
  const cornerOpacity = Math.max(0, Math.min(1, (scrollY - 200) / 200));
  const cornerScale = Math.max(0.8, Math.min(1, (scrollY - 200) / 200));

  const PARALLELOGRAM_CLIP = 'polygon(56px 0, 100% 0, calc(100% - 56px) 100%, 0 100%)';
  const CORNER_PARALLELOGRAM_CLIP = 'polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)';
  
  const mainBlockStyle = {
    width: '550px',
    height: '138px',
    clipPath: PARALLELOGRAM_CLIP,
  };
  
  const mainGlowStyle = {
    width: '570px',
    height: '158px',
    filter: 'blur(15px)',
    top: '-10px',
    left: '-10px',
  };
  
  const cornerBlockStyle = {
    width: '116px',
    height: '30px',
    clipPath: CORNER_PARALLELOGRAM_CLIP,
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
  };
  
  const cornerGlowStyle = {
    width: '120px',
    height: '34px',
    filter: 'blur(8px)',
    top: '-2px',
    left: '-2px',
  };

  return (
    <section className="min-h-[75vh] flex flex-col items-center justify-center relative z-10 py-32">
      <div
        className="fixed top-20 right-4 transition-all duration-500 ease-out"
        style={{
          opacity: cornerOpacity,
          transform: `scale(${cornerScale})`,
          zIndex: 99999,
        }}
      >
        <div className="flex items-center relative">
          <div className="relative">
            <div className="absolute bg-white/40 rounded-sm" style={cornerGlowStyle} />
            <div
              className="bg-white text-black relative z-20 flex items-center justify-center"
              style={cornerBlockStyle}
            >
              JORDAN
            </div>
          </div>
          <div className="relative -ml-3">
            <div className="absolute bg-white/40 rounded-sm" style={cornerGlowStyle} />
            <div
              className="bg-black text-white relative z-10 flex items-center justify-center"
              style={cornerBlockStyle}
            >
              COWAN
            </div>
          </div>
        </div>
      </div>

      <div className="text-center transition-all duration-300 ease-out w-full" style={{ opacity }}>
        <div className="relative w-full max-w-none mx-auto" style={{ minHeight: '400px' }}>
          <div className="flex items-center justify-center relative px-32 py-20">
            <div 
              className="relative transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${parallaxOffset * 1.5}px) translateY(${parallaxOffset * 0.8}px) scale(${1 + parallaxOffset * 0.003})`,
              }}
            >
              <div className="absolute bg-white/40 rounded-lg" style={mainGlowStyle} />
              <div
                className="absolute inset-0 bg-white/20"
                style={{
                  ...mainBlockStyle,
                  filter: 'blur(8px)',
                  transform: 'scale(1.05)',
                }}
              />
              <div
                className="bg-white text-black relative z-20 flex items-center justify-center"
                style={{
                  ...mainBlockStyle,
                  padding: '21px 90px',
                }}
              >
                <h1 className="text-8xl md:text-12xl font-bold tracking-wider text-center">
                  JORDAN
                </h1>
              </div>
            </div>

            <div 
              className="relative -ml-14 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(${parallaxOffset * 1.5}px) translateY(-${parallaxOffset * 0.8}px) scale(${1 + parallaxOffset * 0.003})`,
              }}
            >
              <div className="absolute bg-white/40 rounded-lg" style={mainGlowStyle} />
              <div
                className="absolute inset-0 bg-white/20"
                style={{
                  ...mainBlockStyle,
                  filter: 'blur(8px)',
                  transform: 'scale(1.05)',
                }}
              />
              <div
                className="bg-black text-white relative z-10 flex items-center justify-center"
                style={{
                  ...mainBlockStyle,
                  padding: '21px 90px',
                }}
              >
                <h1 className="text-8xl md:text-12xl font-bold tracking-wider text-center">
                  COWAN
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-16">
          <p className="text-white text-2xl md:text-4xl tracking-wide font-semibold text-center">
            Software Engineer & AI Enthusiast
          </p>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto text-center leading-relaxed">
            Specializing in AI, cloud computing, and scalable system architecture. 
            Building innovative solutions that drive technological advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
