import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    // indica si el usuario está autenticado por la existencia de un token
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    // almacenar la información del usuario
    const [user, setUser] = useState(null);

    //  navegar entre rutas
    const navigate = useNavigate();

    useEffect(() => {

        // obtener el token almacenado
        const token = localStorage.getItem('token');

        // // Si hay un token, solicitamos para saber que sigue siendo válido
        if (token) {
            fetch('http://zapatero.es/api/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                },
            })
                .then(res => {
                    // // Si la respuesta no es exitosa, lanzamos un error
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
                    // Si el token es inválido o ha expirado, eliminamos el token del localStorage
                    console.error("Token inválido o expirado:", err);
                    localStorage.removeItem('token');
                    setUser(null);
                    setIsAuthenticated(false);
                    navigate('/'); // Redirige al login
                });
        }
    }, [navigate]);


    // Función para hacer login, enviando el email y contraseña
    const login = async (email, password) => {
        const response = await fetch('http://zapatero.es/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password }) // // Cuerpo de la solicitud
        });

        // Parseamos la respuesta JSON
        const data = await response.json();

        // Si la respuesta es exitosa y recibimos un token, lo guardamos en localStorage
        if (response.ok && data.token) {
            localStorage.setItem('token', data.token);
            setIsAuthenticated(true);

            // hacemos otra solicitud para obtener los datos del usuario
            const userResponse = await fetch('http://zapatero.es/api/user', {
                headers: {
                    'Authorization': `Bearer ${data.token}`,
                    'Accept': 'application/json',
                },
            });

            const userData = await userResponse.json(); // datos del usuario
            setUser(userData); // guardamos los datos del usuario

            return { success: true }; // login existoso
        }

        // si sale mal devolvemos un error
        return { success: false, error: data.message || 'Email o contraseña incorrectos' };
    };

    // Función para hacer logout
    const logout = async () => {
        // borramos token y estado
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
        navigate('/'); // Redirige al login después del logout
    };

    // Devolvemos los valores para otros componentes
    return {
        isAuthenticated,  // Si el usuario está autenticado o no
        user,             // Los datos del usuario
        login,            // La función para hacer login
        logout,           // La función para hacer logout
    };
};

export default useAuth;
