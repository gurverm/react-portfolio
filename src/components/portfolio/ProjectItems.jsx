import React from 'react'

const ProjectItems = ({item}) => {
  return (
    <div className="project_card" key={item.id}>
        <img src={item.image} alt="" className='project_img'/>
        <h3 className="project_title">{item.title}</h3>
        <a href="#" className="work_button">
            Demo <i className="bx bx-right-arrow-alt work_button"></i>
        </a>
    </div>
  )
}

export default ProjectItems