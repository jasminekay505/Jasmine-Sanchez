import React from "react";
import Contact from "../components/Contact";
import AboutMe from "../components/AboutMe"

function About() {
    return (
        <div className="container-md">
            <div className = "row">
                <AboutMe />
                <Contact />
            </div>
        </div>

    )
}

export default About