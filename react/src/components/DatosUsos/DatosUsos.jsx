import React from 'react';
import CrearUsos from '../CrearUsos/CrearUsos';

import { useCrearUso } from '../../hooks/useUso';

const DatosUsos = () => {

    const usos = [
        { trabajador: "Raul Rodriguez", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Isidro Ibarra", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Maria Dolores", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Alejandro Nortes", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Raul Rodriguez", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Isidro Ibarra", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Maria Dolores", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
        { trabajador: "Alejandro Nortes", equipo: "Tractor #1", fecha: "14/02/2015 08:15" },
    ];

    const { crearUso, cargando } = useCrearUso();

    const manejarCrearUso = async (nuevoUso) => {

        // coge la respuesta de la API
        const respuestaCrearUso = crearUso(nuevoUso);

        // si respuesta de la API, la muestra por la consola
        if (respuestaCrearUso) {
            console.log(respuestaCrearUso);
        }
    }

    return (
        <div className="row componente-inicio">

            <div className="col-12">
                <h1 className="titulo-componentes-inicio">Usos</h1>
            </div>

            <div className="col-12 scroll-horizontal">
                <div>
                    {/* Dropdown encima de la tabla */}
                    <CrearUsos manejarCrearUso={manejarCrearUso} cargando={cargando} />

                    {/* Tabla debajo del dropdown */}
                    <table className="table mb-5">
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
