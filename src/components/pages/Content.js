import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//setup imports

export default function Content({
  projectName,
  gitHubLink,
  deployedLink,
  skills,
}) {
  return (
    <div className="middle">
      {/* this is what highlights when the user hovers over the project */}
      <div className="projectTitle">
        <a className="projectLink" href={deployedLink}>
          {projectName} &nbsp; &nbsp;
        </a>
        <span className="gitLink">
          <a href={gitHubLink}>
            {/* uses fontawesome component to implement icon */}
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
        <div className="projectSkills">{skills.join(", ")}</div>
      </div>
    </div>
  );
}
