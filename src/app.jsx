import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Self from "./components/Self";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Header />
          <Self />
        </div>
        <About />
        <Projects />
        <div className="relative z-0">
            <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;