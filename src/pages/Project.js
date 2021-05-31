import React from "react";
import projects from "../utils/project";
import ProjectCard from "../components/ProjectCard";

function Project() {
    return (
        <div className="container-md">
            <div className="row justify-content-center">
               {projects.map((card,index)=> { 
                   return <ProjectCard
                        key = {index}
                        title = {card.title}
                        description = {card.description}
                        img = {card.img}
                        appLink = {card.appLink}
                        gitHubLink = {card.gitHubLink}
                   />
               })}
            </div>
        </div>
    )
}

export default Project
