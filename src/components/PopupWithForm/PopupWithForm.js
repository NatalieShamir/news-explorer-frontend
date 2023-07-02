import React from "react";

function PopupWithForm({
    name,
    isOpen,
    children
}) {
    return (
        <div
            className={`${`popup popup_type_${name}`} ${isOpen ? "popup_open" : ""}`}
        >
            <div className="popup__container">
                {children}
            </div>
        </div>
    );
}

export default PopupWithForm;