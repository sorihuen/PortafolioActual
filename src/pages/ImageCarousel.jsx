// ImageCarousel.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-cyan-400 text-3xl opacity-50 hover:opacity-100 hover:text-cyan-600 transition-opacity duration-200"
        style={{ background: 'none', border: 'none', outline: 'none' }}
      >
        ‹
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-contain"
      />
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 text-3xl opacity-50 hover:opacity-100 hover:text-cyan-600 transition-opacity duration-200"
        style={{ background: 'none', border: 'none', outline: 'none' }}
      >
        ›
      </button>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;





