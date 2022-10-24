import React from "react";
import Image from "./Image";
import Content from "./Content";

import "../../styles/portfolio.css";

const projectData = require("../../data/data.json");

export default function Portfolio() {
  /*   const styles = {
    heading: {
      backgroundImage: `url("../../Images/codeIt.png")`,
      backgroundSize: 100,
    },
  }; */

  return (
    <div>
      <h1>Portfolio Page</h1>

      <div class="container">
        <div class="row">
          <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>

          <div align="center">
            <button class="btn btn-default filter-button" data-filter="all">
              All
            </button>
            <button class="btn btn-default filter-button" data-filter="hdpe">
              HDPE Pipes
            </button>
            <button
              class="btn btn-default filter-button"
              data-filter="sprinkle"
            >
              Sprinkle Pipes
            </button>
            <button class="btn btn-default filter-button" data-filter="spray">
              Spray Nozzle
            </button>
            <button
              class="btn btn-default filter-button"
              data-filter="irrigation"
            >
              Irrigation Pipes
            </button>
          </div>
          <br />
        </div>
        <div className="row d-flex flex-row">
          {projectData.map((data) => (
            <figure className="gallery_product col-2 filter hdpe">
              <Image imageLocation={projectData[0].demo_image} />
              <Content
                projectName={data.project_name}
                gitHubLink={data.github_link}
                deployedLink={data.project_name}
                skills={data.skills}
              />
            </figure>
          ))}
          {/* < figure className="gallery_product col-2 filter hdpe">
            <Image imageLocation={projectData[0].demo_image} />
            <Content
              projectName={data.project_name}
              gitHubLink={data.github_link}
              deployedLink={data.project_name}
              skills={data.skills}
            /> */}
          {/* <div className="middle">
              <div className="projectTitle">
                <a href="https://mysterious-journey-75550.herokuapp.com/">
                  CodeIt &nbsp; &nbsp;
                </a>
                <span className="gitLink">
                  <a href="https://github.com/jkoufalas/codeIt">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </span>
                <div className="projectSkills">
                  "NodeJS", "ExpressJS", "Sequelizer (ORM)", "HandlebarsJS",
                  "MySQL", "Nodemailer", "Tailwind (CSS)", "BCrypt"
                </div>
              </div>
            </div> */}
          {/* </figure> */}
        </div>
      </div>
    </div>
  );
}
