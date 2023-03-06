import React, { useState } from "react";
import "./loading.scss";

const Loading = ({ finish }) => {

  return (
    <div className={`loading ${finish ? "invisible" : "visible"}`}>
      {/* <img loading="eager" src={ladingImg} alt="Loading" /> */}
      <p>Loading</p>
      <div className="loadingBar">
        <div className="basic"></div>
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default Loading;
