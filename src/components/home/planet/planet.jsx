import React, { useEffect, useState } from "react";
import "./planet.scss";

//earth
import earth from "../../../assets/img/planet/earth.webp";

//衛星圖片
import html from "../../../assets/img/planet/html.webp";
import css from "../../../assets/img/planet/css.webp";
import javascript from "../../../assets/img/planet/javascript.webp";
import git from "../../../assets/img/planet/git.svg";
import redux from "../../../assets/img/planet/redux.svg";
import react from "../../../assets/img/planet/react.svg";
import vite from "../../../assets/img/planet/vite.svg";
import webpack from "../../../assets/img/planet/webpack.svg";
import figma from "../../../assets/img/planet/figma.svg";

const Planet = () => {
  const [imgSrc, setSrc] = useState([]);
  function pickImage() {
    let arr = [];
    let image = [
      html,
      css,
      javascript,
      git,
      redux,
      react,
      vite,
      webpack,
      figma,
    ];

    let randomNum = Math.floor(Math.random() * image.length);
    arr.push(image.splice(randomNum, 1)[0]);
    arr.push(image.splice(randomNum, 1)[0]);
    arr.push(image.splice(randomNum, 1)[0]);
    setSrc(arr);
  }

  useEffect(() => {
    pickImage();
  }, []);

  return (
    <div className="planet">
      <div className="earth" onClick={pickImage}>
        <img src={earth} alt="earth" />
      </div>
      <div className="orbit path1">
        <img className="satellite" src={imgSrc[0] || react} alt="orbit" />
      </div>
      <div className="orbit path2">
        <img className="satellite" src={imgSrc[1] || git} alt="orbit" />
      </div>
      <div className="orbit path3">
        <img className="satellite" src={imgSrc[2] || javascript} alt="orbit" />
      </div>
    </div>
  );
};

export default Planet;
