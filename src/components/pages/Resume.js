import React from "react";
import "../../styles/resume.css";
import { motion } from "framer-motion";

export default function Resume() {
  const locationResume = process.env.PUBLIC_URL + "/Documents/Resume.pdf";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="pageContainer">
        <div className="container">
          {/* this page just holds the resume content */}
          <span className="heading">Resume</span>
          <br />
          <br />
          <span className="resume">
            Download my&nbsp;
            <a className="download-link" href={locationResume} download>
              Resume
            </a>
          </span>
          <br />
          <br />
          <h3> Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
          </ul>
          <br />
          <h3> Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
          </ul>
          <br />
          <br />
        </div>
      </div>
    </motion.div>
  );
}
