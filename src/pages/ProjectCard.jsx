import PropTypes from "prop-types"
import Card from "./Card"
import ImageCarousel from "./ImageCarousel"

const ProjectCard = ({
  title = "Default Title",
  images = [],
  description = "Default Description",
  link = null,
  skills = [],
  repo = null,
}) => {
  return (
    <Card title={title}>
      <div className="space-y-2">
        {images.length > 0 && (
          <div className="h-48 overflow-hidden rounded-t-lg">
            <ImageCarousel images={images} />
          </div>
        )}

        <p className="text-white text-sm line-clamp-3">{description}</p>

        {/* Mostrar todas las skills, no solo las tres primeras */}
        <div className="flex flex-wrap gap-2 mb-2">
          {skills.map((skill) => (
            <span key={skill} className="inline-block px-2 py-1 bg-cyan-100 text-cyan-900 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-between text-sm">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-800 transition-colors duration-300"
            >
              Ver proyecto →
            </a>
          )}

          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              Ver repositorio →
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  repo: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ProjectCard






