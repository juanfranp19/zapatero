import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    // Constante para el manejo de la visibilidad de la password
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Constante para modificar la visibilidad de la contraseña
    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

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
                    <input type={passwordVisible ? "text" : "password"} placeholder="Contraseña"/>
                    <i className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisibility} // al hacer click se modifica a visible o no visible
                    ></i>
                </div>
                <div className="inputBx">
                    <input type="submit" value="Login" />
                </div>
            </div>
        </div>
    );
};

export default Login;
