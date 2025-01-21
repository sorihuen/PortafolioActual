import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const email = "sanyelibermudez@gmail.com";
  const linkedinProfile =
    "https://www.linkedin.com/in/suyin-anyeli-orihuen-de-berm%C3%BAdez-1300222b2/";

    const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState);
    };
  
    const handleGoBack = () => {
      console.log("Botón 'Volver atrás' presionado");
      navigate("/");
    };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/suyincv.pdf";
    link.download = "suyincv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLinkedInRedirect = () => {
    window.open(linkedinProfile, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-300 p-4 relative">
      <div className="mt-10">
        <Header
          title="Suyin Orihuen"
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          onGoBack={handleGoBack}
        />
      </div>
      <form className="bg-white p-10 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-3xl font-bold text-cyan-900 mb-6">Contact Me</h2>
        <div className="mb-6">
          <a
            href={`mailto:${email}`}
            className="mt-1 block w-full bg-gradient-to-b from-slate-700 via-neutral-800 to-black text-white rounded-lg py-3 text-center shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyan-500/50"
          >
            Send Email
          </a>
        </div>
        <div className="mb-6">
          <button
            type="button"
            onClick={handleResumeDownload}
            className="w-full bg-gradient-to-b from-slate-700 via-neutral-800 to-black text-white rounded-lg py-3 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyan-500/50"
          >
            Download Resume (CV)
          </button>
        </div>
        <div className="mb-6">
          <button
            type="button"
            onClick={handleLinkedInRedirect}
            className="w-full bg-gradient-to-b from-slate-700 via-neutral-800 to-black text-white rounded-lg py-3 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyan-500/50"
          >
            View LinkedIn Profile
          </button>
        </div>
      </form>
    </div>
  );
  
}

export default Contact;
