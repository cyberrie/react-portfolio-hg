import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/react-portfolio-hg"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio-hg/about/*"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio-hg/projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/react-portfolio-hg/contact"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
