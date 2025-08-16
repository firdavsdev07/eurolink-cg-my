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
import Services from "./components/Services";
import Road from "./components/Road";
import Location from "./components/Location";
import Results from "./components/Results";
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <Router>
      <div className="bg-black">
        <Navbar
          content={content}
          language={language}
          setLanguage={setLanguage}
        />

        <main>
          <section id="home">
            <Home content={content} />
          </section>

          <section id="about" className="fade-in-up">
            <About content={content} />
          </section>

          <section id="work" className="fade-in-up">
            <Works content={content} />
          </section>

          <section id="formation" className="fade-in-up">
            <Formation content={content} />
          </section>

          <section id="team" className="fade-in-up">
            <Team content={content} />
          </section>

          <section id="service" className="fade-in-up">
            <Services content={content} />
          </section>

          <section id="road" className="fade-in-up">
            <Road content={content} />
          </section>

          <section id="results" className="fade-in-up">
            <Results content={content} />
          </section>

          <section id="location" className="fade-in-up">
            <Location />
          </section>

          <footer id="contact" className="fade-in-up">
            <Footer content={content} />
          </footer>
        </main>
      </div>
    </Router>
  );
};

export default App;
