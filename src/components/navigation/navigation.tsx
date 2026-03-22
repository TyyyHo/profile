import "./navigation.scss";
import "./navigation_mobile.scss";

//photo
import logo from "/src/assets/img/logo/owl.webp";

interface NavigationProps {
  onTop: boolean;
  isMobile: boolean;
}

const Navigation = ({ onTop, isMobile }: NavigationProps) => {
  function jumpTo(id: string, block: ScrollLogicalPosition = "start") {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block });
  }

  function isNaviShow() {
    if (isMobile) return true;
    return onTop;
  }

  return (
    <nav id="naviContainer" className={isNaviShow() ? "show" : "notOnTop"}>
      <button className="logo" onClick={() => jumpTo("homeContainer")}>
        <img src={logo} alt="logo" />
      </button>
      <div className="btnContainer">
        <button className="option" onClick={() => jumpTo("homeContainer", "start")}>
          Home
        </button>
        <button className="option" onClick={() => jumpTo("portfolioContainer", "start")}>
          Project
        </button>
        <button className="option" onClick={() => jumpTo("contactContainer", "start")}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
