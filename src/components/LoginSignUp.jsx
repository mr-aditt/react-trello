import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginSignUp() {
    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();
    const signupEmailRef = useRef();
    const signupPasswordRef = useRef();
    const signupConfPasswordRef = useRef();
    const navigate = useNavigate();
    
    const { login } = useAuth();
    const [errorLogin, setErrorLogin] = useState('')
    const [loadingLogin, setLoadingLogin] = useState(false)

    const { signup } = useAuth();
    const [errorSignup, setErrorSignup] = useState('')
    const [loadingSignup, setLoadingSignup] = useState(false)

    async function handleSignUpSubmit(e){
        e.preventDefault();

        if(signupPasswordRef.current.value !== signupConfPasswordRef.current.value){
            return setErrorSignup('Passwords do not match')
        }

        try {
            setErrorSignup('')
            setLoadingSignup(true)
            await signup(signupEmailRef.current.value, signupPasswordRef.current.value);
            navigate('/dashboard');
        } catch {
            setErrorSignup('Failed to create an account')
        }
        setLoadingSignup(false)

    }

    async function handleLoginSubmit(e){
        e.preventDefault();

        try {
            setErrorLogin('')
            setLoadingLogin(true)
            await login(loginEmailRef.current.value, loginPasswordRef.current.value);
            navigate('/dashboard');
        } catch {
            setErrorLogin('Failed to Login')
        }
        setLoadingLogin(false)
    }

    return (
        <>
                <nav>
                    <div className="navbar">
                    <Link to='/'>
                        <div className='logo'>
                            <a href="#">Oll</a>
                            <a href="#">Ert</a>
                        </div>
                        </Link>
                        <div>
                        <Link to='/loginsignup'>
                            <button className='logout-btn'>
                                Login/Sign-up
                            </button>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className='login-signup-container'>
                    <div className='card card-60vh m-t login-card'>
                        <div className="card-title">
                        <span>Welcome to </span> 
                        <span className='logo'>
                            <a href="#">Oll</a>
                            <a href="#">Ert</a>
                        </span>
                        </div>
                        {errorLogin && <div className='alert-danger'>{errorLogin}</div>}
                        <form onSubmit={handleLoginSubmit}>
                            <div>
                            <label htmlFor="login-email">E-mail</label>
                            <input type="email" name="email" id="login-email" ref={loginEmailRef} required/>
                            </div>
                            <div>
                            <label htmlFor="login-password">Password</label>
                            <input type="password" name="password" id="login-password" ref={loginPasswordRef} required/>
                            </div>
                            <div className='btn m-0-auto'>
                                <button type="submit" disabled={loadingLogin}>Login</button>
                            </div>
                        </form>
                    </div>
                    <hr />
                    <div className='card card-75vh signup-card'>
                        <div className="card-title"> 
                        <span>Join</span>
                        <span className='logo'>
                            <a href="#">Oll</a>
                            <a href="#">Ert</a>
                        </span>
                        </div>
                        {errorSignup && <div className='alert-danger'>{errorSignup}</div>}
                        <form onSubmit={handleSignUpSubmit}>
                            <div>
                            <label htmlFor="signup-email">E-mail</label>
                            <input type="email" name="email" id="signup-email" ref={signupEmailRef} required/>
                            </div>
                            <div>
                            <label htmlFor="signup-password">Password</label>
                            <input type="password" name="password" id="signup-password" ref={signupPasswordRef} required/>
                            </div>
                            <div>
                            <label htmlFor="signup-conf-password">Confirm Password</label>
                            <input type="password" name="password" id="signup-conf-password" ref={signupConfPasswordRef} required/>
                            </div>
                            <div className='btn m-0-auto'>
                                <button type="submit" disabled={loadingSignup}>Sign-Up</button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    )
}
