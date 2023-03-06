import React, { useEffect, useState } from "react";
import "./planet.scss";
import "./planet_mobile.scss";

//earth
import earth from "/src/assets/img/planet/earth.webp";

//衛星圖片
import html from "/src/assets/img/planet/html.webp";
import css from "/src/assets/img/planet/css.webp";
import javascript from "/src/assets/img/planet/javascript.webp";
import git from "/src/assets/img/planet/git.svg";
import redux from "/src/assets/img/planet/redux.svg";
import react from "/src/assets/img/planet/react.svg";
import vite from "/src/assets/img/planet/vite.svg";
import webpack from "/src/assets/img/planet/webpack.svg";
import figma from "/src/assets/img/planet/figma.svg";

const Planet = () => {
  const [imgSrc, setSrc] = useState([]);
  function pickImage() {
    let imageArr = [];
    let option = [
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

    //跑三圈取隨機數選image，若選中的image和前次相同則重選，選好push進陣列內等待狀態更新
    for (let index = 0; index < 3; index++) {
      let randomNum;
      while ( randomNum === undefined || option[randomNum] === imgSrc[index]) {
        randomNum = Math.floor(Math.random() * option.length);
      }
      imageArr.push(option.splice(randomNum, 1)[0]);
    }

    //更新狀態
    setSrc(imageArr);
  }

  //初始化圖片
  useEffect(() => {
    pickImage();
  }, []);

  return (
    <div className="planet">
      <div className="fakeEarth" onClick={pickImage}></div>
      <div className="earth">
        <img src={earth} alt="earth" />
      </div>
      <div className="orbit path1">
        <img className="satellite" src={imgSrc[0] || react} alt="orbit" />
      </div>
      <div className="orbit path2">
        <img className="satellite" src={imgSrc[1] || git} alt="orbit" />
      </div>
      <div className="orbit path3">
        <img className="satellite" src={imgSrc[2] || figma} alt="orbit" />
      </div>
    </div>
  );
};

export default Planet;
