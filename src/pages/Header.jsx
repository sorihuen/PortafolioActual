import { ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";
import imglogo from "../assets/img/logosy.png";

export default function Header({
  title,
  onGoBack = () => {},
  showBackButton = true,
}) {
  return (
    <header className="fixed top-0 left-0 w-full z-10 flex items-center justify-between bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-sm px-4 py-2 lg:py-2 lg:px-6">
      <div>
        <img
          src={imglogo}
          alt="Developer portrait"
          className="rounded-full shadow-lg w-12 h-12 object-cover border-2 border-white transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:border-gray-500 hover:shadow-2xl"
          onClick={onGoBack} // Agregado el evento onClick aquí
        />
      </div>

      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-900 italic tracking-wide">
        <span className="inline-block transform hover:scale-105 transition-transform duration-300 font-serif relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-900 transform origin-left scale-x-0 transition-transform duration-300"></span>
        </span>
      </h1>

      {showBackButton && (
        <button
          onClick={onGoBack}
          className="p-2 bg-cyan-900 text-white rounded-lg transition-transform duration-300 flex items-center justify-center"
        >
          <ArrowLeft size={24} />
        </button>
      )}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onGoBack: PropTypes.func,
  showBackButton: PropTypes.bool,
};
