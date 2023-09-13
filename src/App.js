import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/pages/about/About";
import Resume from "./components/pages/resume/Resume";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Contact from "./components/pages/contact/Contact";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills/>
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
