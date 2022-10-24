import React from "react";
import Image from "./Image";
import Content from "./Content";

import "../../styles/portfolio.css";

const projectData = require("../../data/data.json");

export default function Portfolio() {
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
              <Image imageLocation={data.demo_image} />
              <Content
                projectName={data.project_name}
                gitHubLink={data.github_link}
                deployedLink={data.deployed_link}
                skills={data.skills}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
