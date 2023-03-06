import React from "react";
import "./effect.scss";
import "./effect_mobile.scss";

import BirdsEye from "./birdsEye/birdsEye";
import Spread from "./spread/spread";
import Title from "../title/bouncy/title"

const Effect = ({isMobile}) => {
  return (
    <div id="effect" className="section">
      <Title title={"Try something COOL!"} />

      <section id="effectContainer">
        <BirdsEye isMobile={isMobile} />
        <Spread />
      </section>
    </div>
  );
};

export default Effect;
