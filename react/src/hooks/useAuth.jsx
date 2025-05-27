import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest, logoutRequest } from '../services/authService';
import { getUser } from '../services/userService';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(localStorage.getItem('role') || null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      getUser(userId)
        .then(userData => {
          setUser(userData);
          const role = userData.rol?.nombre || 'usuario';
          setUserRole(role);
          localStorage.setItem('role', role);
          setIsAuthenticated(true);
        })
        .catch(err => {
          console.error("Token inválido o expirado:", err);
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          localStorage.removeItem('userId');
          setUser(null);
          setUserRole(null);
          setIsAuthenticated(false);
          navigate('/');
        });
    }
  }, [navigate]);

  const login = async (email, password) => {
    const { ok, data } = await loginRequest(email, password);

    if (ok && data.token && data.user?.id) {
      const userId = data.user.id;
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', userId); // <- guarda el ID del usuario
      setIsAuthenticated(true);

      try {
        const userData = await getUser(userId); // <- aquí usas el getUser correcto
        setUser(userData);

        const role = userData.rol?.nombre || 'usuario';
        setUserRole(role);
        localStorage.setItem('role', role);

        return { success: true, role };
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
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
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setUser(null);
    setUserRole(null);
    navigate('/');
  };

  return {
    isAuthenticated,
    user,
    userRole,
    login,
    logout,
  };
};
