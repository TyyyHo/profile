import React from "react";
import "./project.scss";

// 輪播
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import myimg from "../../../assets/img/portfolio/udb/1.webp";

const Project = ({ project }) => {
  return (
    <section id="projectContainer">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <h4>Features</h4>
      <ul>
        {project.feature.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <h4>Tech</h4>
      <ul>
        {project.tech.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <h4>Update</h4>
      <ul>
        {project.update.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <Carousel
        className="carousel"
        swipeScrollTolerance={80}
        showThumbs={false}
        emulateTouch={true}
        showStatus={false}
      >
        {project.image.map((item, index) => {
          return <img  key={index} src={`./src/assets/img/portfolio/${item}`} loading="lazy" alt="photo" />;
        })}
      </Carousel>
    </section>
  );
};

export default Project;
