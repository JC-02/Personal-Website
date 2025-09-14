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
          <h2 className={`text-white text-4xl md:text-5xl font-semibold mb-16 text-center transition-all duration-1000 ease-out delay-200 ${
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
                <h5 className="text-white font-semibold mb-2 text-lg">Bachelor of Software Engineering</h5>
                <p className="text-gray-300 mb-3 font-normal">University of Victoria</p>
                <p className="text-gray-300 mb-3 font-medium">Specializations:</p>
                <ul className="text-gray-300 space-y-2 font-normal">
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[clamp(16px,4vw,32px)]">
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-white font-semibold mb-3 text-lg">AI & Machine Learning</h5>
                  <p className="text-gray-300 font-normal">Python, TensorFlow, PyTorch, Scikit-learn, Data Mining, Neural Networks</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-white font-semibold mb-3 text-lg">Visual Computing</h5>
                  <p className="text-gray-300 font-normal">OpenGL, GLSL, Computer Graphics, 3D Rendering, Image Processing</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-white font-semibold mb-3 text-lg">Software Development</h5>
                  <p className="text-gray-300 font-normal">C++, Python, JavaScript, React, Node.js, System Design</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-lg">
                  <h5 className="text-white font-semibold mb-3 text-lg">Cloud & DevOps</h5>
                  <p className="text-gray-300 font-normal">AWS, Docker, Kubernetes, CI/CD, Microservices</p>
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
                <p className="text-gray-300 leading-relaxed mb-4 font-normal">
                  I'm actively seeking opportunities where I can apply my passion for AI and cloud computing to make a meaningful impact. 
                  I'm particularly interested in companies like <strong className="text-white">Industrio AI</strong> that are using 
                  artificial intelligence to improve existing systems and create innovative solutions.
                </p>
                <p className="text-gray-300 leading-relaxed font-normal">
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
