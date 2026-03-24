import "./themeSwitcher.css"
import "./themeSwitcher_mobile.css"

import { ReactComponent as Circle } from "/src/assets/img/themeSwitcher/switcher.svg"
import { ReactComponent as Tick } from "/src/assets/img/themeSwitcher/tick.svg"

interface ThemeSwitcherProps {
  theme: "lightTheme" | "darkTheme"
  setTheme: React.Dispatch<React.SetStateAction<"lightTheme" | "darkTheme">>
}

const ThemeSwitcher = ({ theme, setTheme }: ThemeSwitcherProps) => {
  function triggerSwitch() {
    const nextTheme = theme === "lightTheme" ? "darkTheme" : "lightTheme"
    setTheme(nextTheme)
    localStorage.setItem("theme", nextTheme)
  }

  function triggerAnimation() {
    return theme === "lightTheme" ? "toLight" : "toDark"
  }

  return (
    <div id="themeSwitcher" onClick={triggerSwitch}>
      <div className={`circle ${triggerAnimation()}`}>
        <Circle />
      </div>
      <Tick />
    </div>
  )
}

export default ThemeSwitcher
