import React from "react";
import Navigation from "./Navigation";
import "../styles/nav.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      {/* this is the header as a whole */}
      <header className="d-flex justify-content-between">
        <h1 className="align-self-start">John Koufalas</h1>
        {/* navigation component governs the nav bar */}
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <section className="block-background"></section>
    </div>
  );
}
