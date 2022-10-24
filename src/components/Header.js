import React from "react";
import NavTabs from "./NavTabs";
import "../styles/nav.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <header className="d-flex justify-content-between">
        <h1 className="align-self-start">John Koufalas</h1>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      {/*<section className="block-background"></section>*/}
      <section className="block-background"></section>
    </div>
  );
}
