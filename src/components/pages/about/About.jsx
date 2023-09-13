import React from 'react'
import Info from './Info'
import AboutMePic from '../../../assets/AboutMePic.jpeg'
import CV from "../../../assets/resume.pdf"
import './about.css'

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section_title'>About Me</h2>
        <span className='section_subtitle'>My Introduction</span>

        <div className='about_data about_container container grid'>
            <img src={AboutMePic} alt="" className='about_img' />

            <Info/> 
            <p className="about_description">
                Full Stack Developer eager to learn new technologies and build
                projects that solve real world problems. I have experience
                working with JavaScript, React, Node.js, Express, SQL, and
                MongoDB. I am a quick learner and a team player who
                is passionate about programming and building projects that
                provide a great user experience. 
            </p>
            <a href={CV} className="button button--flex">
                Download CV
            </a>
        </div>
    </section>
    )
}

export default About