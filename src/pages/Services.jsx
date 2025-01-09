
import { useNavigate } from 'react-router-dom';

function Services() {
    const navigate = useNavigate();
    
    const services = [
        {
            title: "Full Stack Development",
            description: "Full web application development, from frontend to backend, using the latest technologies.",
            icon: "💻"
        },
        {
            title: "SEO Optimization",
            description: "Enhancing website visibility and ranking through strategic search engine optimization techniques.",
            icon: "🔍"
          },
        {
            title: "Database Design",
            description: "Architecture and optimization of databases for efficient and scalable performance.",
            icon: "🗄️"
        },
        {
            title: "Microservices",
            description: "Design and implementation of microservice architectures to achieve independent scalability and efficient resource management.",
            icon: "🔗"
          }
          
    ];

    return (
        <div className="relative w-full min-h-full p-4 sm:p-6 overflow-y-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 mt-10 sm:mt-4">
                Servicios Profesionales
            </h2>
            
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                        <div className="flex items-center mb-3 sm:mb-4">
                            <span className="text-3xl sm:text-4xl mr-3 sm:mr-4">{service.icon}</span>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                {service.title}
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Sección de contacto */}
            <div className="mt-8 sm:mt-12 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
                    ¿Interesado en trabajar juntos?
                </h3>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        className="bg-amber-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-300"
                        onClick={() => navigate('/portfolio')}
                    >
                        Contáctame
                    </button>
                </div>
            </div>
        </div>
    );
}

// Asegúrate de exportar el componente por defecto
export default Services;