import { GraduationCap, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
          About Me
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Coimbatore, Tamil Nadu
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              Hello! I'm Meera Arthi Sri. S, a passionate UI/UX Designer based in Coimbatore.
              I specialize in creating intuitive and visually appealing digital experiences that
              delight users and solve real-world problems.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed font-light">
              With a strong foundation in design principles and user-centered methodologies,
              I bring ideas to life through thoughtful design and attention to detail.
              My journey in design started with a curiosity for technology and creativity.
            </p>

            <div className="flex items-center gap-2 text-gray-600 text-lg">
              <MapPin className="text-teal-500 flex-shrink-0" size={24} />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 -z-10" />

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>

              <div className="space-y-6 ml-16">
                <div className="border-l-2 border-teal-200 pl-4">
                  <p className="font-bold text-lg text-gray-800">Master of Science (IT)</p>
                  <p className="text-teal-600 font-medium">Hindusthan College of Arts & Science</p>
                  <p className="text-sm text-gray-500 mt-1">Coimbatore</p>
                </div>

                <div className="border-l-2 border-cyan-200 pl-4">
                  <p className="font-bold text-lg text-gray-800">Bachelor of Science (IT)</p>
                  <p className="text-cyan-600 font-medium">Hindusthan College of Arts & Science</p>
                  <p className="text-sm text-gray-500 mt-1">Coimbatore</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 -z-10" />

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Focus Areas</h3>
              </div>

              <div className="ml-16 space-y-2">
                <p className="text-gray-700">User Interface Design</p>
                <p className="text-gray-700">User Experience Research</p>
                <p className="text-gray-700">Interaction Design</p>
                <p className="text-gray-700">Visual Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
