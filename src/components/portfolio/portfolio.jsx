import React from "react";
import "./portfolio.scss";
import { projectData } from "./projectData";

import Project from "./project/project";

//photo
// import {} from "";

const Portfolio = () => {
  return (
    <div id="portfolioContainer">
      <Project project={projectData.personalWebsite} />
      <Project project={projectData.udb} />
      <Project project={projectData["ud-simulator"]} />
    </div>
  );
};

export default Portfolio;
