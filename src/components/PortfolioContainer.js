import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
//setting up imports and components

export default function PortfolioContainer() {
  //sets up the state for the current page
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
      {/* We are passing the current page state and the handler to change it*/}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* This runs the method where it uses the state variable to render the page */}
      {renderPage()}
      <Footer />
    </div>
  );
}
