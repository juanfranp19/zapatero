import './FiltrarUsosForm.css';
import React, { useState } from 'react';
import { useGetUsos } from '../../hooks/useUso';

const FiltrarUsosForm = () => {
    const { usos, cargando } = useGetUsos();

    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    const itemsPerPage = 10; // Número de elementos por página

    // Filtrar los usos según el nombre del equipo
    const filteredUsos = usos.filter((uso) =>
        uso.equipo?.nombre.toLowerCase().includes(searchQuery.toLowerCase()) &&
        uso.hora_fin !== null
    );

    // Lógica para paginación
    const indexOfLastUso = currentPage * itemsPerPage;
    const indexOfFirstUso = indexOfLastUso - itemsPerPage;
    const currentUsos = filteredUsos.slice(indexOfFirstUso, indexOfLastUso);

    // Cambiar página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(filteredUsos.length / itemsPerPage);

    // Lógica para el rango de botones de paginación
    const rangeSize = 10;
    const startPage = Math.floor((currentPage - 1) / rangeSize) * rangeSize + 1;
    const endPage = Math.min(startPage + rangeSize - 1, totalPages);

    return (
        <div className="table-container">
            <input
                type="text"
                placeholder="Buscar por equipo"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <table className="table table-striped table-bordered table-hover" id="datatable_orders">
                <thead>
                    <tr role="row" className="heading">
                        <th width="2%">
                            <div className="checker">
                                <span>
                                    <input type="checkbox" className="group-checkable" />
                                </span>
                            </div>
                        </th>
                        <th width="5%">ID</th>
                        <th width="15%">Equipo</th>
                        <th width="15%">Usuario</th>
                        <th width="15%">Fecha de Uso</th>
                        <th width="15%">Hora de Inicio</th>
                        <th width="15%">Hora de Fin</th>
                        <th width="10%">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cargando ? (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>Cargando usos...</td>
                        </tr>
                    ) : (
                        currentUsos.map((uso) => (
                            <tr key={uso.id}>
                                <td>
                                    <div className="checker">
                                        <span><input type="checkbox" className="group-checkable" /></span>
                                    </div>
                                </td>
                                <td>{uso.id}</td>
                                <td>{uso.equipo ? uso.equipo.nombre : 'N/A'}</td>
                                <td>
                                    {uso.trabajador
                                        ? `${uso.trabajador.nombre} ${uso.trabajador.apellidos}`
                                        : 'N/A'}
                                </td>
                                <td>{uso.fecha_uso}</td>
                                <td>{uso.hora_inicio}</td>
                                <td>{uso.hora_fin}</td>
                                <td>
                                    <a href="usuario-usos.html" className="btn btn-sm btn-blue-dark">
                                        <i className="fa fa-edit"></i> Detalles
                                    </a>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Paginación */}
            <div className="pagination-container">
                <div className="pagination">
                    {/* Botón para ir a la primera página */}
                    <button
                        className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
                        onClick={() => paginate(1)}
                        disabled={currentPage === 1}
                    >
                        &lt;&lt;
                    </button>

                    {/* Botón para ir a la página anterior */}
                    <button
                        className={`page-button ${currentPage === 1 ? 'disabled' : ''}`}
                        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &laquo; Anterior
                    </button>

                    {/* Botones de paginación intermedios */}
                    {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                        <button
                            key={startPage + index}
                            onClick={() => paginate(startPage + index)}
                            className={`page-button ${currentPage === startPage + index ? 'active' : ''}`}
                        >
                            {startPage + index}
                        </button>
                    ))}

                    {/* Botón para ir a la página siguiente */}
                    <button
                        className={`page-button ${currentPage === totalPages ? 'disabled' : ''}`}
                        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Siguiente &raquo;
                    </button>

                    {/* Botón para ir a la última página */}
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
    );
};

export default FiltrarUsosForm;
