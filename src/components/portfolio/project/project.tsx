import "./project.scss"
import "./project_mobile.scss"

// 輪播
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import type { ProfileItem, ProfileMediaItem } from "../../../lib/constant"

interface ProjectProps {
  project: ProfileItem
  video: ProfileMediaItem[]
  photo: ProfileMediaItem[]
}

const Project = ({ project, video, photo }: ProjectProps) => {
  const media: ProfileMediaItem[] = photo.concat(video)

  return (
    <section id="projectContainer">
      <section className="carouselContainer">
        <Carousel showThumbs={false} emulateTouch={true} showStatus={false}>
          {media.map((item, index) => {
            if (item.type === "image") {
              return (
                <img key={index} src={item.src} loading="lazy" alt="photo" />
              )
            }

            return (
              <video
                key={index}
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            )
          })}
        </Carousel>
      </section>

      <section className="paragraph">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <h4>Features</h4>
        <ul>
          {project.feature.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        <h4>Tech</h4>
        <ul>
          {project.tech.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        <h4>{project.update.length === 0 ? "" : "Update"}</h4>
        <ul>
          {project.update.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        {/* 有連結才顯示 */}
        <h4>Url</h4>
        {project.url || project.github ? (
          <ul>
            {project.url && (
              <li className="urlItem">
                網站連結：
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  data-hovertext={project.url}
                >
                  Link
                </a>
              </li>
            )}
            {project.github && (
              <li className="urlItem">
                Github：
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-hovertext={project.github}
                >
                  Link
                </a>
              </li>
            )}
          </ul>
        ) : (
          <p
            style={{
              fontSize: "0.8em",
              paddingLeft: "20px",
              margin: "5px 0",
              opacity: 0.8,
            }}
          >
            未發布或已停止服務
          </p>
        )}
      </section>
    </section>
  )
}

export default Project
