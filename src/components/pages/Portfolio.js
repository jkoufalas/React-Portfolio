import React from "react";
import Image from "./Image";
import Content from "./Content";

import "../../styles/portfolio.css";

const projectData = require("../../data/data.json");

export default function Portfolio() {
  return (
    <div className="container">
      <span className="heading">Portfolio</span>
      <br />
      <br />
      <div className="row d-flex flex-row">
        {projectData.map((data) => (
          <figure
            className="gallery_product col-2 filter hdpe"
            key={data.project_name}
          >
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
  );
}
