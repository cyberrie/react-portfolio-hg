import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import headshot from "./assets/hel-headshot2.png";
import "./styles/navtabs.css";

function NavTabs() {
  return (
    <Navbar className="navbar" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={headshot}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggler" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/react-portfolio-hg"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/react-portfolio-hg/about/*"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/react-portfolio-hg/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/react-portfolio-hg/contact"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
