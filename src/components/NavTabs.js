import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import headshot from "./assets/hel-headshot2.png";
import "../styles/navtabs.css";
import { FaBars } from "react-icons/fa";

function NavTabs() {
  return (
    <Navbar className="navbar d-flex" sticky="top" collapseOnSelect expand="lg">
      <Container className="nav-container">
        {/* <Navbar.Brand href="#home">
          <img
            alt=""
            src={headshot}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          children={<FaBars style={{ color: "white" }} />}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
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
