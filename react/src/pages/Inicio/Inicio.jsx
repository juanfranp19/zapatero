import React from 'react';
// import DatosUsos from "../components/EstadisticasUso/EstadisticasUso.jsx"; //por ahora sin hacer
import DatosUsos from "../../components/DatosUsos/DatosUsos.jsx";
import DatosPersonalIncidencias from "../../components/DatosPersonalIncidencias/DatosPersonalIncidencias.jsx";
import DatosIncidencias from "../../components/DatosIncidencias/DatosIncidencias.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const InicioPage = () => {
    return (
        <div className='container-fluid'>
            <div className="row col-12">
                <TituloPagina nombre="Inicio"/>
            </div>
            {/*<EstadisticasUso/>*/}
            <DatosUsos/>
            <DatosPersonalIncidencias/>
            <DatosIncidencias/>
        </div>
    );
};

export default InicioPage;
