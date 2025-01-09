function Contact() {
    const email = 'sanyelibermudez@gmail.com';
    const linkedinProfile = 'https://www.linkedin.com/in/suyin-anyeli-orihuen-de-berm%C3%BAdez-1300222b2/';
  
    const handleResumeDownload = () => {
      const link = document.createElement("a");
      link.href = "/suyincv.pdf";
      link.download = "suyincv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    const handleLinkedInRedirect = () => {
      window.open(linkedinProfile, '_blank');
    };
  
    const handlePortfolioRedirect = () => {
      window.location.href = 'http://localhost:5173/portfolio';
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-300 p-4 relative">
        <form className="bg-white p-10 rounded-lg shadow-md max-w-lg w-full">
          <h2 className="text-3xl font-bold text-cyan-900 mb-6">Contact Me</h2>
          <div className="mb-6">
            <a href={`mailto:${email}`} 
               className="mt-1 block w-full bg-cyan-900 text-white rounded-lg py-3 text-center hover:bg-cyan-700 transition duration-300">
              Send Email
            </a>
          </div>
          <div className="mb-6">
            <button type="button" onClick={handleResumeDownload}
              className="w-full bg-cyan-900 text-white rounded-lg py-3 hover:bg-cyan-700 transition duration-300" >
              Download Resume (CV)
            </button>
          </div>
          <div className="mb-6">
            <button type="button" onClick={handleLinkedInRedirect}
              className="w-full bg-cyan-900 text-white rounded-lg py-3 hover:bg-cyan-700 transition duration-300" >
              View LinkedIn Profile
            </button>
          </div>
          {/* Enlace de redirección al portfolio */}
          <div className="mb-6">
            <a
              href="#"
              onClick={handlePortfolioRedirect}
              className="w-full text-cyan-900 text-center hover:text-cyan-700 transition duration-300"
            >
              Go to Portfolio
            </a>
          </div>
        </form>
      </div>
    );
  }
  
  export default Contact;
  