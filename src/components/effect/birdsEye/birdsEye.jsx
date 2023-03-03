import React from "react";
import "./birdsEye.scss";

import view from "../../../assets/img/birdsEye/view.webp";

const BirdsEye = () => {
  function handleMouseMove(e) {
    const ele = document.getElementById("birdsEyeContainer");
    const d = ele.getBoundingClientRect();
    let x = e.clientX - (d.left + Math.floor(d.width / 2));
    let y = e.clientY - (d.top + Math.floor(d.height / 2));

    //set moving
    document.documentElement.style.setProperty("--scale", 1.5);
    document.documentElement.style.setProperty("--x", -x / 2 + "px");
    document.documentElement.style.setProperty("--y", -y / 2 + "px");
  }

  const handleMouseLeave = () => {
    document.documentElement.style.setProperty("--scale", 1);
    document.documentElement.style.setProperty("--x", 0);
    document.documentElement.style.setProperty("--y", 0);
  };

  return (
    <div id="birdsEyeContainer">
      <div
        className="wrapper"
        onClick={handleMouseMove}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img id="img" alt="" />
      </div>
    </div>
  );
};

export default BirdsEye;
