import React from "react";
import "../PopupWithForm/PopupWithForm.css";
import { Link } from 'react-router-dom';

function PopupWithForm({ isOpen, children, onClose, onSubmit, formTitle, buttonText, linkClickHandler, linkText, isValid }) {

    return (
        <div className={`popup ${isOpen ? "popup_open" : ""}`}>
            <div className="popup__content-container">
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="popup__close-button"
                />
                <form className="popup__form" onSubmit={onSubmit}>
                    <h3 className="popup__form-title">{formTitle}</h3>
                    {children}
                    <button type="submit" className={isValid ? "popup__form-button" : "popup__form-button popup__form-button_disabled"}>
                        {buttonText}
                    </button>
                    <div className="popup__form-link-container">
                        <p className="popup__form-link-text">or&nbsp;</p>
                        <Link style={{ textDecoration: 'none' }}>
                            <p onClick={linkClickHandler} className="popup__form-link">{linkText}</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
