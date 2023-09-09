import React from "react";

function ProjectItem({ name, about, technologies }) {
  // technologies = projects.map(technologies => <span key={technologies}>{technologies} </span> );
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, i) => (
          <span key={i}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
