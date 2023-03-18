import React, { useRef } from "react";
import "./themeSwitcher.scss";
import "./themeSwitcher_mobile.scss";

import { ReactComponent as Circle } from "/src/assets/img/themeSwitcher/switcher.svg";
import { ReactComponent as Tick } from "/src/assets/img/themeSwitcher/tick.svg";

const ThemeSwitcher = ({ theme, setTheme }) => {
  const firstArrive = useRef(true);

  function triggerSwitch() {
    let nextTheme = theme === "lightTheme" ? "darkTheme" : "lightTheme";
    setTheme(nextTheme);
    firstArrive.current = false;
    localStorage.setItem("theme", nextTheme);
  }

  function triggerAnimation() {
    if (!firstArrive.current) {
      return theme === "lightTheme" ? "toDark" : "toLight";
    }
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
