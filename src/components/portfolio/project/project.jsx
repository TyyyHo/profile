import React from "react";
import "./project.scss";

// 輪播
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Project = ({ project }) => {
  return (
    <section id="projectContainer">
      <section className="carouselContainer">
        <Carousel
          swipeScrollTolerance={80}
          showThumbs={false}
          emulateTouch={true}
          showStatus={false}
        >
          {project.image.map((item, index) => {
            return <img key={index} src={`./src/assets/img/portfolio/${item}`} loading="lazy" alt="photo" />;
          })}
        </Carousel>
      </section>

      <section className="paragraph">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <h4>Features</h4>
        <ul>
          {project.feature.map((item, index) => {
            return <li key={index}>-  {item}</li>;
          })}
        </ul>

        <h4>Tech</h4>
        <ul>
          {project.tech.map((item, index) => {
            return <li key={index}>-  {item}</li>;
          })}
        </ul>

        <h4>{project.update.length === 0 ? "" : "Update"}</h4>
        <ul>
          {project.update.map((item, index) => {
            return <li key={index}>-  {item}</li>;
          })}
        </ul>

        <h4>Url</h4>
        <ul>
          <li className="urlItem">網站連結： <a href={project.url} target="_blank">{project.url}</a></li>
          <li className="urlItem">Github： <a href={project.github} target="_blank">{project.github}</a></li>
        </ul>
      </section>
    </section>
  );
};

export default Project;
