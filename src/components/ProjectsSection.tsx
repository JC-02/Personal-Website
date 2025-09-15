import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const projects = [
    {
      title: 'Astrolabe',
      tech: 'TypeScript, C#, .NET, Docker, PostgreSQL',
      description: 'A full-stack web application designed act as a chatbot that helps users explore and visualize data from Ocean Network Canada\'s data collection. Uses an intuitive new approach to conversations, a unique node-based system. Built using React and ASP.NET, with the full implemenation of a custom RAG (Retrieval-Augmented Generation) pipeline architecture for enhanced AI responses using open source models via Ollama.',
      link: '#',
      github: 'https://github.com/seng499-bratwurst'
    },
    {
      title: 'Coming Soon: AtlasAI',
      tech: 'C++, OpenGL, GLSL',
      description: 'Currently in development: A personal passion project where I am designing a model that helps users navigate the exponentially-scaling world of AI-powered tools and models. With so many resources available some people find it difficult to find the right tools for the job. AtlasAI is designed to be that guide, helping users find the best AI tools for their specific purpose that they can use effectively.',
      link: '#',
      github: 'https://github.com/JC-02',
      jira: 'https://jordancowan.atlassian.net/jira/software/projects/ATLAS/boards/36?atlOrigin=eyJpIjoiMDNjMmM5MmFlZWU3NDA2NTljNzBkMWY4ZmNlOTBhOTgiLCJwIjoiaiJ9',
      wip: true
    },
    {
      title: 'Huffman Decoder Optimization',
      tech: 'C, ARM Assembly, GCC, Raspberry Pi',
      description: 'An embedded systems project focused on building a fast Huffman encoder/decoder for a fixed 40-symbol French alphabet. Implemented modular C structures for buffering and lookup tables, then applied progressive optimizations including multi-byte buffering, multi-level LUTs, and removal of string comparisons. Benchmarked performance on a 32-bit ARM Cortex Raspberry Pi, reducing runtime from 14 s to 0.5 s (96% improvement). Analyzed compiler optimizations and hardware-aware memory usage, producing an efficient, table-driven decoding pipeline tailored for constrained environments.',
      link: '#',
      github: 'https://github.com/JC-02'
    },
    {
      title: 'Anomaly Detection with Deep SVDD',
      tech: 'Python, PyTorch, ResNet, Google Colab',
      description: 'Developed and benchmarked an anomaly detection pipeline for image data using a Deep Support Vector Data Description (SVDD) model enhanced with Mean-Shifted Contrastive Loss. Implemented data augmentation, grid-search hyperparameter tuning, and multiple CNN backbones (ResNet18/50, MobileNet). Achieved a Weighted Metric Score of 0.912 on Pasta anomalies and 0.716 on Screw anomalies (0.800 overall), with ROC and confusion matrix evaluation. Optimized model selection by balancing AUROC, Recall, and training efficiency, demonstrating the suitability of Deep SVDD for industrial anomaly detection tasks.',
      link: '#',
      github: 'https://github.com/JC-02'
    },
    {
      title: 'Deadline-Driven Scheduler (DDS)',
      tech: 'C, FreeRTOS, STM32F4',
      description: 'Designed and implemented a real-time task scheduler on an STM32F4 Discovery board using FreeRTOS. Built a custom Earliest Deadline First (EDF) scheduler to manage periodic tasks with hard deadlines, supported by user-defined tasks, task generators, and a monitor task. Implemented inter-task communication via FreeRTOS queues and timers, with custom data structures for task management. Verified system performance through SWV console tracing, demonstrating accurate deadline enforcement with <3 ms variance and effective monitoring of active, completed, and overdue tasks. Explored improvements such as preemption thresholds and slack-time calculations for enhanced robustness.',
      link: '#',
      github: 'https://github.com/JC-02'
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
      <div className="container mx-auto max-w-7xl">
        <h2 className={`text-white text-4xl md:text-5xl font-semibold mb-16 text-center transition-all duration-1000 ease-out delay-200 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}>
          MY PROJECTS
        </h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`relative text-white transition-all duration-1000 ease-out group bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg hover:bg-white/15 hover:border-white/30 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${400 + index * 300}ms`
              }}
            >
              {project.wip && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-purple-400/50 backdrop-blur-sm">
                  WIP
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 font-medium mb-6 text-base uppercase tracking-wider italic">{project.tech}</p>
              <p className="text-gray-300 leading-relaxed mb-8 font-normal text-lg max-w-none">
                {project.description}
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white border border-white/30 backdrop-blur-sm bg-white/10 px-6 py-2 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Code
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-label="GitHub"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                {project.jira && (
                  <a
                    href={project.jira}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-300 border border-blue-300/30 backdrop-blur-sm bg-blue-300/10 px-6 py-2 hover:bg-blue-300 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Track Progress
                    <svg 
                      className="w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-label="Jira"
                    >
                      <path d="M11.571 11.513H0a5.218 5.218 0 000 .973h11.571a5.218 5.218 0 000-.973zm1.005-4.744A5.213 5.213 0 008.832 4.02L.925 12.007c-.393.394-.393 1.03 0 1.424l7.907 7.988a5.218 5.218 0 003.744-2.749l-5.662-5.684 5.662-5.684a5.218 5.218 0 000-.533zm10.499 0c.158.168.301.348.425.54L18.856 2.62c-.393-.394-1.03-.394-1.424 0L9.525 10.608a5.218 5.218 0 00.54 2.749l7.245-7.245a1.057 1.057 0 011.496 0l4.269 4.269c.413.413.413 1.083 0 1.496l-4.269 4.269a1.057 1.057 0 01-1.496 0l-7.245-7.245a5.218 5.218 0 00-.54 2.749l7.907 7.988c.393.394 1.03.394 1.424 0l4.644-4.689a5.213 5.213 0 002.749-3.744L18.432 6.769z"/>
                    </svg>
                  </a>
                )}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-300 border border-gray-300/30 backdrop-blur-sm bg-gray-300/10 px-6 py-2 hover:bg-gray-300 hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
