import React from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import "../PopupWithForm/PopupWithForm.css";
import { useFormWithValidation } from '../Hooks/useFormWithValidation';

function Register({ onRegister, isOpen, onClose, onSigninClick }) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    const handleRegister = (e) => {
        e.preventDefault();
        onRegister(values.email, values.password, values.name);
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
                <form name="signup" className="popup__form" onSubmit={handleRegister}>
                    <h3 className="popup__form-title">Sign up</h3>
                    < fieldset className="popup__form-fieldset" >
                        <label htmlFor="email" className="popup__form-label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="popup__form-input"
                            placeholder="Enter email"
                            value={values.email}
                            onChange={handleChange}
                            autoComplete="off"
                            required
                        />
                        {!isValid && <span id="email-input-error" className="popup__form-error">{errors.email}</span>}
                    </fieldset >
                    <fieldset className="popup__form-fieldset">
                        <label htmlFor="password" className="popup__form-label">Password</label>
                        <input
                            name="password"
                            type="password"
                            minLength="8"
                            className="popup__form-input"
                            placeholder="Enter password"
                            value={values.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            required
                        />
                        {!isValid && <span id="password-input-error" className="popup__form-error">{errors.password}</span>}
                    </fieldset>
                    < fieldset className="popup__form-fieldset" >
                        <label htmlFor="name" className="popup__form-label">name</label>
                        <input
                            name="name"
                            type="text"
                            minLength="5"
                            className="popup__form-input"
                            placeholder="Enter your name"
                            value={values.name}
                            onChange={handleChange}
                            required
                        />
                        {!isValid && <span id="name-input-error" className="popup__form-error">{errors.name}</span>}
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