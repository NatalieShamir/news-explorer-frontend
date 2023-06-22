import React from "react";

function PopupWithForm({
    name,
    isOpen,
    onClose,
    title,
    children,
    onSubmit,
    buttonText,

}) {
    return (
        <div
            className={`${`popup popup_type_${name}`} ${isOpen ? "popup_open" : ""}`}
        >
            <div className="popup__container">
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="popup__close-button"
                />
                <form name={name} className="popup__form" onSubmit={onSubmit}>
                    <h3 className="popup__form-title">{title}</h3>
                    {children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;