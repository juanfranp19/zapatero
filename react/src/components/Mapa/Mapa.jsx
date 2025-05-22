import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'

import mapa from '../../assets/mapa.jpeg';
import aseoscomunes from '../../assets/aseoscomunes.jpeg';
import cocina from '../../assets/cocina.jpeg';

import { useGetEquipos } from '../../hooks/useEquipo';
import { useGetSalas } from '../../hooks/useSala';

import './Mapa.css';

const API_URL = import.meta.env.VITE_API_URL;

// Variables para llamar al storage de las imagenes
const STORAGE_URL = API_URL + '/storage/public/equipos/imagen/';

// mapa imagenes estaticas
const imagenesEstaticasPorSala = {
    1: cocina,
    8: aseoscomunes,
    // Agrega más si necesitas
};


const Mapa = () => {

    // Estado para controlar si se muestra el popup
    const [showPopup, setShowPopup] = useState(false);

    // Estado para almacenar el nombre de la sala seleccionada
    const [popupContent, setPopupContent] = useState('');

    // Estado para almacenar los equipos de la sala seleccionada
    const [popupEquipos, setPopupEquipos] = useState([]);

    // Consigue todos los equipos y el estado de carga
    const { equipos, cargando: cargandoEquipos } = useGetEquipos();

    // Consigue todas las salas y el estado de carga
    const { salas, cargando: cargandoSalas } = useGetSalas();

    // guardamos el id de la sala seleccionada
    const [salaIdSeleccionada, setSalaIdSeleccionada] = useState(null);

    const handleAreaClick = (salaId) => {

        // Filtra los equipos según el ID de la sala
        const dataEquipo = (
            equipos
                .filter((equipo) => (equipo.sala.id === salaId))
        );

        // Consigue el nombre de la sala a partir del id
        const nombreSala = (
            salas
                .find((sala) => (sala.id === salaId))
                .nombre
        )

        // Si hay equipos para esa sala, se muestra el popup con los datos
        if (dataEquipo) {
            setPopupContent(nombreSala);
            setPopupEquipos(dataEquipo);
            setShowPopup(true);
            setSalaIdSeleccionada(salaId); // guardamos el salaId
        }
    };

    // Cierra el popup
    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='mapa'>
            <img src={mapa} useMap='#image-map' alt='image map' />

            {/* áreas del mapa para pulsar */}
            <map name='image-map'>
                <area shape='rect' coords='14,53,159,164' alt='Aseo 1' onClick={() => handleAreaClick(8)} />
                <area shape='rect' coords='160,16,326,167' alt='Cocina' onClick={() => handleAreaClick(1)} />
                <area shape='rect' coords='329,16,521,167' alt='Sala VR' onClick={() => handleAreaClick(2)} />
                <area shape='rect' coords='16,232,158,387' alt='Sala Reuniones' onClick={() => handleAreaClick(4)} />
                <area shape='rect' coords='16,392,254,509' alt='Aula Informatica' onClick={() => handleAreaClick(5)} />
                <area shape='rect' coords='259,392,349,507' alt='Despacho' onClick={() => handleAreaClick(6)} />
                <area shape='rect' coords='255,393,520,508' alt='Sala Prototipado' onClick={() => handleAreaClick(7)} />
                <area shape='rect' coords='527,394,615,509' alt='Almacen 1' onClick={() => handleAreaClick(10)} />
                <area shape='rect' coords='622,394,769,509' alt='Almacen 2' onClick={() => handleAreaClick(11)} />
                <area shape='rect' coords='683,239,771,386' alt='Almacen 3' onClick={() => handleAreaClick(12)} />
                <area shape='rect' coords='527,70,583,233' alt='Almacen 4' onClick={() => handleAreaClick(13)} />
                <area shape='rect' coords='683,70,770,233' alt='Aseo 2' onClick={() => handleAreaClick(14)} />
                <area shape='rect' coords='527,241,674,384' alt='Almacén Central' onClick={() => handleAreaClick(9)} />
                <area shape='rect' coords='165,169,518,386' alt='Salon Cooworking' onClick={() => handleAreaClick(3)} />
            </map>

            {showPopup && (
                <div className='mapa-popup-ventana'>

                    {/* botón de cerrar */}
                    <button className='mapa-boton-cerrar' onClick={closePopup}>
                        <i className="bi bi-x-square" />
                        <i className="bi bi-x-square-fill" />
                    </button>

                    {/* nombre de la sala seleccionada */}
                    <h3>{cargandoSalas ? 'Cargando...' : popupContent}</h3>

                    {/* todos los equipos */}
                    <div className='mapa-equipos'>

                        {/* muestra cada equipo */}
                        {/* Verificamos si la sala seleccionada es Aseo 1*/}
                        {imagenesEstaticasPorSala[salaIdSeleccionada] && (
                            <img
                                src={imagenesEstaticasPorSala[salaIdSeleccionada]}
                                alt={`Sala ${popupContent}`}
                                className='mapa-equipo-imagen'
                            />
                        )}

                        {popupEquipos.map((equipo) => (
                            <div key={equipo.id} className='mapa-equipo'>
                                <Link to={`/mapa/detalles-maquina/${equipo.id}`}
                                    className='mapa-link'
                                    data-tooltip-id='mapa-tooltip'
                                    data-tooltip-content={equipo.nombre}
                                >
                                    <img
                                        src={STORAGE_URL + equipo.imagen}
                                        alt={`Imagen ${equipo.id}`}
                                        className='mapa-equipo-imagen'
                                    />
                                    <Tooltip id='mapa-tooltip' />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mapa;
