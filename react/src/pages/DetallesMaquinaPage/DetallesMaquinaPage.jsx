import React from 'react';
import { useParams } from 'react-router-dom';
import DetallesMaquina from "../../components/DetallesMaquina/DetallesMaquina.jsx";

const DetallesMaquinaPage = () => {
    const { id } = useParams();

    return (
        <div>
            <DetallesMaquina id={id} />
        </div>
    );
};

export default DetallesMaquinaPage;
