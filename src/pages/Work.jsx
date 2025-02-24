// Work.jsx
import Header from "./Header";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import imgnode from '../assets/img/nodelo.png';
import imgnodelogin from '../assets/img/nodelogin.png';
import editimg from '../assets/img/editImg.png';
import loginScraping from '../assets/img/loginScraping.png';
import registerScraping from '../assets/img/registerScraping.png';
import scraping from '../assets/img/scraping.png';
import landing from '../assets/img/landing.png';
import gitenvio from '../assets/img/gitenvio.png';
import apienvio from '../assets/img/apienvio.png';
import webh1 from '../assets/img/webh1.png';
import webh2 from '../assets/img/webh2.png';
import webh3 from '../assets/img/webh3.png';
import webh4 from '../assets/img/webh4.png';
import webhookapi from '../assets/img/webhookapi.png';
import readmeWebhook from '../assets/img/readmeWebhook.png';
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
    skills: ["Vue","Vite","Responsive"],
  },
  {
    id: 3,
    title: "Web Scraping",
    images: [docsfastapi ],
    description: "Web scraping project utilizing Python and FastAPI, with data storage in MongoDB and containerization using Docker.",
    repo: "https://github.com/sorihuen/WebScraping.git",
    skills: ["Python", "FastApi", "MongoDb", "Docker", "JWT"],
    

  },
  {
    id: 4,
    title: "Image Editor",
    images: [editimg],
    description: "This is an image editing API developed with Flask. It provides functionalities such as image rotation, background removal, and filter application.",
    repo: "https://github.com/sorihuen/EditorImg",
    skills: ["Python", "Flask", "Docker"],
    

  },
  {
    id: 4,
    title: "Web Scraping Auth",
    images: [loginScraping, registerScraping, scraping],
    description: "This frontend project for web scraping is developed using Vue.jsand Vite. It leverages Tailwind CSS for styling and ensures full responsiveness. The frontend fetches and displays data from backend APIs, providing a seamless and user-friendly experience",
    repo: "https://github.com/sorihuen/FrontAuthScraping.git",
    skills: ["Vuejs", "Vite", "Tailwind", "Responsive"],
    

  },
  {
    id: 5,
    title: "Shipments",
    images: [gitenvio,apienvio],
    description: "This RESTful API is designed to manage operations related to shipments, drivers, and routes. The platform enables the optimization of delivery logistics through the efficient assignment of drivers to routes and order tracking.",
    repo: "https://github.com/sorihuen/Shipments",
    skills: ["Nodejs", "Dockerfile", "Redis", "Postgres", "JWT"],
    

  },
  {
    id: 6,
    title: "WebhookApi",
    images: [webhookapi,readmeWebhook],
    description: "This project is a webhook developed in ASP.NET 8.0 to receive and process notifications of transactions made through PayPal. It is designed to easily integrate with your system and handle payments securely, using modern authentication and database management technologies.",
    repo: "https://github.com/sorihuen/WebhookAPi",
    skills: [".NET 8.0", "C#", "SQL Server", "PayPal"],
    

  },
  {
    id: 7,
    title: "Webhook",
    images: [webh1,webh2,webh3,webh4, ],
    description: "This is a project based on Next.js. It is designed to interact seamlessly with a C# backend API, ensuring efficient data exchange and smooth user experiences. Leveraging Next.js's powerful features for server-side rendering and static site generation, this project provides a modern, responsive, and highly performant web application.",
    repo: "https://github.com/sorihuen/webhook",
    skills: ["Next.js","Responsive", "Tailwind"],
    

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
