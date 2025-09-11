import type React from 'react';
import { useSmoothScroll } from '../hooks/useScrollAnimation';

const Navigation: React.FC = () => {
  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'];
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (item: string, event: React.MouseEvent) => {
    event.preventDefault();
    if (item === 'HOME') {
      // Scroll to top of page for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(item.toLowerCase());
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-6">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={item === 'HOME' ? '#' : `#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(item, e)}
                className="text-white text-sm font-medium tracking-wide hover:text-gray-300 transition-all duration-300 hover:scale-110 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
