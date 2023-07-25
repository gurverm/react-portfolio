import React from 'react';
import './portfolio.css'
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section className='work section' id='portfolio'>
      <h2 className='section_title'>Portfolio</h2>
      <span className="section_subtitle">My Projects
      </span>
      <Projects/>
      
    </section>
  );
};

export default Portfolio;