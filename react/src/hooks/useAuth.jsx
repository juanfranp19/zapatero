import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

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
                    if (!res.ok) {
                        throw new Error("Token inválido");
                    }
                    return res.json();
                })
                .then(data => {
                    setUser(data);
                    setIsAuthenticated(true);
                })
                .catch(err => {
                    console.error("Token inválido o expirado:", err);
                    // Elimina el token si ya no es valido
                    localStorage.removeItem('token');
                    setUser(null);
                    setIsAuthenticated(false);
                    navigate('/'); // Redirige al login
                });
        }
    }, [navigate]);

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
        navigate('/'); // Redirige al login después del logout
    };

    return {
        isAuthenticated,
        user,
        login,
        logout,
    };
};

export default useAuth;
