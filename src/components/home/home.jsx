import React from "react";
import "./home.scss";
import "./home_mobile.scss";

import Planet from "./planet/planet";
import Fading from "../title/fading/fading";
import InfiniteMarquee from "../infinite-marquee";

const Home = () => {
  return (
    <div id="homeContainer">
      <Planet />
      <div className="paragraph" style={{ pointerEvents: "none" }}>
        <Fading text={"Welcome!"} />
        <h2 className="trigger">My name is Tyler.</h2>
        <p>Front-end Developer</p>
      </div>

      <InfiniteMarquee />
    </div>
  );
};

export default Home;
