import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import img1 from './img/instagram.png'
import App from './App';


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedin, setIsloggedin] = useState(false)

    useEffect(() => {
        // alert('Selamat Datang')
        return () => {
        }
    }, [])

    const onLogin = (e) => {
        e.preventDefault()
        if (username === 'admin' && password === 'admin') {
            setIsloggedin(true)
            setUsername('')
            setPassword('')
        } else {
            alert('Salah')
        }
    }

    const onLogout = () => {
        setIsloggedin(false)
    }

    return (
        <>
            {!isLoggedin &&
                <div className="login">
                    <img className="judul_login" src={img1} alt="avatar" />
                    <form onSubmit={e => onLogin(e)}>
                        <div className="email">
                            <input type="text" name="username" onChange={e => setUsername(e.target.value)} placeholder="Email"></input>
                        </div>
                        <div className="password">
                            <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
                        </div>
                        <button>login</button>
                    </form>
                </div>
            }

            {isLoggedin &&
                <App props_onLogout={onLogout} />
            }

        </>
    )
}

export default Login
