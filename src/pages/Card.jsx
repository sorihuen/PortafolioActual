import PropTypes from "prop-types";

const Card = ({ children, title, onClick }) => (
  <div
    className="bg-gradient-to-b from-slate-700 via-neutral-800 to-black rounded-lg shadow-lg p-6 sm:p-8 mb-6 w-full max-w-xs sm:max-w-sm lg:max-w-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-cyan-500/50 hover:bg-gray-100 cursor-pointer"
    onClick={onClick} // ✅ Agregado el evento de clic aquí
  >
    <h3 className="text-xl sm:text-2xl font-semibold text-amber-300 mb-4 text-center">
      {title}
    </h3>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func, 
};

export default Card;


