import React from "react";
import Project from "../components/Project";
import projectDetails from "../projects.json";

// will use reusable project component and map projects from json
function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      {projectDetails.map((project) => {
        // console.log(<Project key={project.id} project={project} />);
        <Project key={project.id} project={project} />;
      })}
    </div>
  );
}

export default Projects;
