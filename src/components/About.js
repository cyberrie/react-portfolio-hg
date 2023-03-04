import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Skills from "./Skills";

function About(props) {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
      <Link to="skills" role="button" className="btn btn-link">
        Show Skills
      </Link>
      <Link to="about" role="button" className="btn btn-link">
        Hide Skills
      </Link>
      <Routes>
        <Route path="skills" element={<Skills />} />
      </Routes>
    </div>
  );
}
export default About;
