import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const services = [
    {
      title: 'Strategic Planning and Technology Selection',
      description: 'Process digitalization, workflow management, system architecture and scaling, sharing of information and security.',
    },
    {
      title: 'Software Development',
      description: 'High performance, cross-functional, and technological excellence able to tackle anything.',
    },
    {
      title: 'Mobile Development',
      description: 'Native iOS and Android development or progressive web apps that cut costs and development time dramatically.',
    },
    {
      title: 'UI/UX Design',
      description: 'We make discoverability fun for your users. Customer experience is our number one focus.',
    },
  ];

  return (
    <section
      id="services"
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
          WHAT WE DO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`text-white transition-all duration-1000 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${400 + index * 200}ms`
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-300 hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
