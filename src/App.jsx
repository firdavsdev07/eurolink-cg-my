import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const data = [
    {
      icon: "fa-brands fa-html5",
      name: "HTML",
      text: "Text Markup Language",
      id: 1,
    },
    {
      icon: "fa-brands fa-css3-alt",
      name: "CSS",
      text: "Cascading Style Sheets",
      id: 2,
    },
    {
      icon: "fa-brands fa-sass",
      name: "sass",
      text: "Syntactically Awesome Stylesheet",
      id: 3,
    },
    {
      icon: "fa-brands fa-bootstrap",
      name: "sass",
      text: "CSS Framework",
      id: 4,
    },
    {
      icon: "fa-brands fa-js",
      name: "JS",
      text: "Programming Language",
      id: 5,
    },
    {
      icon: "fa-brands fa-vuejs",
      name: "Vue",
      text: "Js Framework",
      id: 6,
    },
    {
      icon: "fa-brands fa-react",
      name: "React",
      text: "Js Framework",
      id: 7,
    },
    {
      icon: "fa-brands fa-git-alt",
      name: "Git bash",
      text: "Interactive command line",
      id: 8,
    },
    {
      icon: "fa-brands fa-npm",
      name: "npm",
      text: "Software library",
      id: 9,
    },
    {
      icon: "fa-brands fa-docker",
      name: "docker",
      text: "open platform to ship and launch",
      id: 10,
    },
    {
      icon: "fa-brands fa-github",
      name: "github",
      text: "Website and cloud based service",
      id: 11,
    },
  ];
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
            {/* <img src={site1} alt="img" /> */}
          </div>

          <div id="about">
            <About />
          </div>

          <div id="skills">
            <Skills data={data} />
          </div>
          <div id="works">
            <Works />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
