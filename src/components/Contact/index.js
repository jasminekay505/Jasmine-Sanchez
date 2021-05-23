import React from "react";
import "./style.css";

function Contact() {
    return (

        <div className="col-md-4">
            <h2>Contact</h2>
            <ul className="list-group">
                <a className="list-group-item list-group-item-action"><img src="https://img.icons8.com/nolan/64/email.png" class="icon" /> jasminekay505@gmail.com</a>
                <a className="list-group-item list-group-item-action"><img src="https://img.icons8.com/nolan/64/phone.png" class="icon" /> 505.681.0535</a>
                <a href="#" className="list-group-item list-group-item-action"><img src="https://img.icons8.com/nolan/64/open-resume.png" class="icon" /> Resume</a>
                <a href="https://github.com/jasminekay505" target="_blank" className="list-group-item list-group-item-action"><img src="https://img.icons8.com/nolan/64/github.png" class="icon" /> GitHub</a>
                <a href="https://www.linkedin.com/in/jasmine-sanchez-9b94098b/" target="_blank" className="list-group-item list-group-item-action"><img src="https://img.icons8.com/nolan/64/linkedin.png" class="icon" /> LinkedIn</a>
            </ul>
        </div>

    )
}
export default Contact;