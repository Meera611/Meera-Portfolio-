import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Coffee Application',
    category: 'Mobile App',
    gradient: 'from-cyan-500 to-blue-500',
    image: '/Coffee application.jpeg',
    link: 'https://www.figma.com/design/oLjUXG9CyZfmMvcLFLVDZ1?node-id=0-1',
  },
  {
    title: 'Cloths Website',
    category: 'Web Design',
    gradient: 'from-teal-500 to-emerald-500',
    image: '/Cloths website.jpeg',
    link: 'https://www.figma.com/design/KAdiSHeoBOR5ductNde6fw?node-id=0-1',
  },
  {
    title: 'Veterinary Management',
    category: 'Web Design',
    gradient: 'from-emerald-500 to-teal-500',
    image: '/Veterinary management.jpeg',
    link: 'https://www.figma.com/design/hAsZwUlRArZKsqpwH8NKqL?node-id=0-1',
  },
  {
    title: 'Tourist Landing Page',
    category: 'Web Design',
    gradient: 'from-blue-500 to-cyan-500',
    image: '/Tourist landing page.jpeg',
    link: 'https://www.figma.com/design/5gN5SsDhNOVfzSYp4wx98U?node-id=0-1',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-teal-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-16">
          A selection of my recent design work
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 text-center">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-90">{project.category}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <ExternalLink className="text-teal-600" size={20} />
                  </div>
                </div>
              </div>

              {/* Category label */}
              <div className="p-6 flex items-center justify-between">
                <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
