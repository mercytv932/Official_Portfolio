function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) {
  return (
    <article className="project-card">
      <img src={image} alt={`${title} project's card image`} />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={liveUrl} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href={githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
