import "./navigation.scss";
import logo from "../../assets/img/logo/owl.webp";

const Navigation = () => {
  return (
    <div id="naviContainer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="btnContainer">
        <button className="option">Style</button>
        <button className="option">Skill</button>
        <button className="option">Contact</button>
      </div>
    </div>
  );
};

export default Navigation;
