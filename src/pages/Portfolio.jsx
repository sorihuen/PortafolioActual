import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import imgfoto from "../assets/img/imgsuyin.jpg";
import Card from "./Card";
import { techImages } from "../assets/config/techimages";

export default function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const onGoBack = () => {
    console.log("Go back button clicked");
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/suyincv.pdf";
    link.download = "suyincv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/suyin-anyeli-orihuen-de-berm%C3%BAdez-1300222b2/",
      "_blank"
    );
  };
  const portfolioSections = [
    {
      title: "About",
      content:
        "I am a dedicated Full Stack Developer with a strong passion for building seamless and intuitive web applications. With a robust background in both front-end and back-end development, I am committed to delivering high-quality, efficient solutions that meet user needs and business objectives.",
      quote: "- Isaac Newton",
      description:
        "These are the tools I (love to) a familiar with in my day-to-day work:",
      items: [],
      bgColor: "bg-cyan-900/20",
      hoverColor: "hover:bg-cyan-800/30",
    },
    {
      title: "Work",
      content: "Check out my latest projects and collaborations.",
      items: [
        { name: "Python", imgSrc: techImages.Python },
        { name: "Nodejs", imgSrc: techImages.Node },
        { name: "React", imgSrc: techImages.React },
        { name: "Git", imgSrc: techImages.Git },
        { name: "Docker", imgSrc: techImages.Docker },
        { name: "Django", imgSrc: techImages.Django },
        { name: "Vuejs", imgSrc: techImages.Vuejs },
        { name: "Postgres", imgSrc: techImages.Postgres },
        { name: "MongoDB", imgSrc: techImages.MongoDB },
        { name: "Wordpress", imgSrc: techImages.Wordpress },
        { name: "Js", imgSrc: techImages.Js },
        { name: "Aws", imgSrc: techImages.Aws },
        { name: "Figma", imgSrc: techImages.Figma },
        { name: "Tailwind", imgSrc: techImages.Tailwind },
        { name: "C#", imgSrc: techImages.imagenC },
        
      ],
      bgColor: "bg-purple-900/20",
      hoverColor: "hover:bg-purple-800/30",
    },
    {
      title: "Services",
      content: "Specialized in creating robust and scalable solutions.",
      items: [
        "Full Stack",
        "Backend",
        "Database Design",
        "Frontend",
        "SEO Optimization",
        "API Development",
        "Microservices",
      ],
      bgColor: "bg-green-900/20",
      hoverColor: "hover:bg-green-800/30",
    },
    {
      title: "Contact",
      content: "Let's connect and create something amazing together!",
      items: ["sorihuen@gmail.com", "Resume CV", "LinkedIn"],
      bgColor: "bg-red-900/20",
      hoverColor: "hover:bg-red-800/30",
    },
  ];

  const handleCardClick = (section) => {
    navigate(`/portfolio/${section.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Header
        title="Suyin Orihuen"
        onGoBack={onGoBack}
        className="fixed top-0 left-0 w-full z-50"
        showBackButton={false}
      />

      {/* Columna Izquierda */}
      <div className="w-full lg:w-1/2 bg-gradient-to-b from-slate-700 via-neutral-800 to-black p-4 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center my-2">
          <h1 className="text-lg sm:text-xl lg:text-3xl mb-2 text-cyan-900 font-bold mt-16 font-serif bg-gradient-to-r from-amber-400 via-yellow-600 to-orange-500 bg-clip-text text-transparent shadow-md">
            Full Stack Developer
          </h1>

          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mt-4">
            <img
              src={imgfoto}
              alt="Developer portrait"
              className="rounded-lg shadow-lg w-full h-full object-cover border-4 border-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:border-black"
            />
          </div>
        </div>

        <div className="mt-4 px-3 text-center sm:text-left max-w-sm lg:max-w-md">
          <h2 className="text-base sm:text-lg lg:text-2xl mb-2 font-bold bg-gradient-to-r from-amber-400 via-yellow-600 to-orange-500 bg-clip-text text-transparent">
            WELCOME
          </h2>
          <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed">
            I am a passionate Full Stack Developer with experience building
            innovative products for clients across various countries. My goal is
            to continue learning and growing, contributing to high-impact
            technological solutions.
          </p>
        </div>

        <div className="mt-auto text-center sm:text-left text-xs p-2 font-bold bg-gradient-to-r from-amber-400 via-yellow-600 to-orange-500 bg-clip-text text-transparent">
          Constantly learning and evolving to build solutions that make a
          difference.
        </div>

        <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-16 lg:h-16 bg-orange-300 rounded-tl-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border bg-amber-300 rotate-45 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-amber-300 rounded-full opacity-50 animate-bounce"></div>
      </div>

      {/* Columna Derecha */}
      {/* Columna Derecha */}
      <div className="w-full lg:w-1/2 bg-amber-300 relative overflow-y-auto pt-16">
        {location.pathname === "/portfolio" ? (
          <div className="p-3 sm:p-4 lg:p-6 flex flex-col justify-between min-h-full">
            {/* Ajuste en el Grid para centrar las tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 mt-2 justify-items-center">
              {portfolioSections.map((section, index) => (
                <Card
                  key={index}
                  title={section.title}
                  className={`w-full sm:w-1/2 lg:w-full ${section.bgColor} ${section.hoverColor} rounded-lg shadow-lg overflow-hidden cursor-pointer`} // Agregado cursor-pointer
                  style={{ height: "auto" }}
                  onClick={() => handleCardClick(section.title)} 
                >
                  <div className="flex flex-col justify-between p-3">
                    <div className="mb-2">
                      <h3 className="text-base sm:text-lg font-bold mb-1 text-white">
                        {section.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white line-clamp-2">
                        {section.content}
                      </p>
                      {section.description && (
                        <p className="text-xs mt-1 text-white line-clamp-1">
                          {section.description}
                        </p>
                      )}
                    </div>

                    {/* Íconos e items */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {section.items.map((item, i) =>
                        typeof item === "object" && item.imgSrc ? (
                          <img
                            key={i}
                            src={item.imgSrc}
                            alt={item.name}
                            className="w-8 h-8 object-contain rounded-md shadow-sm"
                            title={item.name}
                          />
                        ) : (
                          <span
                            key={i}
                            className={`inline-block ${item.includes("@")
                                ? "cursor-pointer text-amber-300 underline"
                                : "bg-gray-500"
                              } rounded-full px-2 py-0.5 text-xs font-semibold text-amber-300`}
                            onClick={(e) => {
                              e.stopPropagation(); // Evita que el clic afecte la navegación
                              if (item === "Resume CV") handleResumeDownload();
                              else if (item === "LinkedIn") handleLinkedInClick();
                              else if (item.includes("@")) handleEmailClick(item);
                            }}
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </Card>

              ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-3 sm:p-4 lg:p-6 min-h-screen">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}
