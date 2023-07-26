import React, { useState } from "react";
import NavTabs from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Resume from "./pages/resume/Resume"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing the functionality of this method
  // this method if used to check what the value of currentPage is, which in turn renders the required page
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
        return <Resume />;
    }
    
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* handlePageChange and currentPage are being passed as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calling the method created above */}
      {renderPage()}
    </div>
    <div>
        <Footer />
    </div>
    </div>
  );
}