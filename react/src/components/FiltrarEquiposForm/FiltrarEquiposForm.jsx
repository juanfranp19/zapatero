import './FiltrarEquiposForm.css';
import React from 'react';

import { useGetEquipos } from '../../hooks/useEquipo';

const FiltrarEquiposForm = () => {
    const { equipos, cargando } = useGetEquipos();

    const API_URL = import.meta.env.VITE_API_URL;

    // Variables para llamar al storage de las imagenes
    const STORAGE_IMAGEN_URL = `${API_URL}/storage/public/equipos/imagen/`;
    const STORAGE_DESCRIPCION_URL = `${API_URL}/storage/public/equipos/descripcion/`;

    return (
        <div style={{ overflowX: "auto" }}>
            <table className="table table-striped table-bordered table-hover dataTable no-footer" aria-describedby="datatable_orders_info">
                <thead>
                    <tr role="row" className="heading">
                        <th width="2%" className="sorting_disabled" rowSpan="1" colSpan="1">
                            <div className="checker">
                                <span><input type="checkbox" className="group-checkable" /></span>
                            </div>
                        </th>
                        <th width="5%" className="sorting">ID&nbsp;#</th>
                        <th width="15%" className="sorting">Nombre</th>
                        <th width="10%" className="sorting">Tipo</th>
                        <th width="10%" className="sorting">Activo</th>
                        <th width="10%" className="sorting">Reparación</th>
                        <th width="10%" className="sorting">Mantenimiento</th>
                        <th width="10%" className="sorting">Imagen</th>
                        <th width="10%" className="sorting">Descripción</th>
                        <th width="10%" className="sorting">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cargando ? (
                        <tr>
                            <td colSpan="10" style={{ textAlign: 'center' }}>Cargando equipos...</td>
                        </tr>
                    ) : (
                        equipos.map((equipo) => (
                            <tr key={equipo.id}>
                                <td>
                                    <div className="checker">
                                        <span><input type="checkbox" className="group-checkable" /></span>
                                    </div>
                                </td>
                                <td>{equipo.id}</td>
                                <td>{equipo.nombre}</td>
                                <td>{equipo.tipo?.nombre || 'N/A'}</td>
                                <td>{equipo.activo === 1 ? 'Sí' : 'No'}</td>
                                <td>{equipo.reparacion === 1 ? 'Sí' : 'No'}</td>
                                <td>{equipo.mantenimiento === 1 ? 'Sí' : 'No'}</td>
                                <td>
                                    {equipo.imagen ? (
                                        <a href={`${STORAGE_IMAGEN_URL}${equipo.imagen}`} target="_blank" rel="noopener noreferrer">
                                        Ver imagen
                                        </a>
                                    ) : (
                                        'No hay nada'
                                    )}
                                    </td>
                                    <td>
                                    {equipo.descripcion ? (
                                        <a href={`${STORAGE_DESCRIPCION_URL}${equipo.descripcion}`} target="_blank" rel="noopener noreferrer">
                                        Ver descripción
                                        </a>
                                    ) : (
                                        'No hay nada'
                                    )}
                                    </td>
                                <td>
                                    <a href="equipos-historial.html" className="btn btn-sm blue-dark btn-blue-dark">
                                        <i className="fa fa-edit"></i> Detalles
                                    </a>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FiltrarEquiposForm;
