import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import "../PopupWithForm/PopupWithForm.css";
import { useFormWithValidation } from '../Hooks/useFormWithValidation';

function Register({ onRegister, isOpen, onClose, onSigninClick }) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    const handleRegister = (e) => {
        e.preventDefault();
        onRegister(values);
        resetForm();
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
                    className="popup__close-button-signup"
                />
                <form name="signin" className="popup__form" onSubmit={handleRegister}>
                    <h3 className="popup__form-title">Sign up</h3>
                    < fieldset className="popup__form-fieldset" >
                        <label htmlFor="email" className="popup__form-label">Email</label>
                        <input
                            type="email"
                            id="email-input"
                            className="popup__form-input"
                            placeholder="Enter email"
                            value={values.email}
                            onChange={handleChange}
                            required
                        />
                        {!isValid && <span id="email-input-error" className="popup__form-error">{errors.email}</span>}
                    </fieldset >
                    <fieldset className="popup__form-fieldset">
                        <label htmlFor="password" className="popup__form-label">Password</label>
                        <input
                            type="password"
                            minLength="8"
                            id="password-input"
                            className="popup__form-input"
                            placeholder="Enter password"
                            value={values.password}
                            onChange={handleChange}
                            required
                        />
                        {!isValid && <span id="password-input-error" className="popup__form-error">{errors.password}</span>}
                    </fieldset>
                    < fieldset className="popup__form-fieldset" >
                        <label htmlFor="username" className="popup__form-label">Username</label>
                        <input
                            type="text"
                            minLength="5"
                            id="username-input"
                            className="popup__form-input"
                            placeholder="Enter your username"
                            value={values.username}
                            onChange={handleChange}
                            required
                        />
                        {!isValid && <span id="username-input-error" className="popup__form-error">{errors.username}</span>}
                    </fieldset >
                    <button type="submit" className="popup__form-button">
                        Sign up
                    </button>
                    <div className="popup__form-link-container">
                        <p className="popup__form-link-text">or</p>
                        <Link style={{ textDecoration: 'none' }} >
                            <p onClick={onSigninClick} className="popup__form-link">Sign in</p>
                        </Link>
                    </div>
                </form>
            </PopupWithForm >
        </>
    )
}

export { Register };