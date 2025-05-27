import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importar componentes
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import ProtectedRoute from './Routes/ProtectedRoute';

// Importar páginas
import Inicio from './pages/Inicio/Inicio';
import Trabajadores from './pages/Trabajadores/Trabajadores';
import Equipos from './pages/Equipos/Equipos';
import Movimientos from './pages/Movimientos/Movimientos';
import Usos from './pages/Usos/Usos';
import Avisos from './pages/Avisos/Avisos';
import CrearAvisoPage from './pages/CrearAviso/CrearAviso';
import CrearTrabajadores from './pages/CrearTrabajadores/CrearTrabajadores';
import CrearEquipos from './pages/CrearEquipos/CrearEquipos';
import CrearMovimientos from './pages/CrearMovimientos/CrearMovimientos';
import Mapa from './pages/Mapa/Mapa';
import DetallesMaquinaPage from './pages/DetallesMaquinaPage/DetallesMaquinaPage';
import UsuarioHistorialPage from './pages/UsuarioHistorialPage/UsuarioHistorialPage';
import UsuarioAccesosPage from './pages/UsuarioAccesosPage/UsuarioAccesosPage';
import UsuarioEditarPage from './pages/UsuarioEditarPage/UsuarioEditarPage';
import UsuarioIncidenciasPage from './pages/UsuarioIncidenciasPage/UsuarioIncidenciasPage';
import UsuarioMovimientosPage from './pages/UsuarioMovimientosPage/UsuarioMovimientosPage';
import UsuarioUsosPage from './pages/UsuarioUsosPage/UsuarioUsosPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return !!localStorage.getItem('token');
    });

    const [userRole, setUserRole] = useState(() => {
        return localStorage.getItem('role') || null;
    });

    const handleLogin = (status, role) => {
        setIsAuthenticated(status);
        setUserRole(role);
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login onLogin={handleLogin} />,
        },
        {
            element: <Layout />, // Componente que se renderiza para todas las rutas hijas
            children: [
                { path: '/inicio', element: <ProtectedRoute element={<Inicio />} isAuthenticated={isAuthenticated} /> },
                { path: '/trabajadores', element: <ProtectedRoute element={<Trabajadores />} allowedRoles={['admin']} /> },
                { path: '/equipos', element: <ProtectedRoute element={<Equipos />} isAuthenticated={isAuthenticated} /> },
                { path: '/movimientos', element: <ProtectedRoute element={<Movimientos />} isAuthenticated={isAuthenticated} /> },
                { path: '/usos', element: <ProtectedRoute element={<Usos />} isAuthenticated={isAuthenticated} /> },
                { path: '/avisos', element: <ProtectedRoute element={<Avisos />} isAuthenticated={isAuthenticated} /> },
                { path: '/avisos/crear', element: <ProtectedRoute element={<CrearAvisoPage />} isAuthenticated={isAuthenticated} /> },
                { path: '/trabajadores/crear', element: <ProtectedRoute element={<CrearTrabajadores />} isAuthenticated={isAuthenticated} /> },
                { path: '/equipos/crear', element: <ProtectedRoute element={<CrearEquipos />} isAuthenticated={isAuthenticated} /> },
                { path: '/movimientos/crear', element: <ProtectedRoute element={<CrearMovimientos />} isAuthenticated={isAuthenticated} /> },
                { path: '/mapa', element: <ProtectedRoute element={<Mapa />} isAuthenticated={isAuthenticated} /> },
                { path: '/mapa/detalles-maquina/:id', element: <ProtectedRoute element={<DetallesMaquinaPage />} isAuthenticated={isAuthenticated} /> },
                { path: '/usuario-historial', element: <ProtectedRoute element={<UsuarioHistorialPage />} isAuthenticated={isAuthenticated} /> },
                { path: '/usuario-accesos', element: <ProtectedRoute element={<UsuarioAccesosPage />} isAuthenticated={isAuthenticated} /> },
                { path: '/usuario-editar', element: <ProtectedRoute element={<UsuarioEditarPage />} isAuthenticated={isAuthenticated} /> },
                { path: '/usuario-incidencias', element: <ProtectedRoute element={<UsuarioIncidenciasPage />} isAuthenticated={isAuthenticated} /> },
                { path: '/usuario-movimientos', element: <ProtectedRoute element={<UsuarioMovimientosPage />} isAuthenticated={isAuthenticated} /> },
                { path: '/usuario-usos', element: <ProtectedRoute element={<UsuarioUsosPage />} isAuthenticated={isAuthenticated} /> },
            ],
        },
        {
            path: '*', // Ruta que captura cualquier página no definida
            element: <ErrorPage />, // Redirigir al componente de error
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
