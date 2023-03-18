import React from "react";
import "./toTop.scss";
import "./toTop_mobile.scss";

import arrow from "/src/assets/img/toTop/up_ward.png"

const ToTop = ({ onTop }) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return !onTop ? (
    <div id="toTop" onClick={goToTop}>
      <img src={arrow} />
    </div>
  ) : (
    <></>
  );
};

export default ToTop;
