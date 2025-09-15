import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import uvicLogo from '../assets/university-of-victoria-logo.png';

const ExperienceSection: React.FC = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation(0.1);
  const { ref: jobsRef, isVisible: jobsVisible } = useScrollAnimation(0.1);

  return (
    <>
      {/* Experience Section */}
      <section
        id="experience"
        ref={jobsRef as React.RefObject<HTMLElement>}
        className={`py-20 px-6 relative z-10 transition-all duration-1000 ease-out ${
          jobsVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className={`text-white text-4xl md:text-5xl font-semibold mb-16 text-center transition-all duration-1000 ease-out delay-200 ${
            jobsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            EXPERIENCE
          </h2>

          <div className="space-y-12">
            <div className={`transition-all duration-1000 ease-out delay-300 ${
              jobsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Education</h4>
              <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg relative">
                <div className="mb-4">
                  <h5 className="text-white font-bold text-lg">University of Victoria (2020-2025)</h5>
                  <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
                    <img 
                      src={uvicLogo}
                      alt="University of Victoria Logo"
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>
                <p className="text-gray-300 mb-4 font-normal text-lg max-w-none">Bachelor of Software Engineering (BSEng)</p>
                <ul className="ml-6 space-y-2 text-gray-300 font-normal max-w-none">
                  <li>• Specialization in Data Mining, Analysis, AI, and Machine Learning</li>
                  <li>• Specialization in Visual Computing and Graphics</li>
                </ul>
              </div>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-500 ${
              jobsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Work Experience</h4>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <div className="mb-4">
                    <h5 className="text-white font-bold text-lg">Program Leader II</h5>
                    <p className="text-blue-300 font-semibold">District of Saanich • Aug 2018 – Present • Victoria, BC</p>
                  </div>
                  <ul className="ml-6 space-y-2 text-gray-300 font-normal">
                    <li>• Coordinated logistics for recreational and cultural programs, including facility bookings, equipment rentals, and event setup/takedown</li>
                    <li>• Planned and delivered safe, engaging community activities with consistently positive participant feedback</li>
                    <li>• Promoted inclusivity, accessibility, and respectful participation across programs</li>
                    <li>• Managed program supplies and inventory while ensuring cost-effective procurement</li>
                    <li>• Liaised with vendors and service providers to streamline event execution</li>
                    <li>• Assisted with scheduling, staffing, and volunteer coordination for large-scale community events</li>
                    <li>• Monitored program operations, tracked attendance, and reported on performance outcomes</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <div className="mb-4">
                    <h5 className="text-white font-bold text-lg">Software Application Development Engineer</h5>
                    <p className="text-blue-300 font-semibold">Workday • May – Dec 2023 • Vancouver, BC</p>
                  </div>
                  <ul className="ml-6 space-y-2 text-gray-300 font-normal">
                    <li>• Designed and developed customer-facing features using XpressO within an object-oriented framework</li>
                    <li>• Implemented unit tests, debugged issues, and supported end-to-end defect resolution</li>
                    <li>• Collaborated in Agile sprints with cross-functional teams to refine requirements and deliver features</li>
                    <li>• Contributed to DevOps pipeline and CI/CD processes, ensuring consistent deployments</li>
                    <li>• Performed code reviews and maintained development standards across environments</li>
                    <li>• Applied XML-based data integration and UML-driven approaches to optimize system scalability</li>
                    <li>• Coordinated and presented at an Intern Expo for 200+ interns globally</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <div className="mb-4">
                    <h5 className="text-white font-bold text-lg">STEM & Digital Skills Instructor</h5>
                    <p className="text-blue-300 font-semibold">Science Venture (University of Victoria) • Jan – Apr 2022 • Victoria, BC</p>
                  </div>
                  <ul className="ml-6 space-y-2 text-gray-300 font-normal">
                    <li>• Designed STEM and digital literacy workshops for participants ages 5–60</li>
                    <li>• Delivered hands-on training sessions, adapting material for diverse learner groups</li>
                    <li>• Contributed to frontend web development for the program's registration platform</li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <div className="mb-4">
                    <h5 className="text-white font-bold text-lg">Junior Technical Analyst & Consultant</h5>
                    <p className="text-blue-300 font-semibold">Northworks IP • May – Aug 2021 • Victoria, BC</p>
                  </div>
                  <ul className="ml-6 space-y-2 text-gray-300 font-normal">
                    <li>• Drafted and analyzed software architectures and component interactions, with focus on EV charging and music streaming platforms</li>
                    <li>• Conducted market and technical research in the EV charging ecosystem to identify gaps and opportunities</li>
                    <li>• Performed patent landscaping, data analysis, and created technical search scopes and reports</li>
                    <li>• Prepared client-facing recommendations on applying AI modeling to EV infrastructures</li>
                    <li>• Delivered presentations and technical reports to leadership teams for decision-making</li>
                    <li>• Co-inventor on published U.S. patent <a href="https://patents.google.com/patent/US20250033517A1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline transition-colors">"Electric Vehicle Fleet Charging and Energy Management System"</a> (US20250033517A1)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-700 ${
              jobsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[clamp(16px,4vw,32px)]">
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-white font-semibold mb-3 text-lg">Languages</h5>
                  <ul className="space-y-1 text-gray-300 font-normal">
                    <li>• Java, Python, C/C++</li>
                    <li>• C# / .NET, XpressO</li>
                    <li>• JavaScript / TypeScript</li>
                    <li>• HTML / CSS, XML/UML</li>
                    <li>• SQL (PostgreSQL)</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-white font-semibold mb-3 text-lg">Architecture & Design</h5>
                  <ul className="space-y-1 text-gray-300 font-normal">
                    <li>• Systems Design & API Design (RESTful, service layers)</li>
                    <li>• Database Architecture (PostgreSQL, relational design)</li>
                    <li>• CI/CD Pipeline Integration (multi-environment DevOps)</li>
                    <li>• Cloud Integration (Azure, AWS, Google Cloud)</li>
                    <li>• Machine Learning (AI/ML workflows, data mining, analysis)</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-white font-semibold mb-3 text-lg">Tools & Technologies</h5>
                  <ul className="space-y-1 text-gray-300 font-normal">
                    <li>• Development: Git, Docker, VS Code, IntelliJ, Eclipse</li>
                    <li>• CI/CD: GitHub, Docker pipelines, multi-environment deployment</li>
                    <li>• Systems: Linux/Unix Environments</li>
                    <li>• Testing: JUnit, Maven, test automation, code review</li>
                    <li>• Analysis: Patent Landscaping Tools, technical data analysis</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-white font-semibold mb-3 text-lg">Frameworks</h5>
                  <ul className="space-y-1 text-gray-300 font-normal">
                    <li>• Frontend: React, Vue, HTML/CSS/JS stacks</li>
                    <li>• Backend: .NET Core, Spring Boot, Django REST</li>
                    <li>• Web: Node.js, Flask, Django, Spring</li>
                    <li>• Data/ML: PyTorch</li>
                    <li>• Build: Maven</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
