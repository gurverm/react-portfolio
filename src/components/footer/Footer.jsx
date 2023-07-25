import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Gurveer</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#Resume" className="footer_link">
              Resume
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.linkedin.com/"
            className="home_social-icon"
            // target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/gurverm"
            className="home_social-icon"
            // target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer_copy">Gurveer Madurai All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default footer;
