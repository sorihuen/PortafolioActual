// Work.jsx
import Header from "./Header";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import imgnode from '../assets/img/nodelo.png';
import imgnodelogin from '../assets/img/nodelogin.png';
import landing from '../assets/img/landing.png';
import menu from '../assets/img/menu.png';
import qr from '../assets/img/qr.png';
import docsfastapi from '../assets/img/docsfastapi.png';
import { useNavigate } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: "Login and Role-Based Session Start",
    images: [imgnode,imgnodelogin], // Array de imágenes para el carrusel
    description: "This project features a login system with role-based session initiation. It is designed for secure and efficient user authentication, leveraging Node.js and MongoDB for backend operations, along with HTML and CSS for the frontend",
    repo: "https://github.com/sorihuen/LoginNodejs", 
    skills: ['Nodejs', 'Mongodb', 'HTML', 'CSS'],
  },
  {
    id: 2,
    title: "Landing Pages",
    images: [landing, menu, qr],
    description: "This project is a sample landing page built using Vue.js and Vite. It demonstrates the basic functionalities and structure of a web application developed with these technologies, providing a clean and modern user interface.",
    link: "https://landingpages-eto.pages.dev/landing/qrcode",
    skills: ["React","Vite","Responsive"],
  },
  {
    id: 3,
    title: "Web Scraping",
    images: [docsfastapi ],
    description: "Web scraping project utilizing Python and FastAPI, with data storage in MongoDB and containerization using Docker.",
    link: "https://github.com/sorihuen/WebScraping.git",
    skills: ["Python", "FastApi", "MongoDb", "Docker"],
    

  },

];

const Work = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // const handleGoBack = () => {
  //   console.log("Botón 'Volver atrás' presionado");
  //   window.location.href = '/';
  // }
  const navigate = useNavigate();
  const handleGoBack = () => {
    console.log("Botón 'Volver atrás' presionado");
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-amber-300 z-30 overflow-y-auto">
      <Header
        title="Suyin Orihuen"
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        onGoBack={handleGoBack}
      />
      <div className="min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="relative sm:mb-12 mt-14 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-2xl font-bold text-cyan-900">
            Work
          </h2>
        </div>
  
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                images={project.images}
                description={project.description}
                link={project.link}
                repo={project.repo}
                skills={project.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Work;
