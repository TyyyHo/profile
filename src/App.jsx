import { useEffect, useState } from "react";
import "./App.scss";
import "./theme.scss";

// components
import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home";
import Effect from "./components/effect/effect";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import ToTop from "./components/toTop/toTop";
import ThemeSwitcher from "./components/themeSwitcher/themeSwitcher";
import Loading from "./components/loading/loading";

function App() {
  const [theme, setTheme] = useState(true);
  const [onTop, setOnTop] = useState(true);
  const [finish, setLoading] = useState(false);

  (function lazyLoad() {
    //6秒後進入主頁面
    window.onload = () => {
      setTimeout(() => {
        setLoading(true);
      }, 4000);
    };

    // edge/safari/無痕模式 無法完成componet內的window.onload，
    setTimeout(() => {
      setLoading(true);
    }, 8000);
  })();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY < 300 ? setOnTop(true) : setOnTop(false);
    });
  }, [onTop]);

  return (
    <div className={`App ${theme ? "lightTheme" : "darkTheme"}`}>
      <Loading finish={finish} />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <ToTop onTop={onTop} />
      <Navigation onTop={onTop} />
      <Home />
      <Effect />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
