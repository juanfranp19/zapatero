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
import Historial from './pages/Historial/Historial';
import Incidencias from './pages/Incidencias/Incidencias';
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

  const handleLogin = (status) => {
    setIsAuthenticated(status);
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
        { path: '/trabajadores', element: <ProtectedRoute element={<Trabajadores />} isAuthenticated={isAuthenticated} /> },
        { path: '/equipos', element: <ProtectedRoute element={<Equipos />} isAuthenticated={isAuthenticated} /> },
        { path: '/movimientos', element: <ProtectedRoute element={<Movimientos />} isAuthenticated={isAuthenticated} /> },
        { path: '/historial', element: <ProtectedRoute element={<Historial />} isAuthenticated={isAuthenticated} /> },
        { path: '/incidencias', element: <ProtectedRoute element={<Incidencias />} isAuthenticated={isAuthenticated} /> },
        { path: '/trabajadores/crear', element: <ProtectedRoute element={<CrearTrabajadores />} isAuthenticated={isAuthenticated} /> },
        { path: '/equipos/crear', element: <ProtectedRoute element={<CrearEquipos />} isAuthenticated={isAuthenticated} /> },
        { path: '/movimientos/crear', element: <ProtectedRoute element={<CrearMovimientos />} isAuthenticated={isAuthenticated} /> },
        { path: '/mapa', element: <ProtectedRoute element={<Mapa />} isAuthenticated={isAuthenticated} /> },
        { path: '/detalles-maquina/:id', element: <ProtectedRoute element={<DetallesMaquinaPage />} isAuthenticated={isAuthenticated} /> },
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


/* import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Trabajadores from './pages/Trabajadores/Trabajadores';
import Equipos from './pages/Equipos/Equipos';
import Permisos from './pages/Permisos/Permisos';
import Historial from './pages/Historial/Historial';
import Incidencias from './pages/Incidencias/Incidencias';
import CrearTrabajadores from './pages/CrearTrabajadores/CrearTrabajadores';
import CrearEquipos from './pages/CrearEquipos/CrearEquipos';
import CrearPermisos from './pages/CrearPermisos/CrearPermisos';
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

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login onLogin={handleLogin} />,
    },
    {
      element: <Layout />, // Componente que se renderiza para todas las rutas hijas
      children: [
        {
          path: '/inicio',
          element: isAuthenticated ? <Inicio /> : <Navigate to="/" />, // Si el usuario está autenticado, muestra la página "Inicio", de lo contrario redirige al login
        },
        {
          path: '/trabajadores',
          element: isAuthenticated ? <Trabajadores /> : <Navigate to="/" />,
        },
        {
          path: '/equipos',
          element: isAuthenticated ? <Equipos /> : <Navigate to="/" />,
        },
        {
          path: '/permisos',
          element: isAuthenticated ? <Permisos /> : <Navigate to="/" />,
        },
        {
          path: '/historial',
          element: isAuthenticated ? <Historial /> : <Navigate to="/" />,
        },
        {
          path: '/incidencias',
          element: isAuthenticated ? <Incidencias /> : <Navigate to="/" />,
        },
        {
          path: '/trabajadores/crear',
          element: isAuthenticated ? <CrearTrabajadores /> : <Navigate to="/" />,
        },
        {
          path: '/equipos/crear',
          element: isAuthenticated ? <CrearEquipos /> : <Navigate to="/" />,
        },
        {
          path: '/permisos/crear',
          element: isAuthenticated ? <CrearPermisos /> : <Navigate to="/" />,
        },
        {
          path: '/mapa',
          element: isAuthenticated ? <Mapa /> : <Navigate to="/" />,
        },
        {
            path: '/detalles-maquina/:id',
            element: isAuthenticated ? <DetallesMaquinaPage /> : <Navigate to="/" />,
        },
        {
            path: '/usuario-historial',
            element: isAuthenticated ? <UsuarioHistorialPage /> : <Navigate to="/" />,
        },
        {
            path: '/usuario-editar',
            element: isAuthenticated ? <UsuarioEditarPage /> : <Navigate to="/" />,
        },
        {
            path: '/usuario-accesos',
            element: isAuthenticated ? <UsuarioAccesosPage /> : <Navigate to="/" />,
        },
        {
            path: '/usuario-movimientos',
            element: isAuthenticated ? <UsuarioMovimientosPage /> : <Navigate to="/" />,
        },
        {
            path: '/usuario-usos',
            element: isAuthenticated ? <UsuarioUsosPage /> : <Navigate to="/" />,
        },
        {
            path: '/usuario-incidencias',
            element: isAuthenticated ? <UsuarioIncidenciasPage /> : <Navigate to="/" />,
        },
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
 */
