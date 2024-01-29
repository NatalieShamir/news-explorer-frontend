import React from "react";
import aboutImage from "../../images/about.jpg";
import "../About/About.css";

function About() {
    return (
        <section className="about">
            <div className="about__container">
                <h3 className="about__heading">About the author</h3>
                <p className="about__text">Hi, I'm Natalie Shamir, a web developer. I recently completed Triple Ten's web development program, and am currently working on completing my final project. During my time with Triple Ten I acquired knowledge and skills in CSS, Responsive Design and MERN Stack. I am eager to continue developing my skills further and showcasing them in the professional field.  </p>
            </div>
            <img className="about__image" src={aboutImage} alt="The project's author"></img>
        </section>
    )
}

export default About;