import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup({ onSignup }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        onSignup(email, password, username)
    }

    return (
        <div className="signup">
            <form onSubmit={handleSignup} className="signup__form">
                <h3 className="signup__welcome">
                    Sign up
                </h3>
                <label htmlFor="email" className="signup__label">Email</label>
                <input name="email" type="email" id="email-input" className="signup__input" placeholder="Enter email" value={email}
                    onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password" className="signup__label">Password</label>
                <input name="password" type="password" id="password-input" className="signup__input" placeholder="Enter password" value={password}
                    onChange={e => setPassword(e.target.value)} />
                <label htmlFor="username" className="signup__label">Username</label>
                <input name="username" type="text" id="username-input" className="signup__input" placeholder="Enter your username" value={username}
                    onChange={e => setUsername(e.target.value)} />
                <div className="signup__button-container">
                    <button className="signup__link">Sign up</button>
                </div>
            </form>

            <div className="signin__signup">
                <p className="signin__signup-text">or</p>
                <Link style={{ textDecoration: 'none' }} to="/signin" >
                    <p className="signin__signup-link"> Sign in</p>
                </Link>
            </div>
        </div>
    )
}

export { Signup };