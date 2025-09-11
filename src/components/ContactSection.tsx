import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="contact"
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
          GET IN TOUCH
        </h2>

        <div className={`mb-16 transition-all duration-1000 ease-out delay-400 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <ContactForm />
        </div>

        <div className={`text-center mb-16 transition-all duration-1000 ease-out delay-600 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-400 mb-4">Let's connect! I'd love to hear about opportunities or just chat about technology:</p>
          <a
            href="https://github.com/JC-02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-gray-300 transition-colors duration-300"
          >
            GitHub: JC-02
          </a>
        </div>

        <div className={`flex justify-center mb-16 transition-all duration-1000 ease-out delay-800 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          <img
            src="https://ext.same-assets.com/948705462/2675978398.svg"
            alt="Earth"
            className="w-16 h-16 opacity-70"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
