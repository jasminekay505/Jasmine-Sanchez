import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand mb-0 h1" to="/">JASMINE SANCHEZ</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className=" nav navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link active" to="/">ABOUT</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/projects">PROJECTS</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;