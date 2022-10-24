import React, { useState } from "react";
import Header from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // this changes the root render based on the page being shown
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props 
      we are passing the current page state and the handler to change it*/}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line
      It runs the method where it uses the stae variable to render the page */}
      {renderPage()}
    </div>
  );
}
