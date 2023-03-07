import "./navigation.scss";
import "./navigation_mobile.scss";

//photo
import logo from "/src/assets/img/logo/owl.webp";

const Navigation = ({ onTop, isMobile }) => {
  function jumpTo(id, block) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: block });
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
        <button className="option" onClick={() => jumpTo("effect", "start")}>
          Style
        </button>
        <button
          className="option"
          onClick={() => jumpTo("portfolioContainer", "start")}
        >
          Project
        </button>
        <button
          className="option"
          onClick={() => jumpTo("contactContainer", "start")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
