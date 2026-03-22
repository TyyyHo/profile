import "./App.scss";
import "./theme.scss";

import React, { useEffect, useState } from "react";

import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import Loading from "./components/loading/loading";
// components
import Navigation from "./components/navigation/navigation";
import Portfolio from "./components/portfolio/portfolio";
import ThemeSwitcher from "./components/themeSwitcher/themeSwitcher";
import ToTop from "./components/toTop/toTop";
import { isMobileDevice } from "./components/hint/isMobile/isMobile";
import pkg from "../package.json";

type Theme = "lightTheme" | "darkTheme";

export default function App() {
  const [theme, setTheme] = useState<Theme>("lightTheme");
  const [onTop, setOnTop] = useState(true);
  const [finish, setLoading] = useState(false);
  const isMobile = isMobileDevice();

  // 首次載入的 loading 控制
  useEffect(() => {
    //6秒後進入主頁面
    window.onload = () => {
      setTimeout(() => {
        setLoading(true);
      }, 4000);
    };

    // edge/safari/無痕模式 無法完成componet內的window.onload，
    const timeoutId = window.setTimeout(() => {
      setLoading(true);
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  //若曾造訪，沿用上次使用的佈景主題；若初次造訪則使用lightTheme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "lightTheme" || savedTheme === "darkTheme") {
      setTheme(savedTheme);
    }
  }, []);

  //監測toTop是否顯示
  useEffect(() => {
    const onScroll = () => {
      window.scrollY < 300 ? setOnTop(true) : setOnTop(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Loading finish={finish} />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <ToTop onTop={onTop} />
      <Navigation onTop={onTop} isMobile={isMobile} />
      <Home />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <p>Copyright © 2025</p>
      <p>v{pkg.version}</p>
    </footer>
  );
}
