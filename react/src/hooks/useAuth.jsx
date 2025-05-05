import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    // Obtener el usuario si ya hay token al cargar la app
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://zapatero.es/api/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
            })
                .then(res => {
                    console.log("Status", res.status);
                    return res.ok ? res.json() : Promise.reject();
                })
                .then(data => {
                    console.log("Usuario:", data);
                    setUser(data);
                    setIsAuthenticated(true);
                })
                .catch(err => {
                    console.error("Error al cargar usuario:", err);
                    setUser(null);
                    setIsAuthenticated(false);
                });
        }
    }, []);


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

        if (response.ok && data.token) {
            localStorage.setItem('token', data.token);
            setIsAuthenticated(true);

            // Cargar los datos del usuario después del login
            const userResponse = await fetch('http://zapatero.es/api/user', {
                headers: {
                    'Authorization': `Bearer ${data.token}`,
                    'Accept': 'application/json',
                },
            });

            const userData = await userResponse.json();
            setUser(userData);

            return { success: true };
        }

        return { success: false, error: data.message || 'Email o contraseña incorrectos' };
    };

    const logout = async () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
        window.location.reload();
    };

    return {
        isAuthenticated,
        user,
        login,
        logout,
    };
};

export default useAuth;
