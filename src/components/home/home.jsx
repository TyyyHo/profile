import React from "react";
import "./home.scss";
import "./home_mobile.scss";

import Planet from "./planet/planet";
import Fading from "../title/fading/fading";

const Home = () => {
  return (
    <div id="homeContainer">
      <Planet />
      <div className="paragraph">
        <Fading text={"Welcome!"} />
        <h2 className="trigger">My name is Tyler.</h2>
        <p>Front-end Developer</p>
      </div>
    </div>
  );
};

export default Home;
