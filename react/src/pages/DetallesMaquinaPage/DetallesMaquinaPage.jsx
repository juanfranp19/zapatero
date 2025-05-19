import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DetallesMaquina from "../../components/DetallesMaquina/DetallesMaquina.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";

const DetallesMaquinaPage = () => {
    const { id } = useParams();
    const [nombreMaquina, setNombreMaquina] = useState(null);

    return (
        <div>
            <TituloPagina nombre="Detalles Maquina" />
            <Breadcrumbs nombreFinal={nombreMaquina} />
            <DetallesMaquina id={id} onNombreCargado={setNombreMaquina} />
        </div>
    );
};

export default DetallesMaquinaPage;
