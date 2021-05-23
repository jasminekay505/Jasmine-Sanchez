import React from "react";
import "./style.css";
import headshot from "../../assets/headshot.jpg"

function Header() {
    return (
        <div className="jumbtron text-center">
            <h1 className="display-4">
                JASMINE SANCHEZ
            </h1>
            <img className="headshot" src={headshot} />
            <p className="lead">Mechanical Engineer | Software Engineer</p>
        </div>
    )
}

export default Header;