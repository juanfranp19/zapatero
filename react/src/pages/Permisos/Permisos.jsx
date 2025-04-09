import React from 'react';
import FiltrarPermisos from "../../components/FiltrarPermisosForm/FiltrarPermisosForm";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const Permisos = () => {
    return (
        <div>
            <h2>Bienvenido a Permisos</h2>
            <p>Este es el contenido de la página Permisos.</p>
            <FiltrarPermisos/>
        </div>
    );
};

export default Permisos;