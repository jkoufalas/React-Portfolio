import React from "react";
import "../styles/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import all items and also all the fontawesome icons
export default function Footer() {
  return (
    <div>
      <footer>
        <a href="https://github.com/jkoufalas">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        &nbsp; &nbsp;
        <a href="https://www.linkedin.com/in/john-koufalas/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </footer>
    </div>
  );
}
