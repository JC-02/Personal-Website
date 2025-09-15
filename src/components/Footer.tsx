import type React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold text-white mb-4">JORDAN COWAN</h2>
          <p className="text-gray-400 text-sm text-center">
            © 2025 Jordan Cowan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
