import type React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
        <div className="container mx-auto max-w-4xl">
          <h2 className={`text-white text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-1000 ease-out delay-200 ${
            jobsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            EXPERIENCE
          </h2>

          <div className="space-y-12">
            <div className={`transition-all duration-1000 ease-out delay-400 ${
              jobsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Education</h4>
              <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                <h5 className="text-gray-300 font-medium mb-2">Bachelor of Software Engineering</h5>
                <p className="text-gray-400 mb-2">University of Victoria</p>
                <p className="text-gray-400 text-sm mb-3">Specializations:</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Data Mining and Analysis, AI, and Machine Learning</li>
                  <li>• Visual Computing and Graphics</li>
                </ul>
              </div>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-600 ${
              jobsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-gray-300 font-medium mb-3">AI & Machine Learning</h5>
                  <p className="text-gray-400 text-sm">Python, TensorFlow, PyTorch, Scikit-learn, Data Mining, Neural Networks</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-gray-300 font-medium mb-3">Visual Computing</h5>
                  <p className="text-gray-400 text-sm">OpenGL, GLSL, Computer Graphics, 3D Rendering, Image Processing</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-gray-300 font-medium mb-3">Software Development</h5>
                  <p className="text-gray-400 text-sm">C++, Python, JavaScript, React, Node.js, System Design</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-gray-300 font-medium mb-3">Cloud & DevOps</h5>
                  <p className="text-gray-400 text-sm">AWS, Docker, Kubernetes, CI/CD, Microservices</p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 ease-out delay-800 ${
              jobsVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}>
              <h4 className="text-white text-xl font-semibold mb-4">What I'm Looking For</h4>
              <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                <p className="text-gray-400 leading-relaxed mb-4">
                  I'm actively seeking opportunities where I can apply my passion for AI and cloud computing to make a meaningful impact. 
                  I'm particularly interested in companies like <strong className="text-white">Industrio AI</strong> that are using 
                  artificial intelligence to improve existing systems and create innovative solutions.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  If you know of any companies working on exciting AI projects or would like to connect, I'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;
