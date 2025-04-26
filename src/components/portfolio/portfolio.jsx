import React from "react";
import "./portfolio.scss";
import { profileList } from "../../lib/constant";
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
      <Title title={"專案"} />
      {profileList.map((item) => {
        return <Project key={item.id} project={item} photo={item.image.map((img) => img)} />;
      })}
    </article>
  );
};

export default Portfolio;
