import PropTypes from 'prop-types';
import Card from "./Card";
import ImageCarousel from "./ImageCarousel";

const ProjectCard = ({
  title = 'Default Title',
  images = [],
  description = 'Default Description',
  link = null,
  skills = [],
  repo = null
}) => {
  return (
    <Card title={title}>
      <div className="space-y-4">
        {images.length > 0 && <ImageCarousel images={images} />}
        
        <p className="text-white">{description}</p>
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-cyan-600 hover:text-cyan-800 transition-colors duration-300"
          >
            Ver proyecto →
          </a>
        )}

        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            Ver repositorio →
          </a>
        )}
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-block px-3 py-1 bg-cyan-100 text-cyan-900 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  repo: PropTypes.string, // Agregando validación para `repo`
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
