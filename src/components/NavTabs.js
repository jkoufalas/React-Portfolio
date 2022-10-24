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

  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light w-100" id="neubar">
        <div
          className="container-fluid d-flex justify-content-end"
          id="navOption"
        >
          <button
            className="navbar-toggler hamburger-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="animated-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="nav" id="navList">
              <li className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  //  TODO: Add a comment explaining what this logic is doing

                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  //  TODO: Add a comment explaining what this logic is doing

                  className={
                    currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  //  TODO: Add a comment explaining what this logic is doing

                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#resume"
                  //  TODO: Add a comment explaining what this logic is doing

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
