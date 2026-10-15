function ProjectCard({ title, description, image, liveUrl, githubUrl }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-links">
        <a href={liveUrl} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
