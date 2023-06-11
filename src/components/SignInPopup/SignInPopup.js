import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../SignInPopup/SignInPopup.css";

function Signin({ onSignin, isOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = (e) => {
        e.preventDefault();
        onSignin(email, password)
    }

    return (
        <div className={`${`signin `} ${isOpen ? "signin_open" : ""}`}>
            <div className="signin__container">
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="signin__close-button"
                />
                <form onSubmit={handleSignin} className="signin__form" >
                    <h3 className="signin__form-title">Sign in</h3>
                    <label htmlFor="email" className="signin__form-label">Email</label>
                    <input type="email" id="email-input" className="signin__form-input" placeholder="Enter email"
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password" className="signin__form-label">Password</label>
                    <input type="password" id="password-input" className="signin__form-input" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="signin__form-button signin__form-button_disabled">
                        Sign in
                    </button>
                    <div className="signin__signup">
                        <p className="signin__signup-text">or</p>
                        <Link style={{ textDecoration: 'none' }} to="/signup" >
                            <p className="signin__signup-link"> Sign up</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signin; 
