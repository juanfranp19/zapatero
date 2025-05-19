import React, { useEffect, useState } from 'react';

import CrearUsos from '../CrearUsos/CrearUsos';
import UpdateUso from '../UpdateUso/UpdateUso';

import { useCrearUso, useActualizarUso } from '../../hooks/useUso';
import { useAuth } from '../../hooks/useAuth';
import { useGetTrabajador } from '../../hooks/useTrabajador';
import { useGetUser } from '../../hooks/useUser';

import './DatosUsos.css';

const DatosUsos = () => {

    const { user } = useAuth();
    const { user: userInfo, cargando: cargandoUser } = useGetUser(user?.id);
    const { trabajador, cargando: cargandoTrabajador } = useGetTrabajador(userInfo?.trabajador?.id);

    const { crearUso, cargando: cargandoCrearUso } = useCrearUso();
    const { actualizarUso, cargando: cargandoActualizarUso } = useActualizarUso();

    const [usando, setUsando] = useState(false);
    const [idUsando, setIdUsando] = useState('');

    function encontrarTrabajadorConUso() {

        // verifica si se ha cargado completamente los datos del trabajador
        if (trabajador && Array.isArray(trabajador.usos)) {
            console.log(trabajador.usos);

            // verifica si encuentra una hora_fin null
            const findTrabajadorUsando = trabajador.usos.find((uso) => uso.hora_fin === null);

            // si la encuentra, actualiza el estado de usando a true y el id del uso que aún no ha terminado para paserselo al formulario de actualización
            if (findTrabajadorUsando) {
                setUsando(true);
                setIdUsando(findTrabajadorUsando.id);
            }
        }
    }

    useEffect(encontrarTrabajadorConUso, [trabajador]);

    const usos = [
        { trabajador: 'Raul Rodriguez', equipo: 'Tractor #1', fecha: '14/02/2015 08:15' },
        { trabajador: 'Isidro Ibarra', equipo: 'Tractor #1', fecha: '14/02/2015 08:15' },
        { trabajador: 'Maria Dolores', equipo: 'Tractor #1', fecha: '14/02/2015 08:15' },
        { trabajador: 'Alejandro Nortes', equipo: 'Tractor #1', fecha: '14/02/2015 08:15' },
        { trabajador: 'Raul Rodriguez', equipo: 'Tractor #1', fecha: '14/02/2015 08:15' },
        { trabajador: 'Isidro Ibarra', equipo: 'Tractor #1', fecha: '14/02/2015 08:15' },
        { trabajador: 'Maria Dolores', equipo: 'Tractor #1', fecha: '14/02/2015 08:15' },
        { trabajador: 'Alejandro Nortes', equipo: 'Tractor #1', fecha: '14/02/2015 08:15' },
    ];

    const manejarCrearUso = async (nuevoUso) => {

        // coge la respuesta de la API
        const respuestaCrearUso = crearUso(nuevoUso);

        // si respuesta de la API, la muestra por la consola
        if (respuestaCrearUso) {
            console.log(respuestaCrearUso);

            setTimeout(() => {
                window.location.reload();
            }, 300);
        }
    }

    const manejarActualizarUso = async (usoActualizado) => {

        // coge la respuesta de la API, envía los datos actualizados y el id del uso que se actualiza
        const respuestaActualizarUso = actualizarUso(usoActualizado, idUsando);

        // si respuesta de la API, la muestra por la consola
        if (respuestaActualizarUso) {
            console.log(respuestaActualizarUso);

            setTimeout(() => {
                window.location.reload();
            }, 300);
        }
    }

    return (
        <div className='row componente-inicio'>

            <div className='col-12'>
                <h1 className='titulo-componentes-inicio'>Usos</h1>
            </div>

            <div className='col-12 scroll-horizontal'>
                <div>

                    <div className='botones-crear-actualizar-uso'>
                        {
                            /* Dropdown encima de la tabla */

                            cargandoTrabajador
                                ? 'cargando'
                                : (
                                    // si no está cargando, verifica si usando es true
                                    usando
                                        ? (<>
                                            <CrearUsos manejarCrearUso={manejarCrearUso} cargando={cargandoCrearUso} disabled={usando} />
                                            <UpdateUso idUsando={idUsando} manejarActualizarUso={manejarActualizarUso} cargando={cargandoActualizarUso} disabled={!usando} />
                                        </>)
                                        : <CrearUsos manejarCrearUso={manejarCrearUso} cargando={cargandoCrearUso} disabled={usando} />

                                )
                        }
                    </div>

                    {/* Tabla debajo del dropdown */}
                    <table className='table mb-5'>
                        <thead>
                            <tr>
                                <th>Trabajador</th>
                                <th>Equipo</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usos.map((uso, index) => (
                                <tr key={index}>
                                    <td>{uso.trabajador}</td>
                                    <td>{uso.equipo}</td>
                                    <td>{uso.fecha}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default DatosUsos;
