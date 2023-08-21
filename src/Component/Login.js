import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = () => {
        setLoginError('');

        // Create the request body with the username and password
        const requestBody = {
            username,
            password,
        };

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                // Successful login
                console.log('Logged in:', data);
                // Handle further actions like redirecting or setting a logged-in state
            } else {
                // Failed login
                setLoginError(data.message);
            }
        })
        .catch((error) => {
            console.error('An error occurred:', error);
            setLoginError('An error occurred during login.');
        });
    };

    return (
        <div className='Main-origin'>
            <div className='main-container'>
                <p className='heading'>Welcome back!</p>
                <h1 className='title'>Sign in to your account</h1>
                <div className='inputs'>
                    <div>
                        <label htmlFor="email">Your email</label><br />
                        <input
                            type='email'
                            className='email'
                            id='email'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='password'
                            id='password'
                        />
                    </div>
                </div>
                <button className='btn-login' onClick={handleLogin}>CONTINUE</button>
                {loginError && <p className="error">{loginError}</p>}
                <p className="FORGET">Forget your password?</p>
            </div>
            <p className='last-para'>Don't have an account?<a href='/'>Sign up</a></p>
        </div>
    );
}

export default Login;
