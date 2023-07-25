import React from "react";
import CV from "../../assets/resume.pdf";
const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href={CV} className="button button--flex">
        Download CV
      </a>
    </section>
  );
};

export default Resume;
