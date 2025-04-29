import { useState } from 'react';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const login = async (email, password) => {
        const response = await fetch('http://zapatero.es/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        // Comprobamos si la respuesta es correcta y devolvemos el token
        if (response.ok && data.token) {
            localStorage.setItem('token', data.token);
            setIsAuthenticated(true);
            return { success: true };
        }

        // Si no se recibe el token, lanzamos un error
        return { success: false, error: data.message || 'Email o contraseña incorrectos' };
    };

    const logout = async () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        window.location.reload() // recarga la pagina al hacer el logout
    };

    return {
        isAuthenticated,
        login,
        logout,
    };
};

export default useAuth;
