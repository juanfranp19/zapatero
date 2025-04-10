import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="ring">
                <i style={{ '--clr': '#328E6E' }}></i>
                <i style={{ '--clr': '#67AE6E' }}></i>
                <i style={{ '--clr': '#77b95f' }}></i>
            </div>
            <div className="login">
                <h2>Login</h2>
                <div className="inputBx">
                    <i className="fa fa-user"></i>
                    <input type="text" placeholder="Usuario" />
                </div>
                <div className="inputBx">
                    <i className="fa fa-lock"></i>
                    <input type="password" placeholder="Contraseña" />
                </div>
                <div className="inputBx">
                    <input type="submit" value="Login" />
                </div>
            </div>
        </div>
    );
};

export default Login;
