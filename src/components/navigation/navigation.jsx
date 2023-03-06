import "./navigation.scss";

const Navigation = ({ onTop }) => {
  function jumpTo(id, block) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: block });
  }

  return (
    <nav id="naviContainer" className={!onTop ? "notOnTop" : ""}>
      <button className="logo" onClick={() => jumpTo("homeContainer")}>
        <img src="/src/assets/img/logo/owl.webp" alt="logo" />
      </button>
      <div className="btnContainer">
        <button className="option" onClick={() => jumpTo("effect", "start")}>Style</button>
        <button className="option" onClick={() => jumpTo("portfolioContainer", "start")}>Project</button>
        <button className="option" onClick={() => jumpTo("contactContainer", "start")}>Contact</button>
      </div>
    </nav>
  );
};

export default Navigation;
