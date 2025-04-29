import React from 'react';
import CrearEquipos from "../../components/CrearEquipos/CrearEquipos";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const CrearEquiposPage = () => {
    return (
        <div>
            <p>Este es el contenido de la página Creacion de Equipos.</p>
            <Breadcrumbs/>
            <CrearEquipos/>
        </div>
    );
};

export default CrearEquiposPage;