import React from 'react';
import FiltrarUsuarios from "../../components/FiltrarUsuariosForm/FiltrarUsuariosForm";
import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const UsuariosPage = () => {
    return (
        <div>
            <h2>Bienvenido a Usuarios</h2>
            <p>Este es el contenido de la página Usuarios.</p>

            <Link to="/crear-usuario" className="btn btn-circle btn-default">
                <i className="fa fa-plus"></i>
                <span className="hidden-480"> Crear Usuario </span>
            </Link>

            <FiltrarUsuarios/>
        </div>
    );
};

export default UsuariosPage;
