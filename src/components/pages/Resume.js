import React from "react";
import "../../styles/resume.css";

export default function Resume() {
  return (
    <div className="container">
      {/* this page just holds the resume content */}
      <span className="heading">Resume</span>
      <br />
      <br />
      <span className="resume">
        Download my&nbsp;
        <a
          className="download-link"
          href="/React-Portfolio/Documents/Resume.pdf"
          download
        >
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
  );
}
