import React from 'react';
import FiltrarUsuarios from "../../components/FiltrarUsuariosForm/FiltrarUsuariosForm";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const Inicio = () => {
    return (
        <div>
            <h2>Bienvenido a Usuarios</h2>
            <p>Este es el contenido de la página Usuarios.</p>
            <FiltrarUsuarios/>
        </div>
    );
};

export default Inicio;
