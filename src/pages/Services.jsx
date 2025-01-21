import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Services() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleGoBack = () => {
    console.log("Botón 'Volver atrás' presionado");
    navigate("/");
  };

  const services = [
    {
      title: "Full Stack Development",
      description:
        "Full web application development, from frontend to backend, using the latest technologies.",
      icon: "💻",
    },
    {
      title: "SEO Optimization",
      description:
        "Enhancing website visibility and ranking through strategic search engine optimization techniques.",
      icon: "🔍",
    },
    {
      title: "Database Design",
      description:
        "Architecture and optimization of databases for efficient and scalable performance.",
      icon: "🗄️",
    },
    {
      title: "Microservices",
      description:
        "Design and implementation of microservice architectures to achieve independent scalability and efficient resource management.",
      icon: "🔗",
    },
  ];

  return (
    <div className="relative w-full min-h-screen p-4 sm:p-6 overflow-y-auto bg-amber-300">
      {/* Header */}
      <div className="mt-10">
        <Header
          title="Suyin Orihuen"
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          onGoBack={handleGoBack}
        />
      </div>

      {/* Título Services */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-cyan-900 text-center mt-16">
        Services
      </h2>

      {/* Lista de servicios */}
      <div className="grid gap-x-4 gap-y-6 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-2 justify-items-center max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-slate-700 via-neutral-800 to-black rounded-lg shadow-lg p-6 w-full max-w-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyan-500/50"
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{service.icon}</span>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
            </div>
            <p className="text-base text-white">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Sección de contacto */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          ¿Interesado en trabajar juntos?
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-300"
            onClick={() => navigate("/")}
          >
            Contáctame
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
