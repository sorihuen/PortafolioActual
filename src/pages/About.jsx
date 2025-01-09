import { useState } from "react";
import Header from "./Header";
import Card from "./Card";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Redirige a la ruta deseada
  const handleGoBack = () => {
    console.log("Botón 'Volver atrás' presionado");
    window.location.href = '/';
  };

  return (
    <div className="fixed inset-0 bg-amber-300 z-30 overflow-y-auto">
      <Header 
        title="Suyin Orihuen" 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        onGoBack={handleGoBack} 
      />
      <div className="min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="relative sm:mb-12 mt-14 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-2xl font-bold text-cyan-900">
            About Me
          </h2>
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="About Me">
              <div className="space-y-4">
                <p className="text-white">
                  Passionate Full Stack Developer creating elegant solutions with a
                  background in web development.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {['Frontend', 'Backend', 'Full Stack','Responsive Design','Version Control','Documentation','Automation','Security','Agile Development','Databases','Data Analysis'].map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 bg-cyan-100 text-cyan-900 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            <Card title="SOFT SKILLS">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                {['Self-starter', 'Creativity', 'Team player', 'Responsible', 'Adaptability', 'Leadership','Troubleshooting','Effective communication'].map((tech) => (
                  <div
                    key={tech}
                    className="p-3 bg-gray-50 rounded-lg text-center hover:bg-cyan-50 transition-colors duration-300"
                  >
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Experience">
              <div className="space-y-6">
                {[
                  {
                    title: 'Software Developer / Backend',
                    company: 'Lets do it now.',
                    period: 'Marzo 2022 - Julio 2024',
                    description: 'Develop high-performance programs with different frameworks - Integrations with API (Google, Mercado Pago) - Deployment to servers'
                  },
                  {
                    title: 'Full Stack Developer',
                    company: 'Salsa Verde',
                    period: 'Julio 2024 - Octubre 2024',
                    description: 'Development of web pages for restaurants - Documentation - Deployment to servers'
                  }
                ].map((exp, index) => (
                  <div key={index} className="border-l-2 border-cyan-500 pl-4">
                    <h4 className="text-lg font-semibold text-slate-400">
                      {exp.title}
                    </h4>
                    <p className="text-white">{exp.company}</p>
                    <p className="text-sm text-white">{exp.period}</p>
                    <p className="mt-2 text-white">{exp.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
);
};

export default About;
