import React from "react";
import { Link } from "react-router-dom";
import "../RegistrationSuccessful/RegistrationSuccessful.css"

function RegistrationSuccessful({ isOpen, onClose, onSigninClick }) {
    return (
        <div className={`${`registration-success`} ${isOpen ? "registration-success_open" : ""}`}>
            <div className="registration-success__container">
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="registration-success__close-button"
                ></button>
                <form className="registration-success__form">
                    <div className="registration-success__info">
                        <h3 className="registration-success__status">Registration successfully completed!</h3>
                        <Link style={{ textDecoration: 'none' }} >
                            <p onClick={onSigninClick} className="registration-success__link"> Sign in</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RegistrationSuccessful;