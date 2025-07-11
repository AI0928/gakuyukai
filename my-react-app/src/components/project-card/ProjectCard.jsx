import './ProjectCard.css'

function ProjectCard({ title }) {
  return (
    <div className="project-card">
      <div className="project-title">{title}</div>
    </div>
  )
}

export default ProjectCard