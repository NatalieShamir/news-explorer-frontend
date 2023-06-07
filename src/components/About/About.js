import React from "react";
import aboutImage from "../../images/about.jpg";
import "../About/About.css";

function About() {
    return (
        <div className="about">
            <div className="about__container">
                <h3 className="about__heading">About the author</h3>
                <p className="about__text">This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.
                    You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
            </div>
            <img className="about__image" src={aboutImage} alt="The project's author"></img>
        </div>
    )
}

export default About;