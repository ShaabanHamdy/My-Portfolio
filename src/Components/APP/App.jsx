import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const App = () => {


  
  return (
    <>
      <div className="container my-3">
        <Navbar />
      </div>
        <Home/>
      <div className="container my-3">
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
        
    </>
  );
};

export default App;
