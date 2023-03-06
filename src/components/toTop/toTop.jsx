import React from "react";
import "./toTop.scss";

const ToTop = ({ onTop }) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return !onTop ? (
    <div id="toTop">
      <img src="/src/assets/img/toTop/up_ward.png" onClick={goToTop} />
    </div>
  ) : (
    <></>
  );
};

export default ToTop;
