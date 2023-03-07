import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavTabs from "./components/NavTabs";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router basename="/react-portfolio-hg">
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/react-portfolio-hg" element={<Home />} />
          <Route path="/react-portfolio-hg/about/*" element={<About />} />
          <Route path="/react-portfolio-hg/projects" element={<Projects />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/react-portfolio-hg/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
