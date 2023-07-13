import React from "react";
import "../Parent/Parent.css";

function Parent(props) {
    return (
        <div className="parent">
            {props.children}
        </div>
    )
}

export default Parent;