import React from "react";
import Navigation from "./Navigation";
import "../styles/nav.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <header className="d-flex justify-content-between">
        <h1 className="align-self-start">John Koufalas</h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <section className="block-background"></section>
    </div>
  );
}
