import React from "react";
import "./portfolio.scss";
import { projectData } from "./projectData";

import Project from "./project/project";
import Title from "../title/bouncy/title"

const Portfolio = () => {
  return (
    <article id="portfolioContainer" className="section">
      <Title title={"過往專案"}/>
      <Project project={projectData.personalWebsite} />
      <Project project={projectData.udb} />
      <Project project={projectData["ud-simulator"]} />
    </article>
  );
};

export default Portfolio;
