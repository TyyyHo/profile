import React, { useRef } from "react";
import "./themeSwitcher.scss";
import "./themeSwitcher_mobile.scss";

import { ReactComponent as Circle } from "/src/assets/img/themeSwitcher/switcher.svg";
import { ReactComponent as Tick } from "/src/assets/img/themeSwitcher/tick.svg";

const ThemeSwitcher = ({ theme, setTheme }) => {

  function triggerSwitch() {
    let nextTheme = theme === "lightTheme" ? "darkTheme" : "lightTheme";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }

  function triggerAnimation() {
      console.log(theme);
      return theme === "lightTheme" ? "toLight" : "toDark";
  }

  return (
    <div id="themeSwitcher" onClick={triggerSwitch}>
      <div className={`circle ${triggerAnimation()}`}>
        <Circle />
      </div>
      <Tick />
    </div>
  );
};

export default ThemeSwitcher;
