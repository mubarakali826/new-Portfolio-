import React, { useContext } from "react";
import "./Project.scss";
import { whatIDid } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import CustomCarousel from "./CustomCarousel";
import TextPressure from "../../blocks/TextAnimations/TextPressure/TextPressure";

export default function Projects() {
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!whatIDid.display) return null;

  return (
    <Fade bottom duration={2000} distance="0px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">
          <div
                style={{
                  position: "relative",
                  height: "200px",
                  marginBottom: "50px"
                }}
              >
                <TextPressure
                  text={whatIDid.title}
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="#ffffff"
                  strokeColor="#ff0000"
                  minFontSize={36}
                />
              </div>{" "}
          </h1>
          <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
            {whatIDid.subtitle}
          </p>

          <div className="projects-container">
            {whatIDid.projects.map((project, i) => {
              const images = [project.image, project.image1, project.image2].filter(Boolean);

              return (
                <div
                  key={i}
                  className={isDark ? "dark-mode project-card project-card-dark" : "project-card project-card-light"}
                >
                  {images.length > 0 && <CustomCarousel images={images} interval={4000} />}

                  <div className="project-detail">
                    <h5 className={isDark ? "dark-mode card-title" : "card-title"}>{project.projectName}</h5>
                    <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>{project.projectDesc}</p>

                    {project.footerLink && (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => (
                          <span
                            key={i}
                            className={isDark ? "dark-mode project-tag" : "project-tag"}
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
