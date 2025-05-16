import React from 'react';
import './DatosUsos.css';

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

    return (
        <div className="row componente-inicio">

            <div className="col-12">
                <h1 className="titulo-componentes-inicio">Usos</h1>
            </div>

            <div className="col-12">
                <div>
                    {/* Dropdown encima de la tabla */}
                    <div className="dropdown-container">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle mb-2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Crear Usos
                        </button>
                        <form className="dropdown-menu p-4">
                            <div className="mb-2">
                                <label htmlFor="DropdownFormFechaUso" className="form-label">
                                    Fecha Uso
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="DropdownFormFechaUso" />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="DropdownFormHoraInicio" className="form-label">
                                    Hora Inicio
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="DropdownFormHoraInicio" />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="DropdownFormHoraFin" className="form-label">
                                    Hora Fin
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="DropdownFormHoraFin" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="DropdownFormEquipo" className="form-label">
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="DropdownFormEquipo"
                                    placeholder='Equipo' />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Crear
                            </button>
                        </form>
                    </div>

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
