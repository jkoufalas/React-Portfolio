import React from "react";
import Image from "./Image";
import Content from "./Content";
import { motion } from "framer-motion";

import "../../styles/portfolio.css";

const projectData = require("../../data/data.json");
// get all projects from json file
export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pageContainer">
        {/* this governs the whole portfolio page */}
        <span className="heading">Portfolio</span>
        <br />
        <br />
        <div className="row d-flex flex-row portfolio" id="portfolioContainer">
          {/* flex for the group of projects */}
          {projectData.map((data) => (
            //map each project and create an entry for each
            <figure
              className="gallery_product col-12 col-md-6 justify-content-center"
              key={data.project_name}
            >
              {/* implement image */}
              <Image imageLocation={data.demo_image} />
              {/* sets up the hover content */}
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
    </motion.div>
  );
}
