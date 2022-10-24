import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Content({
  projectName,
  gitHubLink,
  deployedLink,
  skills,
}) {
  /* projectName={data.project_name}
                gitHubLink={data.github_link}
                deployedLink={data.project_name}
                skills={data.skills} */
  return (
    <div className="middle">
      <div className="projectTitle">
        <a href="https://mysterious-journey-75550.herokuapp.com/">
          {projectName} &nbsp; &nbsp;
        </a>
        <span className="gitLink">
          <a href="https://github.com/jkoufalas/codeIt">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
        <div className="projectSkills">
          "NodeJS", "ExpressJS", "Sequelizer (ORM)", "HandlebarsJS", "MySQL",
          "Nodemailer", "Tailwind (CSS)", "BCrypt"
        </div>
      </div>
    </div>
  );
}
