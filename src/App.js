import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Slider from "./components/Slider.js";
import Services from "./components/Services";
import ParticleShapes from "./components/Particle";

import LeatestWork from "./components/LatestWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
       <Header />
       <Slider />
       <Services />
       
      <LeatestWork />
      <ParticleShapes/>
      <Footer />
    </div>
  );
}

export default App;
