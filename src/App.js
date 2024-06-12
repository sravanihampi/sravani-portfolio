import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;