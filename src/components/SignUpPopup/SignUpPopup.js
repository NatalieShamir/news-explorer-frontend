import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../SignUpPopup/SignUpPopup.css";
import RegistrationSuccessful from '../RegistrationSuccessful/RegistrationSuccessful';

function Signup({ isOpen, onClose }) {
    const [isRegistrationSuccessfulPopupOpen, setIsRegistrationSuccessfulPopupOpen] =
        React.useState(false);

    function handleSignUpClick() {
        setIsRegistrationSuccessfulPopupOpen(true);
    }

    function closeRegistrationSuccessfulPopup() {
        setIsRegistrationSuccessfulPopupOpen(false);
    }

    useEffect(() => {
        function closeByEscape(e) {
            if (e.key === "Escape") {
                closeRegistrationSuccessfulPopup();
            }
        }
        document.addEventListener("keydown", closeByEscape);
        return () => document.removeEventListener("keydown", closeByEscape);
    }, []);

    return (
        <div className={`${`signup `} ${isOpen ? "signup_open" : ""}`}>
            <div className="signup__container">
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="signup__close-button"
                />
                <form className="signup__form" >
                    <h3 className="signup__form-title">Sign up</h3>
                    <label htmlFor="email" className="signup__form-label">Email</label>
                    <input type="email" id="email-input" className="signup__form-input" placeholder="Enter email" />
                    <label htmlFor="password" className="signup__form-label">Password</label>
                    <input type="password" id="password-input" className="signup__form-input" placeholder="Enter password" />
                    <label htmlFor="username" className="signup__form-label">Username</label>
                    <input name="username" type="text" id="username-input" className="signup__form-input" placeholder="Enter your username" />
                    <button type="submit" className="signup__form-button" onClick={handleSignUpClick}>
                        Sign up
                    </button>
                    <div className="signup__signin">
                        <p className="signup__signin-text">or</p>
                        <Link style={{ textDecoration: 'none' }} >
                            <p className="signup__signin-link"> Sign in</p>
                        </Link>
                    </div>
                </form>
            </div>
            <RegistrationSuccessful isOpen={isRegistrationSuccessfulPopupOpen} onClose={closeRegistrationSuccessfulPopup} />
        </div>
    )
}

export default Signup;