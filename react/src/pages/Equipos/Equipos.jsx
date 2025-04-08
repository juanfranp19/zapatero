import React from 'react';
import FiltrarEquipos from "../../components/FiltrarEquiposForm/FiltrarEquiposForm";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const Inicio = () => {
    return (
        <div>
            <h2>Bienvenido a Equipos</h2>
            <p>Este es el contenido de la página Equipos.</p>
            <FiltrarEquipos/>
        </div>
    );
};

export default Inicio;
