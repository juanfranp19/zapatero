import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { isAuthenticated, login } = useAuth();

    // Función de redirección
    const handleRedireccionar = () => {
        navigate('/inicio'); // Redirige a la ruta de inicio
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);  // Limpiar errores

        try {
            // Llamamos a la función login desde el hook useAuth
            const result = await login(email, password);

            if (result.success) {
                onLogin(true);  // Actualizamos el estado global de autenticación
            } else {
                setError(result.error);  // Aquí actualizamos el estado de error
            }
        } catch (err) {
            console.error('Error durante el login:', err);
            setError('Hubo un error durante el login.'); // Mostrar error genérico
        }
    };

    // Efecto para redirigir cuando el usuario esté autenticado
    useEffect(() => {
        if (isAuthenticated) {
            handleRedireccionar();  // Redirigir cuando esté autenticado
        }
    }, [isAuthenticated]);  // El efecto se ejecuta cuando cambia isAuthenticated

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
                        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Mostramos el error aquí */}
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
