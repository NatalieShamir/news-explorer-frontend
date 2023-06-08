import React from "react";
import { Link } from "react-router-dom";
import GitHubLogo from "../../images/github-min.svg";
import FacebookLogo from "../../images/facebook-min.svg";
import "../Footer/Footer.css"

export default function Footer() {
    const handlePracticumClick = () => {
        window.location.href = 'https://practicum.com/en-isr/';
    };
    const handleGitHubClick = () => {
        window.location.href = 'https://github.com/';
    };
    const handleFacebookClick = () => {
        window.location.href = 'https://www.facebook.com/';
    };
    return (
        <footer className="footer">
            <p className="footer__copyright">
                &#169; {new Date().getFullYear()} Supersite, Powered by News API</p>
            <div className="footer__container">
                <Link to={"/"} className="footer__home">
                    Home
                </Link>
                <button className="footer__button-practicum" onClick={handlePracticumClick}>Practicum</button>
                <button className="footer__button-github" onClick={handleGitHubClick}><img src={GitHubLogo} alt="GitHub logo" /></button>
                <button className="footer__button-facebook" onClick={handleFacebookClick}><img src={FacebookLogo} alt="Facebook logo" /></button>
            </div>
        </footer>
    );
}
