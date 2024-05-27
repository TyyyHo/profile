import { useEffect, useState } from "react";
import "./App.scss";
import "./theme.scss";
import { isMobileDevice } from "./components/hint/isMobile/isMobile";

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
  const [theme, setTheme] = useState("lightTheme");
  const [onTop, setOnTop] = useState(true);
  const [finish, setLoading] = useState(false);
  const isMobile = isMobileDevice();

  (function lazyLoad() {
    //6秒後進入主頁面
    window.onload = () => {
      setTimeout(() => {
        console.log("load");
        setLoading(true);
      }, 4000);
    };

    // edge/safari/無痕模式 無法完成componet內的window.onload，
    setTimeout(() => {
      setLoading(true);
    }, 8000);
  })();

  //若曾造訪，沿用上次使用的佈景主題；若初次造訪則使用lightTheme
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "lightTheme");
  }, []);

  //監測toTop是否顯示
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY < 300 ? setOnTop(true) : setOnTop(false);
    });
  }, [onTop]);

  return (
    <div className={`App ${theme}`}>
      <Loading finish={finish} />
      {/* <div style={{ width: "500px", height: "500px", backgroundColor: "red" }}></div> */}
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <ToTop onTop={onTop} />
      <Navigation onTop={onTop} isMobile={isMobile} />
      <Home />
      <Effect isMobile={isMobile} />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
