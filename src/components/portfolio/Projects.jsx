import React from "react";
import { projectsData } from "./Work";
import { projectsNav } from "./Work";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div>
      <div className="project_filters">
        {projectsNav.map((item, index) => {
          return (
            <span className="project_item" key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="project_container container grid">
        {projectsData.map((item)=>{
          return <ProjectItems item={item} key={item.id}/>
        })}
      </div>
    </div>
  );
};

export default Projects;
