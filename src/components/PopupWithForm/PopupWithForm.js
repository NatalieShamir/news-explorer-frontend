import React from "react";

function PopupWithForm({
    isOpen,
    children,
}) {
    return (
        <div
            className={`${`popup`} ${isOpen ? "popup_open" : ""}`}
        >
            <div className="popup__container">
                {children}
            </div>
        </div>
    );
}

export default PopupWithForm;