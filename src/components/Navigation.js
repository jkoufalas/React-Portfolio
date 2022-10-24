import React from "react";
import $ from "jquery";
import "../styles/nav.css";
import "../styles/hamburgerIcon.css";

function NavTabs({ currentPage, handlePageChange }) {
  $(document).ready(function () {
    $(".hamburger-button").on("click", function () {
      $(".animated-icon").toggleClass("open");
      $("#navbarNavDropdown").toggleClass("active");
    });
  });
  //this governs when the burger bar is pressed

  return (
    <div className="container">
      {/* sets up the navbar */}
      <nav className="navbar navbar-expand-md navbar-light w-100" id="neubar">
        <div
          className="container-fluid d-flex justify-content-end"
          id="navOption"
        >
          {/* sets up the burger button */}
          <button
            className="navbar-toggler hamburger-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* this is the animated icon where all the spans represent a different bar to animate */}
            <div className="animated-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* the main nav area */}
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav" id="navList">
              <li className="nav-item">
                {/* about button */}
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                {/* portfolio button */}
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  className={
                    currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                {/* contact button */}
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                {/* resume button */}
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  className={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
