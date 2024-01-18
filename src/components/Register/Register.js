import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../Hooks/useFormWithValidation';

function Register({ onRegister, isOpen, onClose, onSigninClick }) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    const handleRegister = (e) => {
        e.preventDefault();
        onRegister(values.email, values.password, values.name);
        resetForm();
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleRegister}
            formTitle="Sign up"
            buttonText="Sign up"
            linkClickHandler={onSigninClick}
            linkText="Sign up"
        >
            <div className="popup__form-content">
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="popup__close-button popup__close-button-signup"
                />
                <fieldset className="popup__form-fieldset">
                    <label htmlFor="email" className="popup__form-label">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="popup__form-input"
                        placeholder="Enter email"
                        value={values.email}
                        onInput={handleChange}
                        autoComplete="off"
                        required
                    />
                    {!isValid && <span id="email-input-error" className="popup__form-error_visible">{errors.email}</span>}
                </fieldset>
                <fieldset className="popup__form-fieldset">
                    <label htmlFor="password" className="popup__form-label">Password</label>
                    <input
                        name="password"
                        type="password"
                        minLength="8"
                        className="popup__form-input"
                        placeholder="Enter password"
                        value={values.password}
                        onInput={handleChange}
                        autoComplete="current-password"
                        required
                    />
                    {!isValid && <span id="password-input-error" className="popup__form-error_visible">{errors.password}</span>}
                </fieldset>
                <fieldset className="popup__form-fieldset">
                    <label htmlFor="name" className="popup__form-label">Username</label>
                    <input
                        name="name"
                        type="text"
                        minLength="5"
                        className="popup__form-input"
                        placeholder="Enter your username"
                        value={values.name}
                        onInput={handleChange}
                        required
                    />
                    {!isValid && <span id="name-input-error" className="popup__form-error_visible">{errors.name}</span>}
                </fieldset>
            </div>
        </PopupWithForm>
    );
}

export { Register };
