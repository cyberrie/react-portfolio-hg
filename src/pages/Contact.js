import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/contact.css";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faClipboard,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

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
        <h2 className="contact-h">Let's work together!</h2>
      </Row>

      <Row style={{ maxWidth: "1000px" }}>
        <Col>
          <a
            href="https://www.linkedin.com/in/helenagilja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="4x"
              color="rgb(242, 85, 7)"
            />
          </a>
        </Col>
        <Col>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="4x"
              color="rgb(242, 85, 7)"
            />
          </a>
        </Col>
        <Col>
          <a
            href="mailto:helena.gilj@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="4x"
              color="rgb(242, 85, 7)"
            />
          </a>
        </Col>

        <Col>
          <a
            href="https://drive.google.com/file/d/1Bxf4qP01q582WzCHU3jv1iPzCsMwD8ND/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFile} size="4x" color="rgb(242, 85, 7)" />
          </a>
        </Col>

        <Col>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfg4G5cqZBVgmJeG_7NEiBWRZE3pN3qUZ0XTKrFc72O00x0pw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faClipboard}
              size="4x"
              color="rgb(242, 85, 7)"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
