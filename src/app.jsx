import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Self from "./components/Self";
import Technologies from "./components/Technologies";
import "../src/index.css";
import bgimage from "./assets/herobg.png";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div
          className=" bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <Header />
          <Self />
        </div>
        <div
          className=" bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <About />
        </div>
        <div
          className=" bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <Technologies />
        </div>
        <div
          className=" bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <Projects />
        </div>
        <div
          className="relative z-0 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
