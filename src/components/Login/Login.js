import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../Hooks/useFormWithValidation';

function Login({ onLogin, isOpen, onClose, onSignupClick }) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(values.email, values.password);
    }

    React.useEffect(() => {
        resetForm();
    }, [isOpen]);//eslint-disable-line react-hooks/exhaustive-deps

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleLogin}
            formTitle="Sign in"
            buttonText="Sign in"
            linkClickHandler={onSignupClick}
            linkText="Sign up"
            isValid={isValid}
        >
            <div className="popup__form-content">
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="popup__close-button popup__close-button-signin"
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
                        autoComplete="on"
                        required
                    />
                    {!isValid && <span id="email-input-error" className="popup__form-error_visible">{errors.email}</span>}
                </fieldset>
                <fieldset className="popup__form-fieldset">
                    <label htmlFor="password" className="popup__form-label">Password</label>
                    <input
                        name="password"
                        type="password"
                        className="popup__form-input"
                        placeholder="Enter password"
                        value={values.password}
                        onInput={handleChange}
                        autoComplete="current-password"
                        required
                    />
                    {!isValid && <span id="password-input-error" className="popup__form-error_visible">{errors.password}</span>}
                </fieldset>
            </div>
        </PopupWithForm>
    );
}

export { Login };

