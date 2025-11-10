import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50" />

      {/* Animated color blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${-mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Soft radial background effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">
        {/* Text content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-teal-600 shadow-lg">
              UI/UX Designer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
              Meera
            </span>
            <br />
            <span className="text-gray-800">Arthi Sri. S</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-4 font-light">
            Creating Beautiful Digital Experiences
          </p>

          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            UI/UX Designer passionate about crafting intuitive and visually appealing digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>

            {/* ✅ Resume Button (opens your Resume.pdf from public folder) */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-teal-600 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-teal-500"
            >
              Open Resume
            </a>
          </div>
        </div>

        {/* Image section */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center relative">
                <img
                  src="/meera.jpeg"
                  alt="Meera Arthi Sri. S"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown className="text-teal-600" size={32} />
      </div>
    </div>
  );
};

export default Hero;
