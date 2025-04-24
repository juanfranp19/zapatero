import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://zapatero.es/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            // Verificar el código de estado y el contenido de la respuesta
            if (response.ok) {
                if (data.token) {
                    // Guardar token
                    localStorage.setItem('token', data.token);
                    // Cambiar estado global
                    onLogin(true);
                    // Redirigir al usuario a la página de inicio
                    navigate('/inicio');
                } else {
                    setError('No se recibió token de autenticación');
                }
            } else {
                // Si la respuesta no es ok, lanzar un error con el mensaje de la API
                throw new Error(data.message || 'Email o contraseña incorrectos');
            }
        } catch (err) {
            // Si hay un error, actualizar el estado de error con el mensaje correspondiente
            setError(err.message);
        }
    };

    return (
        <div className='cuerpo'>
            <div className="container">
                <div className="ring">
                    <i style={{ '--clr': '#328E6E' }}></i>
                    <i style={{ '--clr': '#67AE6E' }}></i>
                    <i style={{ '--clr': '#77b95f' }}></i>
                </div>
                <div className="login">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="inputBx">
                            <i className="fa fa-user"></i>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="inputBx">
                            <i className="fa fa-lock"></i>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <i
                                className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
                                onClick={togglePasswordVisibility}
                            ></i>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="inputBx">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
