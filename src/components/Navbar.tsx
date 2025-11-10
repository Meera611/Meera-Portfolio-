import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
              MAS
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Let's Connect
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md text-sm font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
