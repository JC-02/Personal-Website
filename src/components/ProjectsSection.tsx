import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const projects = [
    {
      title: 'BC Parks Reservation Services (BCPRS)',
      client: 'BC Parks',
      description: 'We built the day-use pass and attendance and revenue tracking systems for BC Parks. Using the Government of Canada\'s instance of AWS, these systems were part of a new initiative for The BC Government to adopt public cloud infrastructure.',
      link: 'https://reserve.bcparks.ca/dayuse/',
    },
    {
      title: 'Natural Resources Public Transparency Initiative (NRPTI)',
      client: 'Natural Resource Sector',
      description: 'We created a centralized data system for administrators from various Ministries and business areas to share information. This data system provides dynamic information to several front-end applications we developed, including the BC Mine Information Website.',
      link: 'https://mines.nrs.gov.bc.ca/',
    },
    {
      title: 'EAGLE (EPIC modernization)',
      client: 'Environmental assessment office (EAO)',
      description: 'We took on the modernization of EPIC, which included major updates to architecture, security and the user interface. Working closely with the EAO, we were able to greatly increase the efficiency and speed of both the administrative and public sites through data cleanup and sanitization.',
      link: 'https://projects.eao.gov.bc.ca/',
    },
  ];

  return (
    <section
      id="projects"
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
          OUR PROJECTS
        </h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`text-white transition-all duration-1000 ease-out group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${400 + index * 300}ms`
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 font-medium mb-4">{project.client}</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                visit site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
