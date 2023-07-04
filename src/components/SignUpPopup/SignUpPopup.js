import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import "../PopupWithForm/PopupWithForm.css";

function Signup({ isOpen, onClose, onSubmit }) {
    return (
        <>
            <PopupWithForm
                isOpen={isOpen}
                onClose={onClose}
            >
                {" "}
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="popup__close-button-signup"
                />
                <form name="signin" className="popup__form" onSubmit={onSubmit}>
                    <h3 className="popup__form-title">Sign up</h3>
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
                    <button type="submit" className="popup__form-button">
                        Sign up
                    </button>
                    <div className="popup__form-link-container">
                        <p className="popup__form-link-text">or</p>
                        <Link style={{ textDecoration: 'none' }} >
                            <p className="popup__form-link">Sign in</p>
                        </Link>
                    </div>
                </form>
            </PopupWithForm >
        </>
    )
}

export default Signup;