import React from "react";
import "./scrollHint.scss";

import { ReactComponent as ScrollImg } from "../../../assets/img/hint/tap.svg";

const ScrollHint = ({ isShow, text }) => {
  return (
    <div id="scrollHint" className={isShow ? "" : "hideScroll"}>
      <div className="svgContainer">
        <ScrollImg />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ScrollHint;
