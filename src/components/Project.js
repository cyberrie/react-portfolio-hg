import React from "react";
import projectDetails from "../projects.json";

// reusable project component ingesting data from json file
function Project() {
  return (
    <>
      <div key={projectDetails.id}>
        <h2> {projectDetails.title}</h2>
        <p>{projectDetails.linkDeployed}</p>
        <p>{projectDetails.linkRepo}</p>
        <img
          src={projectDetails.demo}
          alt={projectDetails.title + "gif/screenshot"}
        />
      </div>
    </>
  );
}

export default Project;
