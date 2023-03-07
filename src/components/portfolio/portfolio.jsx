import React from "react";
import "./portfolio.scss";
import { projectData } from "./projectData";

import Project from "./project/project";
import Title from "../title/bouncy/title";

//photo
import web1 from "/src/assets/img/portfolio/personal_web/1.webp";
import web2 from "/src/assets/img/portfolio/personal_web/2.webp";
import web3 from "/src/assets/img/portfolio/personal_web/3.webp";
import udb1 from "/src/assets/img/portfolio/udb/1.webp";
import udb2 from "/src/assets/img/portfolio/udb/2.webp";
import udb3 from "/src/assets/img/portfolio/udb/3.webp";
import simulator1 from "/src/assets/img/portfolio/ud-simulator/1.webp";
import simulator2 from "/src/assets/img/portfolio/ud-simulator/2.webp";
import simulator3 from "/src/assets/img/portfolio/ud-simulator/3.webp";

const Portfolio = () => {
  return (
    <article id="portfolioContainer" className="section">
      <Title title={"過往專案"} />
      <Project project={projectData.personalWeb} photo={[web1, web2, web3]} />
      <Project project={projectData.udb} photo={[udb1, udb2, udb3]} />
      <Project project={projectData["ud-simulator"]} photo={[simulator1, simulator2, simulator3]} />
    </article>
  );
};

export default Portfolio;
