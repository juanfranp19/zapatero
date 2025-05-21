import './FiltrarTrabajadoresForm.css';
import React, { useState } from "react";

import { useGetTrabajadores } from '../../hooks/useTrabajador';

const FiltrarUsuariosForm = () => {

    const { trabajadores, cargando } = useGetTrabajadores();

    // console.log('Trabajadores:', trabajadores)

    // Función para extraer el último acceso
    const getUltimoAcceso = (accesos) => {
        if (!accesos || accesos.length === 0) return 'Sin acceso';

        const accesoMasReciente = accesos.reduce((ultimo, actual) => {
            const fechaUltimo = new Date(ultimo.fecha_entrada);
            const fechaActual = new Date(actual.fecha_entrada);
            return fechaActual > fechaUltimo ? actual : ultimo;
        });

        return accesoMasReciente.fecha_entrada || 'Desconocido';
    };

    return (
        <div className="table-container">
            <div style={{ overflowX: "auto" }}>
                {cargando ? (
                    <p>Cargando...</p>
                ) : (
                    <table className="table table-striped table-bordered table-hover" id="datatable_orders">
                        <thead>
                            <tr className="heading">
                                <th width="2%">
                                    <div className="checker"><span><input type="checkbox" className="group-checkable" /></span></div>
                                </th>
                                <th width="5%">Trabajador</th>
                                <th width="15%">Último Acceso</th>
                                <th width="15%">Nombre</th>
                                <th width="10%">DNI</th>
                                <th width="10%">Num. Accesos</th>
                                <th width="10%">Máquinas usadas</th>
                                <th width="10%">Estado</th>
                                <th width="10%">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trabajadores.map((trabajador) => (
                                <tr key={trabajador.id}>
                                    <td>
                                        <div className="checker"><span><input type="checkbox" /></span></div>
                                    </td>
                                    <td>{trabajador.id}</td>
                                    <td>{getUltimoAcceso(trabajador.accesos)}</td>
                                    <td>{trabajador.nombre} {trabajador.apellidos}</td>
                                    <td>{trabajador.dni}</td>
                                    <td>{trabajador.accesos?.length || 0}</td>
                                    <td>{trabajador.usos?.length || 0}</td>
                                    <td>{trabajador.activo ? "Activo" : "Inactivo"}</td>
                                    <td>
                                        <a href="usuario-historial.html" className="btn btn-sm btn-blue-dark">
                                            <i className="fa fa-edit"></i> Detalles
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default FiltrarUsuariosForm;