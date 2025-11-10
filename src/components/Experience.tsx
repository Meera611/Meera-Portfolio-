import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-teal-200">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full shadow-lg" />

            <div className="mb-8 bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white rounded-full shadow-md">
                  <Briefcase className="text-teal-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    UI/UX Designer Intern
                  </h3>
                  <p className="text-lg font-medium text-teal-600 mb-2">
                    Aviontive LLP
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">3 Months Internship</span>
                  </div>
                  <p className="text-gray-600">
                    Coimbatore, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-gray-700">
                  Gained hands-on experience in user interface and user experience design,
                  working on real-world projects and collaborating with cross-functional teams.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                  <li>Created wireframes and prototypes for web and mobile applications</li>
                  <li>Conducted user research and usability testing</li>
                  <li>Collaborated with developers to implement design solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
