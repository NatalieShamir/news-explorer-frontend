import React from "react";
import { Link } from "react-router-dom";
import GitHubLogo from "../../images/github-min.svg";
import FacebookLogo from "../../images/facebook-min.svg";
import "../Footer/Footer.css"

export default function Footer() {
    const handlePracticumClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    const handleGitHubClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    const handleFacebookClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <footer className="footer">
            <p className="footer__copyright">
                &#169; {new Date().getFullYear()} Supersite, Powered by News API</p>
            <div className="footer__container">
                <div className="footer__container-word-items">
                    <Link to={"/"} className="footer__home">
                        Home
                    </Link>
                    <button className="footer__button-practicum" onClick={() => handlePracticumClick('https://tripleten.com/')}>
                        Practicum
                    </button>
                </div>
                <div className="footer__container-icon-items">
                    <button className="footer__button-github" onClick={() => handleGitHubClick('https://github.com/')}>
                        <img src={GitHubLogo} alt="GitHub logo" />
                    </button>
                    <button className="footer__button-facebook" onClick={() => handleFacebookClick('https://www.facebook.com/')}>
                        <img src={FacebookLogo} alt="Facebook logo" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
