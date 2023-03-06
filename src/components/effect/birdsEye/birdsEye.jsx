import React, { useState } from "react";
import "./birdsEye.scss";
import { isMobileDevice } from "../../hint/isMobile/isMobile";

import ScrollHint from "../../hint/scroll/scrollHint";
import ClickHint from "../../hint/click/clickHint";

const BirdsEye = () => {
  const [showHint, setHint] = useState(true);
  const isMobile = isMobileDevice();

  function handleMouseMove(e) {
    const ele = document.getElementById("birdsEyeContainer");
    const d = ele.getBoundingClientRect();
    let x = e.clientX - (d.left + Math.floor(d.width / 2));
    let y = e.clientY - (d.top + Math.floor(d.height / 2));

    //set moving
    document.documentElement.style.setProperty("--scale", 1.5);
    document.documentElement.style.setProperty("--x", -x / 2 + "px");
    document.documentElement.style.setProperty("--y", -y / 2 + "px");

    //呼叫過fn後提示消失
    setHint(false);
  }

  const handleMouseLeave = () => {
    document.documentElement.style.setProperty("--scale", 1);
    document.documentElement.style.setProperty("--x", 0);
    document.documentElement.style.setProperty("--y", 0);
  };

  return (
    <div id="birdsEyeContainer">
      {
        {
          true: <ClickHint isShow={showHint} text={"Click"} />,
          false: <ScrollHint isShow={showHint} text={"Scroll"} />,
        }[isMobile]
      }

      {/* <ScrollHint isShow={showHint} text={"Scroll"} /> */}
      <div
        className="wrapper"
        onClick={handleMouseMove}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div id="img"></div>
      </div>
    </div>
  );
};

export default BirdsEye;
