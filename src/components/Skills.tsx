import { Code, Palette, Layers } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Development',
    skills: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'Design Tools',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'Figma'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Layers,
    title: 'Skills',
    skills: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Research'],
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Tools and technologies I work with
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <category.icon className="text-white" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100 hover:border-teal-300 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
