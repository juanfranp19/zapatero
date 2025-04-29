import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './css/style.css';
import Login from './components/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Usuarios from './pages/Usuarios/Usuarios';
import Equipos from './pages/Equipos/Equipos';
import Permisos from './pages/Permisos/Permisos';
import Historial from './pages/Historial/Historial';
import Incidencias from './pages/Incidencias/Incidencias';
import CrearUsuarios from './pages/CrearUsuarios/CrearUsuarios';
import CrearEquipos from './pages/CrearEquipos/CrearEquipos';
import CrearPermisos from './pages/CrearPermisos/CrearPermisos';
import Mapa from './pages/Mapa/Mapa';

const App = () => {
//  const [isAuthenticated, setIsAuthenticated] = useState(false); // si se recarga la pagina, se pierde el estado y el usuario vuelve al login
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
      element: <Layout />,
      children: [
        {
          path: '/inicio',
          element: isAuthenticated ? <Inicio /> : <Navigate to="/" />,
        },
        {
          path: '/usuarios',
          element: isAuthenticated ? <Usuarios /> : <Navigate to="/" />,
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
          path: '/usuarios/crear',
          element: isAuthenticated ? <CrearUsuarios /> : <Navigate to="/" />,
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;


// import Header from "./components/Header/Header";
// import './css/style.css';
// import DatosPersonalIncidencias from "./components/DatosPersonalIncidencias/DatosPersonalIncidencias";

// function App() {

//    return (
//        <>
//            <div className="container-fluid">
//                <div className="row">
//                    {/* <Header></Header> */}
//                    <DatosPersonalIncidencias></DatosPersonalIncidencias>
//                </div>
//            </div>
//        </>
//    );
// }

// export default App;
