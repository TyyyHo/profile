import React, { useEffect, useState } from "react";
import "./planet.scss";
import "./planet_mobile.scss";

import { TechStackList } from "../../../lib/constant";

//earth
import earth from "/src/assets/img/planet/earth.webp";

//衛星圖片
import css from "/src/assets/img/planet/css.webp";
import git from "/src/assets/img/planet/git.svg";
import react from "/src/assets/img/planet/react.svg";

const Planet = () => {
  const [satellite, setSatellite] = useState([]);

  function pickImage() {
    const uniqueOptions = TechStackList.filter(
      (item) => !satellite.some((src) => src?.name === item.name)
    );
    const selectedOptions = [];
    for (let i = 0; i < 3 && uniqueOptions.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * uniqueOptions.length);
      selectedOptions.push(uniqueOptions.splice(randomIndex, 1)[0]);
    }
    setSatellite(selectedOptions);
  }

  //初始化圖片
  useEffect(() => {
    pickImage();
  }, []);

  return (
    <div id="planet">
      <div className="fakeEarth" onClick={pickImage}></div>
      <div className="earth">
        <img src={earth} alt="earth" />
      </div>
      <div className="orbit path1">
        <img className="satellite" src={satellite[0]?.imageUrl || react} alt="orbit" />
      </div>
      <div className="orbit path2">
        <img className="satellite" src={satellite[1]?.imageUrl || git} alt="orbit" />
      </div>
      <div className="orbit path3">
        <img className="satellite" src={satellite[2]?.imageUrl || css} alt="orbit" />
      </div>
    </div>
  );
};

export default Planet;
