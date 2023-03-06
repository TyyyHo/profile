import React from "react";
import "./fading.scss";

const Fading = ({ text }) => {
  return (
    <div className="fading">
      <svg>
        <text dominantBaseline="middle" y="55%">
          {text}
        </text>
      </svg>
    </div>
  );
};

export default Fading;
