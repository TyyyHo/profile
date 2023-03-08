import React, { useState } from "react";
import "./birdsEye.scss";
import "./birdsEye_mobile.scss";

import ScrollHint from "../../hint/scroll/scrollHint";
import ClickHint from "../../hint/click/clickHint";

const BirdsEye = ({ isMobile }) => {
  const [showClick, setClick] = useState(true);
  const [showScroll, setScroll] = useState(true);

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
    setClick(false);
    setScroll(false);
  }

  const handleMouseLeave = () => {
    document.documentElement.style.setProperty("--scale", 1);
    document.documentElement.style.setProperty("--x", 0);
    document.documentElement.style.setProperty("--y", 0);
  };

  return (
    <div
      id="birdsEyeContainer"
      onClick={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* 根據裝置類型決定要渲染的組件 */}
      {
        {
          true: <ClickHint isShow={showClick} text={"click"} />,
          false: <ScrollHint isShow={showScroll} text={"Scroll"} />,
        }[isMobile]
      }
      <div className="wrapper">
        <div id="img"></div>
      </div>
    </div>
  );
};

export default BirdsEye;
