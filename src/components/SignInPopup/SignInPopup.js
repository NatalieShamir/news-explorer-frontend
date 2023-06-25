import React from 'react';
import Signup from "../SignUpPopup/SignUpPopup";
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import "../PopupWithForm/PopupWithForm.css";
import { Link } from 'react-router-dom';


function Signin({ isOpen, onClose }) {

    const [isSignUpPopupOpen, setIsSignUpPopupOpen] =
        React.useState(false);

    function handleSignUpClick() {
        setIsSignUpPopupOpen(true);
    }

    function closeSignUpPopup() {
        setIsSignUpPopupOpen(false);
    }

    return (
        <>
            <PopupWithForm
                name="signin"
                title="Sign in"
                isOpen={isOpen}
                onClose={onClose}
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
                {" "}
                <button type="submit" className="popup__form-button popup__form-button_disabled">
                    Sign in
                </button>
                <div className="popup__form-link-container">
                    <p className="popup__form-link-text">or</p>
                    <Link style={{ textDecoration: 'none' }} onClick={handleSignUpClick}>
                        <p className="popup__form-link">Sign up</p>
                    </Link>
                </div>
            </PopupWithForm >
            <Signup isOpen={isSignUpPopupOpen} onClose={closeSignUpPopup} />
        </>
    )
}

export default Signin; 
