import React from "react";
import "../NotFound/NotFound.css";
import notFound from "../../images/not-found.png";

function NotFound() {
    return (
        <div className="not-found">
            <img className="not-found__image" src={notFound}></img>
            <h2 className="not-found__heading">Nothing found</h2>
            <p className="not-found__text">Sorry, but nothing matched
                your search terms.</p>
        </div>
    )
}

export default NotFound;