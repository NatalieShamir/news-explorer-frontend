import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signin({ onSignin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = (e) => {
        e.preventDefault();
        onSignin(email, password)
    }

    return (
        <div className="signin">
            <form onSubmit={handleSignin} className="signin__form" >
                <h3 className="signin__welcome">Sign in</h3>
                <label htmlFor="email"></label>
                <input type="email" id="email-input" className="signin__input" placeholder="Enter email"
                    value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password"></label>
                <input type="password" id="password-input" className="signin__input" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                <div className="signin__button-container">
                    <button type="submit" className="signin__link">
                        Sign in
                    </button>
                </div>
            </form>

            <div className="signin__signup">
                <p className="signin__signup-text">or</p>
                <Link style={{ textDecoration: 'none' }} to="/signup" >
                    <p className="signin__signup-link"> Sign up</p>
                </Link>
            </div>
        </div>

    )
}

export { Signin }
