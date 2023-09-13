import React from "react";
import Info from "./Info";
import AboutMePic from "../../../assets/AboutMePic.jpeg";
import CV from "../../../assets/resume.pdf";
import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>

      <div className="about_container container grid">
        <img src={AboutMePic} alt="" className="about_img" />
        <div className="about_data">
          <Info />
          <p className="about_description">
            I'm a Full Stack Developer eager to learn new technologies and whip
            up projects that solve real-world problems.
          </p>
          <p className="about_description">
            When I'm not summoning code spells, you'll find me exploring the
            great outdoors with my trusty sidekick, Echo the doggo. And for the
            record, I also enjoy hitting the gym from time to time to work up a
            sweat.
          </p>
          <p className="about_description">
            Oh, and in case you were wondering, my caffeine intake might just be
            the eighth wonder of the world. ☕
          </p>
          <a href={CV} className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
