import React, { useRef } from "react";
import "./themeSwitcher.scss";

import { ReactComponent as Circle } from "/src/assets/img/themeSwitcher/switcher.svg";
import { ReactComponent as Tick } from "/src/assets/img/themeSwitcher/tick.svg";

const ThemeSwitcher = ({ theme, setTheme }) => {
  const firstArrive = useRef(true);

  function triggerAnimation() {
    return theme ? "toLight" : "toDark"
  }

  return (
    <div id="themeSwitcher" onClick={() => { setTheme(!theme); firstArrive.current = false; }}>
      <div className={`${firstArrive.current ? "" : triggerAnimation()}`}>
        <Circle />
      </div>
      <Tick />
    </div>
  );
};

export default ThemeSwitcher;
