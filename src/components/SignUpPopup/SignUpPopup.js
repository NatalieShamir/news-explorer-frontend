import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import "../PopupWithForm/PopupWithForm.css";
import RegistrationSuccessful from '../RegistrationSuccessful/RegistrationSuccessful';

function Signup({ isOpen, onClose }) {
    const [isRegistrationSuccessfulPopupOpen, setIsRegistrationSuccessfulPopupOpen] =
        React.useState(false);

    function handleSignInClick() {
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

        <PopupWithForm
            name="signup"
            title="Sign up"
            isOpen={isOpen}
            onClose={onClose}
            buttonText={"Sign up"}
        >
            {" "}
            < fieldset className="popup__form-fieldset" >
                <label htmlFor="email" className="popup__form-label">Email</label>
                <input
                    type="email"
                    id="email-input"
                    className="popup__form-input"
                    placeholder="Enter email"
                    required
                />
                <span id="email-input-error" className="popup__form-error"></span>
            </fieldset >
            <fieldset className="popup__form-fieldset">
                <label htmlFor="password" className="popup__form-label">Password</label>
                <input
                    type="password"
                    id="password-input"
                    className="popup__form-input"
                    placeholder="Enter password"
                    required
                />
                <span id="password-input-error" className="popup__form-error"></span>
            </fieldset>
            < fieldset className="popup__form-fieldset" >
                <label htmlFor="username" className="popup__form-label">Username</label>
                <input
                    type="text"
                    id="username-input"
                    className="popup__form-input"
                    placeholder="Enter your username"
                    required
                />
                <span id="email-input-error" className="popup__form-error"></span>
            </fieldset >
            {" "}
            <button type="submit" className="popup__form-button" onClick={handleSignInClick}>
                Sign up
            </button>
            <div className="popup__form-link-container">
                <p className="popup__form-link-text">or</p>
                <Link style={{ textDecoration: 'none' }} >
                    <p className="popup__form-link">Sign in</p>
                </Link>
            </div>
            <RegistrationSuccessful isOpen={isRegistrationSuccessfulPopupOpen} onClose={closeRegistrationSuccessfulPopup} />
        </PopupWithForm >
    )
}

export default Signup;