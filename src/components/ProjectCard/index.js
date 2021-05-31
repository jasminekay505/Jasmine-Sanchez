import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
        <div className="card" style="width:40; margin: 1rem;">
            <img src={props.img} alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text"> {props.description}</p>
                <a href={props.appLink} target="_blank" className="btn btn-dark">Link to Application</a>
                <a href={props.gitHubLink} target="_blank" className="btn btn-dark">Link to Repository</a>
            </div>
        </div>
    )
}

export default ProjectCard;