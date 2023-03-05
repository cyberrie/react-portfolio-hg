import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <Container className="">
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      <Row>
        <h4>hey hey hey </h4>
      </Row>

      <Row>
        <Col>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="6x" />
          </a>
        </Col>
        <Col>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="6x" />
          </a>
        </Col>
        <Col>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="6x" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
