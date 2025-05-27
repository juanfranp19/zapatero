import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest, fetchUser, logoutRequest, regiserRequest } from '../services/authService';
import { getUser } from '../services/userService';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState(localStorage.getItem('role') || null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetchUser(token)
                .then(async data => {
                    setUser(data);

                    const userConRole = await getUser(data.id);
                    const roleName = userConRole?.rol?.nombre || 'usuario';

                    setUser(userConRole);
                    setUserRole(roleName);
                    localStorage.setItem('role', roleName);

                    setIsAuthenticated(true);
                })
                .catch(err => {
                    console.error("Token inválido o expirado:", err);
                    localStorage.removeItem('token');
                    localStorage.removeItem('role');
                    setUser(null);
                    setUserRole(null);
                    setIsAuthenticated(false);
                    navigate('/');
                });
        }
    }, [navigate]);

    const login = async (email, password) => {
        const { ok, data } = await loginRequest(email, password);

        if (ok && data.token) {
            localStorage.setItem('token', data.token);
            setIsAuthenticated(true);

            try {
                const response = await fetchUser(data.token);
                const userData = response.data;
                setUser(userData);

                const userConRole = await getUser(userData.id);
                const roleName = userConRole?.rol?.nombre || 'usuario';

                setUser(userConRole);
                setUserRole(roleName);
                localStorage.setItem('role', roleName);

                return { success: true, role: roleName };
            } catch {
                return { success: false, error: 'Error al obtener datos del usuario.' };
            }
        }

        return { success: false, error: data.message || 'Email o contraseña incorrectos' };
    };

    const logout = async () => {
        const token = localStorage.getItem('token');

        try {
            await logoutRequest(token);
        } catch (error) {
            console.warn('Error al llamar al API de logout:', error);
        }

        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
        navigate('/');
    };

    const register = async (data) => {

        try {

            // llama al servicio
            const registrarUsuario = await regiserRequest(data);

            // devuelve la respuesta de la API
            return registrarUsuario;

        } catch (error) {
            console.warn('Error al llamar al API de register:', error);
            return 0;
        }
    };

    return {
        isAuthenticated,
        user,
        userRole,
        login,
        logout,
        register,
    };
}