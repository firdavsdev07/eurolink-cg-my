import React, { useEffect, useState } from "react";
import "./App.css";
import Translation from "./components/language/data.json";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Formation from "./components/Formation";
import Team from "./components/Team";
import Footer from "./components/Footer";

const App = () => {
  const [language, setLanguage] = useState("DE");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === "DE") {
      setContent(Translation.germany);
    } else if (language === "UZ") {
      setContent(Translation.uzb);
    }
  }, [language]);

  return (
    <Router>
      <div>
        <Navbar
          content={content}
          language={language}
          setLanguage={setLanguage}
        />

        <main>
          <div id="home">
            <Home content={content} />
          </div>

          <div id="about">
            <About content={content} />
          </div>

          <div id="work">
            <Works content={content} />
          </div>
          <div id="formation">
            <Formation content={content} />
          </div>

          <div id="team">
            <Team content={content} />
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
