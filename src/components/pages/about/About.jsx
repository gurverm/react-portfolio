import React from 'react'
import Info from './Info'
import DisplayPic from '../../../assets/displayPic.jpg'
import './about.css'

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section_title'>About Me</h2>
        <span className='section_subtitle'></span>

        <div className='about_data'>
            <img src={DisplayPic} alt="" className='about_img' />

            <Info/> 
            <p className="about_description">
                Fullstack Web Developer eager to learn new technologies and build
                projects that solve real world problems. I have experience
                working with JavaScript, React, Node.js, Express, SQL, and
                MongoDB. I am a quick learner and a team player who
                is passionate about programming and building projects that
                provide a great user experience. 
            </p>
        </div>
    </section>
    )
}

export default About