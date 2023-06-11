import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../SignUpPopup/SignUpPopup.css";

function Signup({ onSignup, isOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        onSignup(email, password, username)
    }
    return (
        <div className={`${`signup `} ${isOpen ? "signup_open" : ""}`}>
            <div className="signup__container">
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="signup__close-button"
                />
                <form onSubmit={handleSignup} className="signup__form" >
                    <h3 className="signup__form-title">Sign up</h3>
                    <label htmlFor="email" className="signup__form-label">Email</label>
                    <input type="email" id="email-input" className="signup__form-input" placeholder="Enter email"
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password" className="signup__form-label">Password</label>
                    <input type="password" id="password-input" className="signup__form-input" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="username" className="signup__label">Username</label>
                    <input name="username" type="text" id="username-input" className="signup__input" placeholder="Enter your username" value={username}
                        onChange={e => setUsername(e.target.value)} />
                    <button type="submit" className="signup__form-button signup__form-button_disabled">
                        Sign in
                    </button>
                    <div className="signup__signin">
                        <p className="signup__signin-text">or</p>
                        <Link style={{ textDecoration: 'none' }} to="/signin" >
                            <p className="signup__signin-link"> Sign in</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}/* 
*/
export default Signup;