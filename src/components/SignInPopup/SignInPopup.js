import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../SignInPopup/SignInPopup.css";
import Signup from "../SignUpPopup/SignUpPopup";

function Signin({ isOpen, onClose }) {
    const [isSignUpPopupOpen, setIsSignUpPopupOpen] =
        React.useState(false);

    function handleSignUpClick() {
        setIsSignUpPopupOpen(true);
    }

    function closeSignUpPopup() {
        setIsSignUpPopupOpen(false);
    }

    useEffect(() => {
        function closeByEscape(e) {
            if (e.key === "Escape") {
                closeSignUpPopup();
            }
        }
        document.addEventListener("keydown", closeByEscape);
        return () => document.removeEventListener("keydown", closeByEscape);
    }, []);

    return (
        <div className={`${`signin `} ${isOpen ? "signin_open" : ""}`} >
            <div className="signin__container" >
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="signin__close-button"
                />
                <form className="signin__form" >
                    <h3 className="signin__form-title">Sign in</h3>
                    <label htmlFor="email" className="signin__form-label">Email</label>
                    <input type="email" id="email-input" className="signin__form-input" placeholder="Enter email" />
                    <label htmlFor="password" className="signin__form-label">Password</label>
                    <input type="password" id="password-input" className="signin__form-input" placeholder="Enter password" />
                    <button type="submit" className="signin__form-button signin__form-button_disabled">
                        Sign in
                    </button>
                    <div className="signin__signup">
                        <p className="signin__signup-text">or</p>
                        <Link style={{ textDecoration: 'none' }} onClick={handleSignUpClick}>
                            <p className="signin__signup-link"> Sign up</p>
                        </Link>
                    </div>
                </form>
            </div>
            <Signup isOpen={isSignUpPopupOpen} onClose={closeSignUpPopup} />
        </div>
    )
}
export default Signin; 
