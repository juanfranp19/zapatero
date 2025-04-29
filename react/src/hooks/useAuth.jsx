import { useState } from 'react';
import * as authService from '../services/authService';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const login = async (email, password) => {
        try {
            // guarda en la base de datos el loguin
            const data = await authService.login(email, password);

            // guarda el token en localStorage
            localStorage.setItem('token', data.token);

            setIsAuthenticated(true);
            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error };
        }
    };

    const logout = async () => {
        try {
            // cierra sesion desde la base de datos
            await authService.logout();

        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            // quita el token de localStorage
            localStorage.removeItem('token');

            setIsAuthenticated(false);
        }
    };

    return {
        isAuthenticated,
        login,
        logout,
    };
};

export default useAuth;