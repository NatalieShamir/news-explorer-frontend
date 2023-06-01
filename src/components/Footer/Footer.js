import React from "react";
import { Link } from "react-router-dom";
import GitHubLogo from "../../images/github-min.svg";
import FacebookLogo from "../../images/facebook-min.svg";

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
                &#169; {new Date().getFullYear()}Supersite, Powered by News API</p>
            <Link to={"/"} className="footer__home">
                Home
            </Link>
            <button onClick={handlePracticumClick}>Practicum</button>
            <button onClick={handleGitHubClick}><img src={GitHubLogo} /></button>
            <button onClick={handleFacebookClick}><img src={FacebookLogo} /></button>
        </footer>
    );
}
