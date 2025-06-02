import './FiltrarEquiposForm.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useGetEquipos } from '../../hooks/useEquipo';

const FiltrarEquiposForm = () => {

    const { equipos, cargando } = useGetEquipos();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const API_URL = import.meta.env.VITE_API_URL;
    const STORAGE_IMAGEN_URL = `${API_URL}/storage/public/equipos/imagen/`;
    const STORAGE_DESCRIPCION_URL = `${API_URL}/storage/public/equipos/descripcion/`;

    // Ordenar los equipos por ID de forma ascendente
    const equiposOrdenados = equipos.slice().sort((a, b) => a.id - b.id);

    // Lógica para paginación
    const indexOfLastEquipo = currentPage * itemsPerPage;
    const indexOfFirstEquipo = indexOfLastEquipo - itemsPerPage;
    const currentEquipos = equiposOrdenados.slice(indexOfFirstEquipo, indexOfLastEquipo);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(equiposOrdenados.length / itemsPerPage);

    const rangeSize = 10;
    const startPage = Math.floor((currentPage - 1) / rangeSize) * rangeSize + 1;
    const endPage = Math.min(startPage + rangeSize - 1, totalPages);

    return (
        <div className="table-container">
            <div style={{ overflowX: "auto" }}>
                <table className="table table-striped table-bordered table-hover dataTable no-footer" aria-describedby="datatable_orders_info">
                    <thead>
                        <tr role="row" className="heading">
                            <th width="5%">ID&nbsp;#</th>
                            <th width="15%">Nombre</th>
                            <th width="10%">Tipo</th>
                            <th width="10%">Activo</th>
                            <th width="10%">Reparación</th>
                            <th width="10%">Mantenimiento</th>
                            <th width="10%">Imagen</th>
                            <th width="10%">Descripción</th>
                            <th width="10%">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargando ? (
                            <tr>
                                <td colSpan="10" style={{ textAlign: 'center' }}>Cargando equipos...</td>
                            </tr>
                        ) : currentEquipos.length === 0 ? (
                            <tr>
                                <td colSpan="10" style={{ textAlign: 'center' }}>No hay equipos disponibles.</td>
                            </tr>
                        ) : (
                            currentEquipos.map((equipo) => (
                                <tr key={equipo.id}>
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
                                        ) : 'No hay nada'}
                                    </td>
                                    <td>
                                        {equipo.descripcion ? (
                                            <a href={`${STORAGE_DESCRIPCION_URL}${equipo.descripcion}`} target="_blank" rel="noopener noreferrer">
                                                Ver descripción
                                            </a>
                                        ) : 'No hay nada'}
                                    </td>
                                    <td>
                                        <NavLink to={`detalles/${equipo.id}`}>
                                            <button className="btn btn-sm blue-dark btn-blue-dark">
                                                <i className="fa fa-edit"></i> Detalles
                                            </button>
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {/* Paginación */}
                <div className="pagination-container">
                    <div className="pagination">
                        <button
                            className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => paginate(1)}
                            disabled={currentPage === 1}
                        >
                            &lt;&lt;
                        </button>
                        <button
                            className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &laquo; Anterior
                        </button>

                        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                            <button
                                key={startPage + index}
                                onClick={() => paginate(startPage + index)}
                                className={`page-button ${currentPage === startPage + index ? 'active' : ''}`}
                            >
                                {startPage + index}
                            </button>
                        ))}

                        <button
                            className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Siguiente &raquo;
                        </button>
                        <button
                            className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={() => paginate(totalPages)}
                            disabled={currentPage === totalPages}
                        >
                            &gt;&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FiltrarEquiposForm;
