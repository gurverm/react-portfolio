import React from "react";
import CV from "../../../assets/resume.pdf";
const Resume = () => {
  return (
    <section className="container">
      <h2 className="resume_subtitle">Resume</h2>
      <a href={CV} className="button button--flex">
        Download CV
      </a>
    </section>
  );
};

export default Resume;
