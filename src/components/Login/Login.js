import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import "../PopupWithForm/PopupWithForm.css";
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../Hooks/useFormWithValidation';

function Login({ onLogin, isOpen, onClose, onSignupClick }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(values);
    }

    return (
        <>
            <PopupWithForm
                isOpen={isOpen}
            >
                {" "}
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="popup__close-button-signin"
                />
                <form name="signin" className="popup__form" onSubmit={handleLogin}>
                    <h3 className="popup__form-title">Sign in</h3>
                    < fieldset className="popup__form-fieldset" >
                        <label htmlFor="email" className="popup__form-label">Email</label>
                        <input
                            type="email"
                            id="email-input"
                            className="popup__form-input"
                            placeholder="Enter email"
                            value={values.email || ""}
                            onChange={handleChange}
                            required
                        />
                        {!isValid && <span id="email-input-error" className="popup__form-error">{errors.email}</span>}
                    </fieldset >
                    <fieldset className="popup__form-fieldset">
                        <label htmlFor="password" className="popup__form-label">Password</label>
                        <input
                            type="password"
                            id="password-input"
                            className="popup__form-input"
                            placeholder="Enter password"
                            value={values.password || ""}
                            onChange={handleChange}
                            required
                        />
                        {!isValid && <span id="password-input-error" className="popup__form-error">{errors.password}</span>}
                    </fieldset>
                    <button type="submit" className="popup__form-button popup__form-button_disabled">
                        Sign in
                    </button>
                    <div className="popup__form-link-container">
                        <p className="popup__form-link-text">or</p>
                        <Link style={{ textDecoration: 'none' }} >
                            <p onClick={onSignupClick} className="popup__form-link" >Sign up</p>
                        </Link>
                    </div>
                </form>
            </PopupWithForm >
        </>
    )
}

export { Login }