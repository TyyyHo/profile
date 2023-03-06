import React from "react";
import "./clickHint.scss";

// import { ReactComponent as ClickImg } from "../../../assets/img/hint/click.svg";
import { ReactComponent as ClickImg } from "../../../assets/img/hint/tap.svg";

const ClickHint = ({ isShow, text }) => {

  return (
    <div id="clickHint" className={!isShow ? "hide":""}>
      <div className="svgContainer">
        <ClickImg />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ClickHint;
