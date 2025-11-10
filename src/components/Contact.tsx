import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-700">
            I'm always excited to collaborate on new projects and opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
            <a
              href="mailto:meeraarthisri4@gmail.com"
              className="text-teal-600 hover:text-teal-700 transition-colors duration-300"
            >
              meeraarthisri4@gmail.com
            </a>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
            <a
              href="tel:+916382376240"
              className="text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
            >
              +91 63823 76240
            </a>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-cyan-600">Coimbatore, Tamil Nadu</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send me a Message
            </h3>

            {submitted && (
              <div className="mb-4 p-5 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-700 font-medium mb-2">
                  ✅ Thank you! Your message has been sent.
                </p>
                <p className="text-gray-700">
                  I’ll get back to you soon at:{' '}
                  <span className="font-semibold text-teal-600">
                    meeraarthisri4@gmail.com
                  </span>
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-teal-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Follow Me</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/meera-arthi-sri-49a8b0276"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500 transition-colors duration-300">
                  <Linkedin
                    className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    size={24}
                  />
                </div>
                <p className="font-medium text-gray-800">LinkedIn</p>
              </a>

              <a
                href="https://github.com/Meera611"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="p-3 bg-gray-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-800 transition-colors duration-300">
                  <Github
                    className="text-gray-800 group-hover:text-white transition-colors duration-300"
                    size={24}
                  />
                </div>
                <p className="font-medium text-gray-800">GitHub</p>
              </a>

              <a
                href="mailto:meeraarthisri4@gmail.com"
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="p-3 bg-red-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500 transition-colors duration-300">
                  <Mail
                    className="text-red-600 group-hover:text-white transition-colors duration-300"
                    size={24}
                  />
                </div>
                <p className="font-medium text-gray-800">Email</p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2025 Meera Arthi Sri. S. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
