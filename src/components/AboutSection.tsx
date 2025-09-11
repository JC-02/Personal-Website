import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation(0.1);
  const { ref: jobsRef, isVisible: jobsVisible } = useScrollAnimation(0.1);

  return (
    <>
      {/* Jobs Section */}
      <section
        id="jobs"
        ref={jobsRef as React.RefObject<HTMLElement>}
        className={`py-20 px-6 relative z-10 transition-all duration-1000 ease-out ${
          jobsVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className={`text-white text-4xl md:text-5xl font-bold mb-16 transition-all duration-1000 ease-out delay-200 ${
            jobsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            WORK WITH US
          </h2>

          <div className={`mb-16 transition-all duration-1000 ease-out delay-400 ${
            jobsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Each project is unique. We are here to make an impact and we operate on the core belief that true creativity is not to be sacrificed.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We listen well, research hard, think big, and execute strong.
            </p>
          </div>

          <div className={`transition-all duration-1000 ease-out delay-600 ${
            jobsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            <a
              href="#contact"
              className="inline-block bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef as React.RefObject<HTMLElement>}
        className={`py-20 px-6 relative z-10 transition-all duration-1000 ease-out ${
          aboutVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <h3 className={`text-white text-3xl font-bold mb-12 text-center transition-all duration-1000 ease-out delay-200 ${
            aboutVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            ABOUT US
          </h3>

          <div className="space-y-12">
            <div className={`transition-all duration-1000 ease-out delay-400 ${
              aboutVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Our Story</h4>
              <p className="text-gray-400 leading-relaxed">
                At <strong className="text-white">DigitalSpace</strong>, we believe that every pixel, every line of code, and every digital interaction has the power to transform businesses and elevate user experiences. Our journey began in the heart of Victoria, British Columbia, with a vision to bridge the gap between design aesthetics and cutting-edge technology.
              </p>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-600 ${
              aboutVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Who We Are</h4>
              <p className="text-gray-400 leading-relaxed">
                We are a passionate team of <strong className="text-white">digital artisans</strong>, blending artistry with innovation. Our diverse backgrounds in design, development, and strategy converge to create digital solutions that resonate. From crafting captivating websites to developing robust applications, we thrive on turning ideas into reality.
              </p>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-800 ${
              aboutVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Our Approach</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-gray-300 font-medium mb-2">1. Human-Centric Design:</h5>
                  <p className="text-gray-400">We put users at the center of everything we create. Our designs are intuitive, accessible, and delightful.</p>
                </div>
                <div>
                  <h5 className="text-gray-300 font-medium mb-2">2. Code Wizards:</h5>
                  <p className="text-gray-400">Our developers wield magic in the form of clean, efficient code. Whether it's a responsive website or a custom app, we make technology work seamlessly.</p>
                </div>
                <div>
                  <h5 className="text-gray-300 font-medium mb-2">3. Collaboration:</h5>
                  <p className="text-gray-400">We believe in collaboration, not just with our clients but also within our team. Together, we build digital spaces that inspire.</p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-1000 ${
              aboutVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Why Choose DigitalSpace?</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <strong className="text-gray-300">Innovation:</strong> We stay ahead of the curve, exploring emerging technologies and trends.
                </li>
                <li className="text-gray-400">
                  <strong className="text-gray-300">Craftsmanship:</strong> Our attention to detail ensures pixel-perfect designs and flawless functionality.
                </li>
                <li className="text-gray-400">
                  <strong className="text-gray-300">Results-Driven:</strong> We measure success by the impact we create for our clients.
                </li>
              </ul>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-1200 ${
              aboutVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Let's Create Together</h4>
              <p className="text-gray-400 leading-relaxed">
                Whether you're a startup dreaming big or an established brand seeking a digital makeover, <strong className="text-white">DigitalSpace</strong> is here to transform your vision into reality. Let's embark on this digital journey together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
