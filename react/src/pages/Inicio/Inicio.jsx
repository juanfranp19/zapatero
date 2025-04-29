import React from 'react';
// import DatosUsos from "../components/EstadisticasUso/EstadisticasUso.jsx"; //por ahora sin hacer
import DatosUsos from "../../components/DatosUsos/DatosUsos.jsx";
import DatosPersonalIncidencias from "../../components/DatosPersonalIncidencias/DatosPersonalIncidencias.jsx";
import DatosIncidencias from "../../components/DatosIncidencias/DatosIncidencias.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const InicioPage = () => {
    return (
        <div className='container-fluid'>
            <div className="row col-12">

            </div>
            {/*<EstadisticasUso/>*/}
            <DatosUsos/>
            <DatosPersonalIncidencias/>
            <DatosIncidencias/>
        </div>
    );
};

export default InicioPage;
