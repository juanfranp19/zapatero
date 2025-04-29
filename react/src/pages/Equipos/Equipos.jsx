import React from 'react';
import FiltrarEquipos from "../../components/FiltrarEquiposForm/FiltrarEquiposForm";
import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const EquiposPage = () => {
    return (
        <div>
            <h2>Bienvenido a Equipos</h2>
            <p>Este es el contenido de la página Equipos.</p>

            <Link to="/crear-equipo" className="btn btn-circle btn-default">
                <i className="fa fa-plus"></i>
                <span className="hidden-480"> Crear Equipo </span>
            </Link>

            <FiltrarEquipos/>
        </div>
    );
};

export default EquiposPage;
