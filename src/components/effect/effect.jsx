import React from "react";
import "./effect.scss";

import BirdsEye from "./birdsEye/birdsEye";
import Spread from "./spread/spread";
import Title from "../title/bouncy/title"

const Effect = () => {
  return (
    <div id="effect" className="section">
      <Title title={"Try something COOL!"} />

      <section id="effectContainer">
        <BirdsEye />
        <Spread />
      </section>
    </div>
  );
};

export default Effect;
