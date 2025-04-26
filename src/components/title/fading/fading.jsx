import React from "react";
import "./fading.scss";
import "./fading_mobile.scss";

const Fading = ({ text }) => {
  return (
    <div className="fading" style={{ pointerEvents: "auto" }}>
      <svg>
        <text dominantBaseline="middle" y="55%">
          {text}
        </text>
      </svg>
    </div>
  );
};

export default Fading;
