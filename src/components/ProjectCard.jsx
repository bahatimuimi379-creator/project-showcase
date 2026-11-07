function ProjectCard({ project }) {
  const color = project.color || '#6c757d';

  return (
    <li className="list-group-item d-flex align-items-center gap-3">
    
      <div
        className="d-flex align-items-center justify-content-center text-white fw-bold rounded flex-shrink-0"
        style={{ backgroundColor: color, width: '3rem', height: '3rem' }}
        aria-hidden="true"
      >
        {project.title.charAt(0)}
      </div>

      <div>
        <h2 className="h6 mb-0">{project.title}</h2>
        <small className="text-muted">{project.description}</small>
      </div>
    </li>
  );
}

export default ProjectCard;

