import React from 'react'

const Info = () => {
  return (
    <div className='about_info grid'>
      <div className="about_box">
      <i class='bx bx-award about_icon'></i>
      <h3 className="h3 about_title">Education</h3>
      <span className="about_subtitle">UBC Bachelors of Science
      <br></br>UOT Full Stack Coding Certificate
      </span>
      </div>
      <div className="about_box">
      <i class='bx bx-briefcase about_icon' ></i>
      <h3 className="h3 about_title">Completed</h3>
      <span className="about_subtitle">20 + Projects</span>
      </div>
    </div>
  )
}

export default Info