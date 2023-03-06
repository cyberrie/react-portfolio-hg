import React from "react";
import projectDetails from "../components/projects.json";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

// will use reusable project component and map projects from json
function Projects() {
  return (
    <Container className="">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Portfolio</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="mb-5 po_items_ho">
        {projectDetails.map((project, i) => {
          return (
            <div key={i} className="po_item">
              <h4 className="po_title">{project.title}</h4>
              <img src={project.image} alt={project.title} />

              <div className="content">
                <a href={project.linkDeployed} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faWindowMaximize}
                    size="3x"
                    color="white"
                    border="1px"
                  />
                </a>
                <a href={project.linkRepo} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    color="white"
                    border="1px"
                  />
                </a>
              </div>
            </div>
          );
          // console.log(<Project key={project.id} project={project} />);
        })}
      </div>
    </Container>
  );
}

export default Projects;
