import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
};

export default App;
