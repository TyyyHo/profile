import { useState } from "react";
import "./App.css";
import "./theme.scss";

// components
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import Effect from "./components/effect/effect";
import Portfolio from "./components/portfolio/portfolio";


function App() {
  return (
    <div className="App darkTheme">
      <Navigation />
      <Home />
      {/* <Effect /> */}
      <Portfolio />
    </div>
  );
}

export default App;
