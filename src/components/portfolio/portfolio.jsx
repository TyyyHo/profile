import React from "react";
import "./portfolio.scss";
import { profileList } from "../../lib/constant";
import { projectData } from "./projectData";

import Project from "./project/project";
import Title from "../title/bouncy/title";

const Portfolio = () => {
  return (
    <article id="portfolioContainer" className="section">
      <Title title={"專案"} />
      {profileList.map((item) => {
        return <Project key={item.id} project={item} photo={item.image} video={item.video} />;
      })}
    </article>
  );
};

export default Portfolio;
